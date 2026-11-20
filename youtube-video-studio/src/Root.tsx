import React from 'react';
import {Composition, Still} from 'remotion';
import sample from '../episodes/sample.json';
import {Episode, calculateEpisodeMetadata} from './Episode';
import {Thumbnail} from './Thumbnail';
import {episodeSchema} from './schema';
import type {EpisodeProps} from './schema';

const defaultProps = episodeSchema.parse(sample) as EpisodeProps;

export const RemotionRoot: React.FC = () => {
	return (
		<>
			{/* Main YouTube video, 16:9 1080p */}
			<Composition
				id="Episode"
				component={Episode}
				width={1920}
				height={1080}
				fps={30}
				durationInFrames={300}
				schema={episodeSchema}
				defaultProps={defaultProps}
				calculateMetadata={calculateEpisodeMetadata}
			/>
			{/* Same episode as a YouTube Short, 9:16 */}
			<Composition
				id="Short"
				component={Episode}
				width={1080}
				height={1920}
				fps={30}
				durationInFrames={300}
				schema={episodeSchema}
				defaultProps={defaultProps}
				calculateMetadata={calculateEpisodeMetadata}
			/>
			<Still
				id="Thumbnail"
				component={Thumbnail}
				width={1280}
				height={720}
				schema={episodeSchema}
				defaultProps={defaultProps}
			/>
		</>
	);
};
