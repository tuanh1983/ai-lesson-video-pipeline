import React from 'react';
import {AbsoluteFill, Audio, Sequence, interpolate, staticFile, useVideoConfig} from 'remotion';
import type {CalculateMetadataFunction} from 'remotion';
import {Outro} from './components/Outro';
import {SceneView} from './components/SceneView';
import {TitleCard} from './components/TitleCard';
import type {EpisodeProps} from './schema';

const sec = (s: number, fps: number) => Math.round(s * fps);

// Total length = intro + all scenes + outro, so you never set duration by hand.
export const calculateEpisodeMetadata: CalculateMetadataFunction<EpisodeProps> = ({props}) => {
	const fps = 30;
	const scenes = props.scenes.reduce((sum, s) => sum + sec(s.durationInSeconds, fps), 0);
	return {
		fps,
		durationInFrames: Math.max(1, sec(props.introSeconds, fps) + scenes + sec(props.outroSeconds, fps)),
	};
};

export const Episode: React.FC<EpisodeProps> = (props) => {
	const {fps, durationInFrames} = useVideoConfig();
	const introFrames = sec(props.introSeconds, fps);
	const outroFrames = sec(props.outroSeconds, fps);
	const bodyEnd = durationInFrames - outroFrames;

	let cursor = introFrames;
	const sceneSequences = props.scenes.map((scene, i) => {
		const length = sec(scene.durationInSeconds, fps);
		const from = cursor;
		cursor += length;
		return (
			<Sequence key={i} from={from} durationInFrames={length} name={`Scene ${i + 1}`}>
				<SceneView scene={scene} theme={props.theme} index={i} />
			</Sequence>
		);
	});

	// Music: fade in, duck under the voiceover during the body, swell in the outro, fade out.
	const musicVolume = (f: number) => {
		const target = props.voiceover && f >= introFrames && f < bodyEnd ? props.musicDuckedVolume : props.musicVolume;
		const fadeIn = interpolate(f, [0, fps], [0, 1], {extrapolateRight: 'clamp'});
		const fadeOut = interpolate(f, [durationInFrames - fps * 1.5, durationInFrames], [1, 0], {
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		});
		return target * fadeIn * fadeOut;
	};

	return (
		<AbsoluteFill style={{backgroundColor: props.theme.background}}>
			{introFrames > 0 ? (
				<Sequence durationInFrames={introFrames} name="Intro">
					<TitleCard
						channelName={props.channelName}
						title={props.title}
						subtitle={props.subtitle}
						theme={props.theme}
					/>
				</Sequence>
			) : null}

			{sceneSequences}

			{outroFrames > 0 ? (
				<Sequence from={bodyEnd} durationInFrames={outroFrames} name="Outro">
					<Outro channelName={props.channelName} text={props.outroText} theme={props.theme} />
				</Sequence>
			) : null}

			{props.music ? <Audio src={staticFile(props.music)} volume={musicVolume} loop /> : null}

			{props.voiceover ? (
				<Sequence from={introFrames} name="Voiceover">
					<Audio src={staticFile(props.voiceover)} />
				</Sequence>
			) : null}
		</AbsoluteFill>
	);
};
