# Render report: ly11-giao-thoa-song (DRAFT, NO AUDIO)

> **DRAFT.** This is a picture-only draft rendered on the coordinator's instruction ("draft mode, the human will review later"). It skips the "assets must be READY" gate: `briefs/ly11-giao-thoa-song-assets.md` is out of date and does not say READY. **The video has no audio track.** Do not publish it.

## Outputs

| File | Size | Notes |
|---|---|---|
| `out/ly11-giao-thoa-song-draft.mp4` | 49,833,625 B (49.8 MB) | Episode composition, 1920x1080, 30 fps, 3600 frames, **120.000 s**. Video stream only (checked with ffprobe). |
| `out/ly11-giao-thoa-song-check-intro.png` | 1,520,190 B | frame 30 (0:01.0, intro title card) |
| `out/ly11-giao-thoa-song-check-01.png` … `-19.png` | 63 KB – 1.9 MB each | one still from the middle of each scene, see the table below |
| `out/ly11-giao-thoa-song-check-outro.png` | 1,629,368 B | frame 3585 (0:119.5, middle of the last second) |

Not rendered on purpose:
- **Thumbnail.** `public/images/ly11-giao-thoa-song-thumb.png` is final (coordinator), so I did not run `remotion still Thumbnail`.
- **Short.** Not requested for this draft.

## Durations

- Timeline: intro 2 s + 19 scenes 113 s + outro 5 s = **120 s** (60 + 3390 + 150 frames).
- Voiceover duration: **n/a, no voiceover yet.** Scene durations are **not rescaled**. They stay at the production sheet values (113 s total). Once the voiceover exists, rescale them to its length ±0.5 s and keep each scene ≥ 2.5 s.

## Changes to `episodes/ly11-giao-thoa-song.json`

- Every scene now has `"type": "image"`, `"src": "images/ly11-giao-thoa-song-sNN.png"`, `"kenBurns": true`. Captions and durations are unchanged.
- `"thumbnailImage": "images/ly11-giao-thoa-song-thumb-bg.png"` (the file exists in `public/images/`).
- `voiceover` and `music` are **not set**.
- `npm run typecheck`: passed.

## Check frames (middle of each scene)

| NN | Scene start frame | Check frame | Time | Duration |
|---|---|---|---|---|
| 01 | 60 | 150 | 0:05.0 | 6 s |
| 02 | 240 | 360 | 0:12.0 | 8 s |
| 03 | 480 | 570 | 0:19.0 | 6 s |
| 04 | 660 | 735 | 0:24.5 | 5 s |
| 05 | 810 | 915 | 0:30.5 | 7 s |
| 06 | 1020 | 1095 | 0:36.5 | 5 s |
| 07 | 1170 | 1290 | 0:43.0 | 8 s |
| 08 | 1410 | 1530 | 0:51.0 | 8 s |
| 09 | 1650 | 1755 | 0:58.5 | 7 s |
| 10 | 1860 | 1935 | 1:04.5 | 5 s |
| 11 | 2010 | 2115 | 1:10.5 | 7 s |
| 12 | 2220 | 2295 | 1:16.5 | 5 s |
| 13 | 2370 | 2460 | 1:22.0 | 6 s |
| 14 | 2550 | 2625 | 1:27.5 | 5 s |
| 15 | 2700 | 2775 | 1:32.5 | 5 s |
| 16 | 2850 | 2940 | 1:38.0 | 6 s |
| 17 | 3030 | 3075 | 1:42.5 | 3 s |
| 18 | 3120 | 3225 | 1:47.5 | 7 s |
| 19 | 3330 | 3390 | 1:53.0 | 4 s |

Reviewer note: the captions are revealed word by word, so mid-scene stills show captions that are only partly revealed (the unrevealed words are greyed out). Line wrapping is still visible.

## Things the reviewer should look at (seen in the check frames, not fixed)

1. **Caption wraps.** The brief's render check asks about these.
   - s03: "pha không đổi" wraps to line 2 by itself. The brief has a fallback for this (an intentional two-line split).
   - s05: "±2…)" wraps to line 2 by itself.
   - s13: "tối xen kẽ" wraps to line 2.
   - s18: the formula is split across the line break as "· i" / "= λD/a". A forced break before "· i = λD/a" would read better.
   - Intro title card: "phút" wraps to line 2 by itself ("Giao thoa sóng trong 2 / phút").
2. **Contrast in s13–s17.** In the Young fringe screenshots (bright yellow/green stripes), the stripes show through the semi-transparent caption box. That lowers readability, most of all in s13–s15 (yellow).
3. **Reused images.** s13 and s14 are byte-identical, and so are s16 and s17. This looks intentional (same simulation state) but should be confirmed.
4. **Text burned into the images.** The images are simulation screenshots, so they carry their own labels (S1, S2, M, x (mm) axis ticks, quiz text). The production sheet says "images carry no text". That rule was written for AI images. This is a deliberate change of source, but worth a look.
5. **s19 (quiz screenshot).**
   - The header text is cut off at the top edge ("Bám sát SGK Kết nối tri th…").
   - The caption sits over the text of question 7, so it looks busy.
   - The visible question 6 is exactly the episode's worked example (a = 1 mm, D = 2 m, λ = 0,5 μm), with its answer options on screen. That is fine for a "practise on the web" call to action, but note that it gives the answer away.

## Still missing before a final render

- **Voiceover:** missing. There is no Vietnamese TTS voice on this PC. Once it exists, set `voiceover`, rescale scene durations to its length, and re-render.
- **Music:** intentionally skipped for now (coordinator decision).
- **Asset report:** `briefs/ly11-giao-thoa-song-assets.md` should be refreshed so that it shows the 20 image assets as present and says READY once the voiceover exists.
- **Short:** not rendered (not requested).
