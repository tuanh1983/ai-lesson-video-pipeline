# YouTube Video Studio (Remotion template)

Assembles AI-generated assets (video clips, images, voiceover, music) into a finished
YouTube video, a 9:16 Short, and a thumbnail — all driven by one JSON file per episode.

## Requirements
- Node.js 18+ (tested on 18.17). TypeScript is pinned to v5 because v7 needs a newer Node.
- First render downloads a headless Chrome automatically.

## Commands
| Command | What it does |
|---|---|
| `npm run studio` | Opens Remotion Studio in the browser to preview and tweak props live |
| `npm run render` | Renders `out/episode.mp4` (1920x1080) from `episodes/sample.json` |
| `npm run render:short` | Renders `out/short.mp4` (1080x1920) |
| `npm run thumbnail` | Renders `out/thumbnail.png` (1280x720) |

For a new episode: `npx remotion render Episode out/ep002.mp4 --props=episodes/ep002.json`

## Workflow per episode
1. Write the script (Claude/ChatGPT), split into scenes of ~3–8 seconds.
2. Generate voiceover (ElevenLabs or a licensed open-source TTS) → `public/audio/ep002-voice.mp3`
3. Generate clips (Google Flow / Seedance) → `public/clips/` or images → `public/images/`
4. Generate music (Suno, paid plan for commercial use) → `public/audio/ep002-music.mp3`
5. Copy `episodes/sample.json` to `episodes/ep002.json` and fill it in (paths are relative to `public/`).
6. Preview in `npm run studio`, then render.
7. Upload — tick YouTube's "altered or synthetic content" box for realistic AI footage.

## Episode JSON fields
- `scenes[]`: `type` = `video` | `image` | `color` (placeholder), `src`, `durationInSeconds`, `caption`,
  `kenBurns` (slow zoom on images), `muted` (mute the clip's own audio; default true)
- `voiceover`, `music`: audio paths. Music auto-fades and ducks to `musicDuckedVolume` under the voiceover.
- `theme`: brand colors. `introSeconds` / `outroSeconds`: set 0 to disable.
- `thumbnailImage`: background image for the thumbnail.

Total duration is calculated automatically from intro + scenes + outro.
Tip: make scene durations add up to roughly the voiceover length.

## Licensing notes
- Remotion is free for individuals and companies of up to 3 people; larger companies need a license (remotion.pro).
- Font: Be Vietnam Pro (Google Fonts, OFL) — supports Vietnamese.
