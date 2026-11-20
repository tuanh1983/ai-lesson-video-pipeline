import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {fontFamily} from '../font';
import type {Theme} from '../schema';

// Simple burned-in caption with a word-by-word reveal.
export const Caption: React.FC<{text: string; theme: Theme}> = ({text, theme}) => {
	const frame = useCurrentFrame();
	const {width, height, durationInFrames} = useVideoConfig();
	const unit = width / 100;
	const isVertical = height > width;

	const words = text.split(/\s+/);
	// Reveal all words over the first ~60% of the scene.
	const revealEnd = Math.max(1, durationInFrames * 0.6);
	const visibleCount = Math.ceil(
		interpolate(frame, [0, revealEnd], [0, words.length], {extrapolateRight: 'clamp'}),
	);

	return (
		<AbsoluteFill
			style={{
				justifyContent: isVertical ? 'center' : 'flex-end',
				alignItems: 'center',
				paddingBottom: isVertical ? 0 : unit * 5,
				paddingLeft: unit * 6,
				paddingRight: unit * 6,
			}}
		>
			<div
				style={{
					fontFamily,
					fontWeight: 800,
					fontSize: unit * (isVertical ? 6.5 : 3.4),
					lineHeight: 1.25,
					color: theme.text,
					textAlign: 'center',
					backgroundColor: 'rgba(8,10,20,0.82)', // solid enough to read over bright images
					textWrap: 'balance', // avoid a single orphan word on the last line
					maxWidth: isVertical ? '100%' : '82%',
					padding: `${unit * 0.8}px ${unit * 1.6}px`,
					borderRadius: unit * 1,
				}}
			>
				{words.map((w, i) => (
					<span
						key={i}
						style={{
							opacity: i < visibleCount ? 1 : 0.25,
							color: i === visibleCount - 1 ? theme.accent : theme.text,
						}}
					>
						{w}{' '}
					</span>
				))}
			</div>
		</AbsoluteFill>
	);
};
