---
description: Turn a filled episode brief (briefs/epNNN.md) into a script, AI prompts, YouTube metadata and an episode JSON
argument-hint: briefs/ep001.md
---

Read the episode brief at: $ARGUMENTS
Also read `src/schema.ts` and `episodes/sample.json`. Fields left blank or marked "you decide": choose sensible values and say what you chose.

Work in two passes depending on section 4 of the brief.

## Pass A — no assets yet (section 4 empty)
Create `briefs/<episode>-production.md` containing:
1. **Script**: split into scenes of 3–8 s (≈ 2.5 words/second for English, ≈ 3.5 syllables/second for Vietnamese), in the brief's language. Hit the target length. Hook in the first 3 seconds.
2. **Per scene**: narration line, on-screen caption (short), duration, and a **visual prompt in English** ready to paste into the chosen visual tool, repeating the visual style and character description in every prompt for consistency.
3. **Voiceover**: the full narration as one block to paste into the TTS tool / read aloud.
4. **Music prompt** for Suno (mood, tempo, instrumental, length).
5. **Thumbnail**: 2–5 word text + an image prompt.
6. **YouTube metadata**: 3 title options, description (with an AI-content disclosure line), 10–15 tags, and a reminder to tick "altered or synthetic content" if footage is realistic.
7. **File checklist**: exact filenames to save under `public/` (e.g. `clips/ep001-s01.mp4`, `audio/ep001-voice.mp3`).

Also create `episodes/<episode>.json` using `"type": "color"` placeholders so a draft can be previewed right away.

## Pass B — assets listed in section 4
1. Check every listed file exists under `public/`; report missing ones.
2. Update `episodes/<episode>.json` with real `src`/`type`, voiceover and music. Scale scene durations so intro-free total ≈ voiceover length.
3. Run `npm run typecheck`, then render a check still and view it. Then render: long → `npx remotion render Episode out/<episode>.mp4 --props=episodes/<episode>.json`, short → `Short`, plus `Thumbnail`, per the brief's format.
4. Report output paths and anything that needs a human look (caption timing, flagged facts).

Flag any fact you are not sure about instead of stating it as true. Never use real people's likeness/voice or copyrighted characters in prompts.
