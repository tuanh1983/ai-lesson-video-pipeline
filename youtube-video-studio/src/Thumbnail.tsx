import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {fontFamily} from './font';
import type {EpisodeProps} from './schema';

// 1280x720 YouTube thumbnail. Big, short text reads best — keep titles under ~6 words here.
export const Thumbnail: React.FC<EpisodeProps> = ({title, channelName, theme, thumbnailImage}) => {
	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(135deg, ${theme.primary}, ${theme.background})`,
				fontFamily,
			}}
		>
			{thumbnailImage ? (
				<Img
					src={staticFile(thumbnailImage)}
					style={{width: '100%', height: '100%', objectFit: 'cover'}}
				/>
			) : null}
			<AbsoluteFill
				style={{
					background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%)',
					justifyContent: 'center',
					padding: 70,
				}}
			>
				<div
					style={{
						color: theme.accent,
						fontSize: 34,
						fontWeight: 800,
						textTransform: 'uppercase',
						letterSpacing: 4,
					}}
				>
					{channelName}
				</div>
				<div
					style={{
						color: theme.text,
						fontSize: 96,
						fontWeight: 800,
						lineHeight: 1.05,
						maxWidth: 820,
						marginTop: 16,
						textShadow: '0 6px 24px rgba(0,0,0,0.6)',
					}}
				>
					{title}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
