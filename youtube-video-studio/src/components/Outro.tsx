import React from 'react';
import {AbsoluteFill, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {fontFamily} from '../font';
import type {Theme} from '../schema';

export const Outro: React.FC<{channelName: string; text: string; theme: Theme}> = ({
	channelName,
	text,
	theme,
}) => {
	const frame = useCurrentFrame();
	const {fps, width} = useVideoConfig();
	const unit = width / 100;
	const pop = spring({frame, fps, config: {damping: 12}});
	const pulse = 1 + Math.sin(frame / 6) * 0.03;

	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(160deg, ${theme.background}, ${theme.primary})`,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily,
				color: theme.text,
				textAlign: 'center',
			}}
		>
			<div style={{fontSize: unit * 4.5, fontWeight: 800, opacity: pop}}>{channelName}</div>
			<div
				style={{
					marginTop: unit * 2.5,
					fontSize: unit * 2.6,
					fontWeight: 700,
					backgroundColor: '#FF0033',
					padding: `${unit * 1}px ${unit * 3}px`,
					borderRadius: unit * 0.8,
					transform: `scale(${pop * pulse})`,
				}}
			>
				{text}
			</div>
		</AbsoluteFill>
	);
};
