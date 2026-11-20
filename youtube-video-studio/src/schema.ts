import {z} from 'zod';

// One shot in the video. `src` is a file inside /public (e.g. "clips/scene1.mp4").
// Leave `src` empty to get a branded gradient placeholder while you draft.
export const sceneSchema = z.object({
	src: z.string().optional(),
	type: z.enum(['video', 'image', 'color']).default('color'),
	durationInSeconds: z.number().positive(),
	caption: z.string().optional(),
	// Slow zoom on still images, to make AI images feel alive.
	kenBurns: z.boolean().default(true),
	// Mute the clip's own audio (AI video often has noise). Default: muted.
	muted: z.boolean().default(true),
});

export const themeSchema = z.object({
	primary: z.string().default('#6C5CE7'),
	accent: z.string().default('#FDCB6E'),
	background: z.string().default('#0F0F1A'),
	text: z.string().default('#FFFFFF'),
});

export const episodeSchema = z.object({
	channelName: z.string(),
	title: z.string(),
	subtitle: z.string().optional(),
	theme: themeSchema,
	introSeconds: z.number().min(0).default(3),
	outroSeconds: z.number().min(0).default(5),
	outroText: z.string().default('Subscribe for more'),
	// Audio files inside /public, e.g. "audio/voiceover.mp3".
	voiceover: z.string().optional(),
	music: z.string().optional(),
	musicVolume: z.number().min(0).max(1).default(0.35),
	// Music volume while the voiceover plays (ducking).
	musicDuckedVolume: z.number().min(0).max(1).default(0.12),
	// Image inside /public used as the thumbnail background (optional).
	thumbnailImage: z.string().optional(),
	scenes: z.array(sceneSchema).min(1),
});

export type Scene = z.infer<typeof sceneSchema>;
export type Theme = z.infer<typeof themeSchema>;
export type EpisodeProps = z.infer<typeof episodeSchema>;
