import React from 'react';
import {
	AbsoluteFill,
	Img,
	OffthreadVideo,
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import type {Scene, Theme} from '../schema';
import {Caption} from './Caption';

const FADE_FRAMES = 12;

export const SceneView: React.FC<{scene: Scene; theme: Theme; index: number}> = ({
	scene,
	theme,
	index,
}) => {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	const opacity = interpolate(frame, [0, FADE_FRAMES], [0, 1], {extrapolateRight: 'clamp'});
	const zoom = scene.kenBurns
		? interpolate(frame, [0, durationInFrames], [1, 1.12], {extrapolateRight: 'clamp'})
		: 1;

	const fill: React.CSSProperties = {width: '100%', height: '100%', objectFit: 'cover'};

	let media: React.ReactNode;
	if (scene.src && scene.type === 'video') {
		media = <OffthreadVideo src={staticFile(scene.src)} muted={scene.muted} style={fill} />;
	} else if (scene.src && scene.type === 'image') {
		media = <Img src={staticFile(scene.src)} style={{...fill, transform: `scale(${zoom})`}} />;
	} else {
		// Placeholder: branded gradient that shifts per scene, so drafts are still watchable.
		const angle = 120 + index * 40 + frame * 0.3;
		media = (
			<AbsoluteFill
				style={{
					background: `linear-gradient(${angle}deg, ${theme.primary}, ${theme.background})`,
				}}
			/>
		);
	}

	return (
		<AbsoluteFill style={{backgroundColor: theme.background, opacity}}>
			{media}
			{scene.caption ? <Caption text={scene.caption} theme={theme} /> : null}
		</AbsoluteFill>
	);
};
