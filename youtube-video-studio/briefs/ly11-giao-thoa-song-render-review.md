Round 1: FAIL — fixes applied · Round 2

# Review: ly11-giao-thoa-song (render, round 2, DRAFT, no audio) — PASS

Frames viewed: check-intro, check-01 … check-19, check-outro, and public/images/ly11-giao-thoa-song-thumb.png. Audio and duration vs voiceover were not judged (draft, coordinator instruction).

## Required fixes (blocking)
None.

## Round-1 fixes verified
1. [s10] Fixed. M is at the midpoint of S1S2 (960, 87), sitting on the continuous yellow k = 0 line, which now runs unbroken from the source line to the bottom of the frame. No red dashes near S1S2.
   - s11: M is on the next yellow line (x ≈ 1047 px, one maximum spacing ≈ 87 px from the centre).
   - s12: M is on the line after that (x ≈ 1134 px).
   - The spacing matches the scale: S1S2 = 567 px, λ = 2 cm ≈ 174 px, so λ/2 = 1 cm ≈ 87 px. This is consistent with the s10–s12 captions ("cách nhau λ/2", "2x = λ", "1 cm").
2. [s19] Fixed. The site header ("Học Lý Hoá 11" and "Bám sát SGK Kết nối tri thức") is fully visible. The last list line, "Chương IV. Dòng điện. Mạch điện", ends at y ≈ 690, well above the caption box (y ≈ 870). Nothing is sliced.

## Regression check (re-captured images)
- s05: M on the first yellow line left of the centre. d2 − d1 ≈ 175 px ≈ λ (k = 1). ok
- s06: M on the bisector, k = 0. ok
- s07: M on a red line. d2 − d1 ≈ 87 px ≈ λ/2 (minimum). ok
- s09/s18: M on the second yellow line. d2 − d1 ≈ 349 px ≈ 2λ (k = 2). ok
- s16/s17: i = 0.5 μm × 2 m / 1 mm = 1 mm. The green fringes are 120 px apart and the axis shows 120 px per mm, so the image matches. "x (mm)" is now visible in s13–s17 (kenBurns off). ok
- Maximum/minimum lines now have constant width and reach the sources. Colours are consistent in every frame: yellow = maximum, red = minimum.
- s01/s03/s08: M sits next to S1 and no dashed lines run off-frame. ok
- Captions: all fully visible. Diacritics and the symbols λ, μ, ½, ±, →, − render correctly.
- Intro, outro and thumbnail are unchanged in quality. The thumbnail title is readable at small size.

## Suggestions (optional)
- [captions, wrapping] Still open from round 1:
  - s04: "S1, / S2" is split across the line break.
  - s14: line 1 ends with "(λ:".
  - s15 and s18: line 2 starts with "·".
  - Fix: add a manual line-break marker in `Caption.tsx` (e.g. "|"). A no-break space will not work, because `\s+` also matches U+00A0.
- [s13–s15 vs s16–s17] The yellow-light frames use different fringe spacings: the i bracket is ≈ 0.9 mm in s13/s14 and ≈ 1.5 mm in s15. Nothing on screen states a value, so this is not an error. Using one capture for s13–s15 would look more consistent.
- [s19] The website screenshot shows a personal progress state ("Đã xem 1/4 phần"). Optional: capture it from a fresh browser profile so it shows "Chưa bắt đầu" everywhere.
- [s01, s03, s08] The short M–S1 / M–S2 construction has no teaching role in these scenes (hook, coherent sources, λ = v/f). Optional: hide M in these captures.
- [s13–s15] The yellow stripes still faintly show through the caption box. The text is readable.

## Checked
- accuracy: ok (s05–s12, s16–s18 images match the captions and the physics) · timing: 120 s timeline (2 + 113 + 5) vs target 120 s; voiceover match deferred (no audio yet) · policy: ok (no real people, other channels' branding or copyrighted characters; s19 shows only the channel's own website)

VERDICT: PASS
