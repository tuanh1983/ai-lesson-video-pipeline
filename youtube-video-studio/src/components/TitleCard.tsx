import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {fontFamily} from '../font';
import type {Theme} from '../schema';

export const TitleCard: React.FC<{
	channelName: string;
	title: string;
	subtitle?: string;
	theme: Theme;
}> = ({channelName, title, subtitle, theme}) => {
	const frame = useCurrentFrame();
	const {fps, width, durationInFrames} = useVideoConfig();
	const unit = width / 100; // scale everything to video width (works for 16:9 and 9:16)

	const pop = spring({frame, fps, config: {damping: 14}});
	const fadeOut = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background: `radial-gradient(circle at 30% 30%, ${theme.primary}, ${theme.background} 70%)`,
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily,
				color: theme.text,
				opacity: fadeOut,
				padding: unit * 6,
				textAlign: 'center',
			}}
		>
			<div
				style={{
					fontSize: unit * 2.2,
					letterSpacing: unit * 0.4,
					textTransform: 'uppercase',
					color: theme.accent,
					fontWeight: 700,
					opacity: pop,
				}}
			>
				{channelName}
			</div>
			<div
				style={{
					fontSize: unit * 6.5,
					fontWeight: 800,
					lineHeight: 1.1,
					marginTop: unit * 1.5,
					transform: `scale(${0.8 + 0.2 * pop})`,
				}}
			>
				{title}
			</div>
			{subtitle ? (
				<div style={{fontSize: unit * 2.8, marginTop: unit * 2, opacity: pop * 0.85}}>{subtitle}</div>
			) : null}
		</AbsoluteFill>
	);
};
