# Review: ly11-giao-thoa-song (render, round 1, DRAFT, no audio) — FAIL

Frames viewed: check-intro, check-01 … check-19, check-outro, plus public/images/ly11-giao-thoa-song-thumb.png. Audio and duration-vs-voiceover not judged (coordinator instruction). I treated the website screenshots (labels S1, S2, M, axis numbers) and the reused images in s13/s14 and s16/s17 as accepted.

## Required fixes (blocking)
1. [s10, check-10] The scene teaches "maxima on S1S2", and M sits at the midpoint (the k = 0 maximum). But the simulation draws no maximum line there. The central yellow k = 0 line only starts at y ≈ 270 px, and near S1S2 M sits in a gap between two red (minimum) dashes. A student sees the midpoint drawn as **not** a maximum, which is the opposite of the lesson. The other lines near S1S2 are also broken into dashes, and that is exactly the region this scene is about. → Re-capture s10 with the k = 0 line (and the other maxima) drawn all the way to S1S2. If the simulation can't do that, move M to a point where a yellow line is visible, or mark the maxima on S1S2 with dots in the simulation. Check s11/s12 at the same time: there M lands on yellow dashes, so those are OK as they are.
2. [s19, check-19] Text is cut off and sliced:
   - The site header is cut at the top edge: the "Học Lý Hoá 11" logo and "Bám sát SGK Kết nối tri…" both lose their upper half.
   - The caption box cuts through the line "Chương IV. Dòng điện. Mạch điện". "Ch" stays visible and the rest shows faintly behind the box edge.
   
   This is the last scene before the outro and it looks broken. → Either set `"kenBurns": false` for s19 (the zoom is probably what crops the header at 75%), or re-crop the screenshot so the header is fully inside or fully outside the frame and nothing sits behind the caption band (y ≈ 870–985 px). Then re-take check-19.

## Suggestions (optional)
- [captions, wrapping] Balanced wrapping still breaks a few captions badly:
  - s04: "…S1, / S2 · MS1…" splits the pair S1, S2.
  - s06: "(nguồn / cùng pha)".
  - s13: "(ánh sáng / đơn sắc)".
  - s14: "(λ: / bước sóng…" leaves "(λ:" hanging at the end of line 1.
  - s15 and s18: line 2 starts with "·".

  `Caption.tsx` splits on `\s+`, so a no-break space will not help: JS `\s` also matches U+00A0 and U+202F. Add a manual line-break marker instead (e.g. "|" → line break, or a `captionLines` array) and use it for s04 (break before "·"), s14 (break before "(λ:"), s15 and s18 (break before the "·").
- [s08] The dashed lines from S1/S2 run off-frame to an M that is not visible (bottom-right) and pass behind the caption. The construction looks like it leads nowhere. Use a frame where M is on screen, or one without the M construction (the scene only needs λ = v/f).
- [s10–s12] M is drawn about 50 px below S1S2 (the dashed lines form a shallow V), while the caption says "Trên S1S2". If you re-capture s10 anyway, put M exactly on the segment for all three.
- [s13–s17] The fringe axis shows numbers but no unit; "x (mm)" is not visible in any frame, probably cropped by the zoom. In s16/s17 the bright fringes are exactly 1 axis unit apart, which matches i = 1 mm. A visible "mm" would make that link explicit. Consider `kenBurns: false` or a crop that keeps the axis label.
- [s02, s05–s07, s09, s18] The jagged, pixel-stepped maximum/minimum lines and the dashes near the sources come from the simulation. They are acceptable, but they look rough at 1080p. If the site can export at a higher resolution or with anti-aliasing, re-capture.
- [s13–s15] With opacity 0.82 the yellow stripes still faintly show through the caption box. Text is readable. Optional: raise opacity to about 0.88 only for very bright backgrounds.

## Checked
- Image vs teaching point: I measured the s5–s9 frames against S1 (676, 62), S2 (1243, 62), with λ ≈ 180 px from the spacing of maxima near S1S2.
  - s5: M on a yellow line, d2 − d1 ≈ 176 px ≈ λ → maximum k = 1. ok
  - s6: M on the bisector (k = 0). ok
  - s7: M on a red line, d2 − d1 ≈ 87 px ≈ λ/2 → minimum. ok
  - s9: d2 − d1 ≈ 350 px ≈ 1.94λ ≈ 2λ, M on the second yellow line from the centre. ok
  - Colours: yellow = maximum, red = minimum, consistent in every frame.
  - s16/s17: green fringes 1 axis unit apart. ok
  - s10: does not match (fix 1).
- Captions: all 19 fully visible, not cut off. Vietnamese diacritics (ỗ ạ ữ ổ ẫ ợ ặ) and the symbols λ, μ, ½, ±, →, − render correctly.
- Intro: title now wraps as "Giao thoa sóng / trong 2 phút". Channel name and subtitle are clean. ok
- Outro: "Toán Lý Hoá 11 Trực Quan" plus "Làm bài luyện tập trên web nhé!" render correctly. ok
- Thumbnail (1280×720): large white title on a darkened background, readable at small size. The orange channel line is smaller but legible. ok
- No placeholder or blank scenes.
- Policy: no real people, other channels' branding or copyrighted characters in the frames. s19 shows only the channel's own website.
- Timing: 120 s timeline (2 + 113 + 5) vs target 120 s. Voiceover match deferred (no audio yet).
- accuracy: 1 visual mismatch (s10) · timing: 120 s vs target 120 s (VO check deferred) · policy: ok
