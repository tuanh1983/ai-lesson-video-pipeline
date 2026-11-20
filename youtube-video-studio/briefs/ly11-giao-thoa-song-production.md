# Production sheet — ly11-giao-thoa-song

- Brief: `briefs/ly11-giao-thoa-song.md` · **Round 2** (applies `briefs/ly11-giao-thoa-song-review.md`, verdict FAIL in round 1)
- Source of truth for formulas: `hoc-ly-hoa-11/src/data/vatLi.ts` → chapter `giao-thoa-song` (Bài 12. Giao thoa sóng, KNTT). All formulas and worked numbers below come from that formula sheet and quiz.
- Format: Long video 16:9 · Channel (YouTube, intro card): **Toán Lý Hoá 11 Trực Quan** (coordinator default, see "Changes from review" item 5) · Tone: calm, friendly, educational
- Timing: intro title card **2 s** + 19 scenes **113 s** + outro **5 s** = **120 s** (target 120 s ±10%, exactly on target).
  - The intro is kept at 2 s (not the default 3 s) so the spoken hook starts at 0:02, inside the first 3 seconds. The voiceover starts at the end of the intro (`Episode.tsx`).
- Narration rate: ≈ 3.5 syllables/s. Syllables are counted on the **TTS text** (numbers read as words, "Young" = I-âng = 2 syllables, lam-đa = 2, xăng-ti-mét = 3, mi-li-mét = 3, micrô-mét = 3).
- Total narration: **362 syllables ≈ 103 s** of speech in 113 s of scenes → about 0.5 s of pause per scene on average. No scene is above 96% of its slot.
- **Editor note:** the table durations are planning values. After generating the voiceover, align each scene's `durationInSeconds` to the real TTS timestamps (start of each sentence), not to the table.

---

## Changes from review

**Required fixes**
1. **Scene 4 timing (blocking).** Took the reviewer's preferred narration: "Hai nguồn cùng pha S một, S hai; M cách chúng đê một và đê hai." It is 16 syllables in 5 s (3.2/s, 91%). The caption is unchanged. Scene 4 timestamps (0:22–0:27) are unchanged.
2. **Chapters ≥ 10 s.** Deleted `00:08 Giao thoa sóng là gì?`. The first chapter is now `00:00 Mở đầu – Giao thoa sóng là gì?` (22 s). Every chapter is now between 15 and 25 s (see §6). Because s11 grew by 1 s (see item 3), the last two chapters moved by 1 s: `01:18 → 01:19` and `01:43 → 01:44`.
3. **Syllable counts.** Every scene was recounted on the TTS text. The reviewer's counts are confirmed for the round-1 text (s7 = 27, s8 = 28, s9 = 25, s12 = 18, s13 = 22). One more correction: round-1 s18 was 23, not 24. The round-1 total was 378. Changes to scenes that were full or over their slot:
   - s1: 21 → 19 (dropped "rất", "lại")
   - s8: 28 → 26 ("Ví dụ:" → "Cho")
   - s9: 25 → 22 (dropped "nên M là"; the caption already gives the conclusion)
   - s12: 18 → 16
   - s13: 22 → 20 (dropped "trong", "trên màn")
   - s16: 21 → 20 ("Ví dụ:" → "Cho")
   - s19: 14 → 13 (dropped "Giờ")
   - s10: 17 → 16 ("Trên đoạn S1S2" → "Trên S1S2", matching the caption). It was at 97%.
   - s15: 17 → 16 ("Trong đó a…" → "Với a…", which also avoids a sentence that starts with a bare "a")

   New total: **362 syllables ≈ 103 s** in 113 s of scenes. The highest load is s7 at 96%. The table now has a "Load" column (syllables ÷ (3.5 × duration)).
4. **TTS spelling.** §3 is now the exact TTS input: f → "ép", v → "vê", x → "ích", M → "em", S → "ét", Young → "I-âng", λ → "lam-đa", all numbers in words (hai mươi, bốn mươi, mười, mười bốn, không phẩy năm, mười một…). The §2 narration column uses the same spelled-out text, so the syllable counts match what TTS reads. On-screen captions keep normal symbols (d1, λ, Hz, Young…).
5. **Branding.** `channelName` in the JSON (shown on the intro card) is now **"Toán Lý Hoá 11 Trực Quan"**. This is the channel the `upload-youtube-lyhoa` skill publishes to. It is the coordinator's default, and a human may override it. The brief still says "Học Lý Hoá 11"; I did not edit the brief. The outro CTA stays "Làm bài luyện tập trên web nhé!". The s19 narration and caption still say "web Học Lý Hoá 11" on purpose: that is the **study website's** own name (`hoc-ly-hoa-11/index.html` title "Học Lý Hóa 11"), not the channel name.

**Optional suggestions applied**
- **s7 wording:** "triệt tiêu nhau" → "làm yếu nhau". This matches s1/s2 and the sheet note ("dao động yếu hoặc đứng yên") and keeps the same syllable count.
- **s7 caption:** added the range of k: `Cực tiểu: d2 − d1 = (k + ½)λ (k nguyên)`.
- **s11 caption + narration:** the conclusion is now stated: caption `Dịch x → hiệu đổi 2x; 2x = λ → x = λ/2`, narration "…muốn đổi một lam-đa thì ích bằng lam-đa chia hai". To fit it, s11 went from 6 s to 7 s (23 syllables, 94%). This also brings the total from 119 s to exactly 120 s.
- **§6 website link:** added a link line above the AI line. The AI line is still last. **No URL exists in the repo**, so the line holds a placeholder that must be filled before upload (see §8).
- **§6 "Made for kids: No":** added under the metadata for the publisher.
- **Tags:** added "toán lý hoá 11 trực quan" (15 tags) to match the channel name.

**Optional suggestions skipped (and why)**
- **s18 recap additions** ("nguồn kết hợp", "λ/2 trên S1S2"): skipped. s18 is at 94%, and adding them would push s18 or s19 over capacity. The reviewer said it is fine as is.
- **Caption notation d1/S1 vs d₂/S₁S₂:** kept as is. Captions use plain digits, which are safe in any render font. The description uses Unicode subscripts, which display fine on YouTube. The reviewer said either is acceptable.
- **s3 caption wrap (63 characters):** text not changed, because "hiệu số pha không đổi" is the SGK wording and shortening it would change the term. Check it in the Mode B render still. If it wraps badly, the fallback is `Nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi` split over two lines on purpose.

---

## 1. Script (scene by scene)

| # | Time | Beat |
|---|------|------|
| — | 0:00–0:02 | Title card: "Giao thoa sóng trong 2 phút" · channel "Toán Lý Hoá 11 Trực Quan" |
| 1 | 0:02–0:08 | Hook: why is the water strong in some places and still in others? |
| 2 | 0:08–0:16 | Definition of interference |
| 3 | 0:16–0:22 | Condition: coherent sources |
| 4 | 0:22–0:27 | Setup: S1, S2 in phase, point M, d1, d2 |
| 5 | 0:27–0:34 | Maximum condition d2 − d1 = kλ |
| 6 | 0:34–0:39 | Perpendicular bisector = maximum k = 0 |
| 7 | 0:39–0:47 | Minimum condition d2 − d1 = (k + ½)λ |
| 8 | 0:47–0:55 | Worked example: λ = v/f = 2 cm |
| 9 | 0:55–1:02 | Worked example: M is a maximum, k = 2 |
| 10 | 1:02–1:07 | On S1S2: neighbouring maxima λ/2 apart |
| 11 | 1:07–1:14 | Why λ/2 (path difference changes by 2x → x = λ/2) |
| 12 | 1:14–1:19 | Worked example: λ = 2 cm → 1 cm |
| 13 | 1:19–1:25 | Light interferes too: Young's experiment |
| 14 | 1:25–1:30 | Fringe spacing i = λD/a |
| 15 | 1:30–1:35 | Meaning of a and D |
| 16 | 1:35–1:41 | Worked example data |
| 17 | 1:41–1:44 | Result i = 1 mm |
| 18 | 1:44–1:51 | Recap |
| 19 | 1:51–1:55 | Call to action |
| — | 1:55–2:00 | Outro: "Làm bài luyện tập trên web nhé!" |

## 2. Per-scene table

**Visual style block (repeat it in every prompt):** *clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9*

The images carry **no text**. All formulas and labels appear as the burned-in captions, because AI image tools render text and math badly.

The narration column is the **TTS text** (symbols spelled out). Captions use normal symbols. Load = syllables ÷ (3.5 × duration).

| # | Dur (s) | Narration (Vietnamese, TTS-ready) | Syl. | Load | On-screen caption | Visual prompt (English, still image) |
|---|---|---|---|---|---|---|
| 1 | 6 | Hai nguồn sóng trên mặt nước: vì sao có chỗ dao động mạnh, có chỗ gần như đứng yên? | 19 | 90% | Vì sao có chỗ sóng mạnh, có chỗ gần như đứng yên? | Top view of a ripple tank with two small vibrating point sources close together, concentric circular ripples overlapping into a striking interference pattern of bright bands and calm dark bands, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 2 | 8 | Đó là giao thoa sóng: hai sóng kết hợp gặp nhau, tạo ra vùng dao động mạnh xen kẽ vùng dao động yếu hoặc đứng yên. | 26 | 93% | Giao thoa: vùng dao động mạnh xen kẽ vùng dao động yếu | Top view of a ripple tank, two sets of circular waves meeting, hyperbola-shaped bands alternating between strong amber-highlighted bands and flat calm blue bands, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 3 | 6 | Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian. | 17 | 81% | Nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi | Two identical vibrating rods tapping a water surface in sync, side-by-side matching sine waveforms above them with identical spacing, showing same direction and same frequency, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 4 | 5 | Hai nguồn cùng pha ét một, ét hai; em cách chúng đê một và đê hai. | 16 | 91% | Hai nguồn cùng pha S1, S2 · MS1 = d1, MS2 = d2 | Top view of a ripple tank with two glowing source dots on a horizontal line and one marked point above them, two straight dashed lines from the point to each source (one blue, one amber), faint ripples in the background, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 5 | 7 | Em dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau. | 23 | 94% | Cực đại: d2 − d1 = kλ (k = 0, ±1, ±2…) | Two identical sine waves arriving at the same point crest-on-crest and adding into one tall amber wave, inset of a ripple tank with a bright interference band highlighted, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 6 | 5 | Đường trung trực của ét một ét hai chính là cực đại ca bằng không. | 15 | 86% | Trung trực của S1S2: cực đại k = 0 | Top view of a ripple tank, two sources on a horizontal line, the straight central vertical band between them glowing amber as the brightest band, curved bands fanning out on both sides, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 7 | 8 | Em dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, làm yếu nhau. | 27 | 96% | Cực tiểu: d2 − d1 = (k + ½)λ (k nguyên) | Two sine waves arriving at the same point crest-on-trough and cancelling into a nearly flat line, inset of a ripple tank with a calm dark band highlighted in blue, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 8 | 8 | Cho ép bằng hai mươi héc, vê bằng bốn mươi xăng-ti-mét trên giây: lam-đa bằng vê chia ép, bằng hai xăng-ti-mét. | 26 | 93% | f = 20 Hz, v = 40 cm/s → λ = v/f = 2 cm | A single sine wave along a ruler-like scale with one wavelength bracketed by an amber arrow between two neighbouring crests, a small tuning-fork style vibrator at the left, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 9 | 7 | Em cách hai nguồn mười và mười bốn xăng-ti-mét: hiệu là bốn, tức hai lam-đa, cực đại bậc hai. | 22 | 90% | Hiệu đường đi 4 cm = 2λ → cực đại bậc 2 | Top view of a ripple tank, two sources and a point sitting exactly on the second bright band to the side of the central band, two dashed lines of clearly different lengths from the point to the sources, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 10 | 5 | Trên ét một ét hai, hai cực đại liên tiếp cách nhau lam-đa chia hai. | 16 | 91% | Trên S1S2: hai cực đại liên tiếp cách nhau λ/2 | Close-up of the straight segment between two wave sources, evenly spaced amber dots on the segment marking points of strongest vibration, a bracket between two neighbouring dots, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 11 | 7 | Dịch điểm một đoạn ích, hiệu đường đi đổi hai ích; muốn đổi một lam-đa thì ích bằng lam-đa chia hai. | 23 | 94% | Dịch x → hiệu đổi 2x; 2x = λ → x = λ/2 | The segment between two sources with a small point sliding a short distance to the right, one distance arrow growing (amber) while the other shrinks (blue) by the same amount, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 12 | 5 | Với lam-đa bằng hai như trên, các cực đại cách nhau một xăng-ti-mét. | 16 | 91% | λ = 2 cm → các cực đại cách nhau 1 cm | The segment between two sources drawn over a ruler scale, amber maxima dots spaced at equal small steps, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 13 | 6 | Ánh sáng cũng giao thoa: thí nghiệm I-âng với hai khe hẹp cho vân sáng, vân tối xen kẽ. | 20 | 95% | Thí nghiệm Young: vân sáng, vân tối xen kẽ | Side view of a classic double-slit interference setup: a light source, a barrier with two narrow slits, light spreading to a screen showing alternating bright and dark vertical fringes, no people, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 14 | 5 | Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a. | 16 | 91% | Khoảng vân: i = λD/a | Close-up of a screen with evenly spaced bright amber fringes on dark background, an arrow bracket spanning exactly from one bright fringe to the next, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 15 | 5 | Với a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn. | 16 | 91% | a: khoảng cách hai khe · D: từ hai khe đến màn | Side view of the double-slit setup with a small blue bracket between the two slits and a long amber bracket from the slit barrier to the screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 16 | 6 | Cho a bằng một mi-li-mét, đê bằng hai mét, lam-đa bằng không phẩy năm micrô-mét. | 20 | 95% | a = 1 mm, D = 2 m, λ = 0,5 μm | Double-slit setup seen from above at a slight angle, green-cyan monochromatic light beam, fringes on a distant screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 17 | 3 | Thay vào: i bằng một mi-li-mét. | 8 | 76% | i = λD/a = 1 mm | Close-up of the fringe pattern with one fringe spacing highlighted by a bright amber bracket and a small check-mark style glow, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 18 | 7 | Nhớ nhé: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a. | 23 | 94% | Cực đại kλ · Cực tiểu (k + ½)λ · i = λD/a | Split composition: left half a ripple tank interference pattern, right half a double-slit fringe screen, both glowing, a thin amber divider, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 19 | 4 | Hãy làm bài luyện tập trên web Học Lý Hoá mười một nhé! | 13 | 93% | Luyện tập ngay trên web Học Lý Hoá 11! | A friendly flat laptop showing an abstract quiz layout (blank cards and checkboxes, no readable text) with small ripple and light-fringe icons floating around it, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |

Scene durations sum: 6+8+6+5+7+5+8+8+7+5+7+5+6+5+5+6+3+7+4 = **113 s**.
Syllables sum: 19+26+17+16+23+15+27+26+22+16+23+16+20+16+16+20+8+23+13 = **362** (≈ 103.4 s at 3.5/s).

## 3. Voiceover (TTS input — paste as is)

Voice: a stock Vietnamese TTS voice (e.g. a northern-accent female voice), calm and warm, ~3.5 syllables/s, a short pause between lines. No cloned or imitated real voices. Expected read length is ≈ 103 s of speech, plus pauses, inside the 113 s scene window. Align the JSON scene durations to the generated timestamps instead of rushing the read.

Symbols are already spelled out for TTS: ép (f), vê (v), ích (x), em (M), ét (S), đê (d, D), ca (k), lam-đa (λ), I-âng (Young), and numbers in words. On-screen captions keep the normal symbols.

> Hai nguồn sóng trên mặt nước: vì sao có chỗ dao động mạnh, có chỗ gần như đứng yên?
> Đó là giao thoa sóng: hai sóng kết hợp gặp nhau, tạo ra vùng dao động mạnh xen kẽ vùng dao động yếu hoặc đứng yên.
> Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian.
> Hai nguồn cùng pha ét một, ét hai; em cách chúng đê một và đê hai.
> Em dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau.
> Đường trung trực của ét một ét hai chính là cực đại ca bằng không.
> Em dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, làm yếu nhau.
> Cho ép bằng hai mươi héc, vê bằng bốn mươi xăng-ti-mét trên giây: lam-đa bằng vê chia ép, bằng hai xăng-ti-mét.
> Em cách hai nguồn mười và mười bốn xăng-ti-mét: hiệu là bốn, tức hai lam-đa, cực đại bậc hai.
> Trên ét một ét hai, hai cực đại liên tiếp cách nhau lam-đa chia hai.
> Dịch điểm một đoạn ích, hiệu đường đi đổi hai ích; muốn đổi một lam-đa thì ích bằng lam-đa chia hai.
> Với lam-đa bằng hai như trên, các cực đại cách nhau một xăng-ti-mét.
> Ánh sáng cũng giao thoa: thí nghiệm I-âng với hai khe hẹp cho vân sáng, vân tối xen kẽ.
> Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a.
> Với a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn.
> Cho a bằng một mi-li-mét, đê bằng hai mét, lam-đa bằng không phẩy năm micrô-mét.
> Thay vào: i bằng một mi-li-mét.
> Nhớ nhé: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a.
> Hãy làm bài luyện tập trên web Học Lý Hoá mười một nhé!

Ear check after generating: "em" (M) must not sound like the pronoun "em", "I-âng", "web", the single letters "a" and "i", and "micrô-mét" (see §8).

## 4. Music prompt (Suno)

> Instrumental lo-fi study beat, calm and gentle, 70 BPM, soft Rhodes piano, warm muted bass, light vinyl crackle, brushed drums very low in the mix, no vocals, no drops, steady and unobtrusive, loopable, about 2 minutes.

Mix: very quiet. The JSON uses `musicVolume` 0.2 and `musicDuckedVolume` 0.06 (under the voice).

## 5. Thumbnail

- Text (Vietnamese): **GIAO THOA SÓNG – 2 PHÚT**
- Image prompt: *Top view of a ripple tank with two glowing wave sources and a bold, high-contrast interference pattern of amber bright bands and deep blue calm bands, large empty space on the left third for a title, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9, 1280x720*

## 6. YouTube metadata

Channel: **Toán Lý Hoá 11 Trực Quan** · **Made for kids: No** (the content is for Grade 11 students; the `upload-youtube-lyhoa` skill also locks this) · Visibility: Unlisted (skill default).

**Title options**
1. Giao thoa sóng trong 2 phút | Vật lí 11 KNTT – Bài 12
2. Cực đại, cực tiểu giao thoa & khoảng vân Young – hiểu nhanh trong 2 phút
3. Vì sao mặt nước có chỗ đứng yên? Giao thoa sóng – Vật lí 11

**Description**
> Ôn nhanh Bài 12. Giao thoa sóng (Vật lí 11 – Kết nối tri thức) trong khoảng 2 phút, có hình minh hoạ trực quan và ví dụ số cho từng công thức:
> • Điều kiện giao thoa: hai nguồn kết hợp (cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian)
> • Hai nguồn cùng pha: cực đại d₂ − d₁ = kλ, cực tiểu d₂ − d₁ = (k + ½)λ (k nguyên)
> • Trên đoạn S₁S₂: hai cực đại liên tiếp cách nhau λ/2
> • Thí nghiệm Young: khoảng vân i = λD/a
>
> 00:00 Mở đầu – Giao thoa sóng là gì?
> 00:22 Cực đại và cực tiểu giao thoa
> 00:47 Ví dụ tính bước sóng và bậc cực đại
> 01:02 Khoảng cách giữa hai cực đại trên S₁S₂
> 01:19 Giao thoa ánh sáng – thí nghiệm Young
> 01:44 Tóm tắt
>
> Làm bài luyện tập trên web Học Lý Hoá 11 nhé!
> Web luyện tập: https://tuanh1983.github.io/ai-lesson-video-pipeline/#/vat-li/giao-thoa-song/luyen-tap
>
> Video được tạo bằng công cụ AI.

Chapter lengths in a 120 s video: 22 s · 25 s · 15 s · 17 s · 25 s · 16 s. All are ≥ 10 s, the first starts at 00:00, and there are at least 3 chapters, so YouTube's chapter rules are met.
Publisher: replace the bracketed placeholder with the real URL, or delete that line if there is no public URL yet. Do not publish the brackets. The AI line must stay last.

**Tags (15)**
giao thoa sóng, vật lí 11, vật lý 11, kết nối tri thức, bài 12 giao thoa sóng, cực đại giao thoa, cực tiểu giao thoa, nguồn kết hợp, thí nghiệm Young, khoảng vân, giao thoa ánh sáng, sóng cơ, ôn tập vật lí 11, học lý hoá 11, toán lý hoá 11 trực quan

## 7. Asset checklist (under `youtube-video-studio/public/`)

- [ ] `audio/ly11-giao-thoa-song-voice.mp3` (voiceover from the §3 TTS text, ≈ 103 s of speech, must fit within 113 s)
- [ ] `audio/ly11-giao-thoa-song-music.mp3` (Suno, ≈ 2:00, instrumental)
- [ ] `images/ly11-giao-thoa-song-s01.png`
- [ ] `images/ly11-giao-thoa-song-s02.png`
- [ ] `images/ly11-giao-thoa-song-s03.png`
- [ ] `images/ly11-giao-thoa-song-s04.png`
- [ ] `images/ly11-giao-thoa-song-s05.png`
- [ ] `images/ly11-giao-thoa-song-s06.png`
- [ ] `images/ly11-giao-thoa-song-s07.png`
- [ ] `images/ly11-giao-thoa-song-s08.png`
- [ ] `images/ly11-giao-thoa-song-s09.png`
- [ ] `images/ly11-giao-thoa-song-s10.png`
- [ ] `images/ly11-giao-thoa-song-s11.png`
- [ ] `images/ly11-giao-thoa-song-s12.png`
- [ ] `images/ly11-giao-thoa-song-s13.png`
- [ ] `images/ly11-giao-thoa-song-s14.png`
- [ ] `images/ly11-giao-thoa-song-s15.png`
- [ ] `images/ly11-giao-thoa-song-s16.png`
- [ ] `images/ly11-giao-thoa-song-s17.png`
- [ ] `images/ly11-giao-thoa-song-s18.png`
- [ ] `images/ly11-giao-thoa-song-s19.png`
- [ ] `images/ly11-giao-thoa-song-thumb.png` (1280×720)

When assets exist:
- Set each scene to `"type": "image"`, `"src": "images/ly11-giao-thoa-song-sNN.png"`.
- Add `"voiceover"`, `"music"` and `"thumbnailImage"` to the episode JSON.
- Re-time each scene's `durationInSeconds` to the TTS sentence timestamps. Keep the total near 113 s so the chapters in §6 stay valid, or update the chapters if it changes.

Delivery note from the brief: the final render is also meant for the study website. The brief names `hoc-ly-hoa-11/public/videos/giao-thoa.mp4`, but the project CLAUDE.md embeds videos through `youtubeId` in `hoc-ly-hoa-11/src/data/*.ts`. The delivery step must settle which method is used. It is outside this step's scope.

## 8. Facts to verify

1. **Minima wording.** The reviewer confirmed it: "dao động yếu hoặc đứng yên" matches the sheet note (vatLi.ts line 39). s7 now says "làm yếu nhau" for consistency. Strictly, a minimum is perfectly still only when the two arriving amplitudes are equal. Resolved.
2. **Lesson number "Bài 12".** The reviewer confirmed it via several KNTT-indexed sources but did not check the printed table of contents. The risk is low. It appears in the subtitle, title option 1, the description and the tags.
3. **Scene 11 reasoning** (moving x along S1S2 changes d2 − d1 by 2x) holds only for points between the two sources on the segment. s10 sets that scope ("Trên S1S2"), and it matches the vatLi.ts quiz explanation.
4. **k notation for minima.** We use (k + ½)λ with k integer, as the sheet does. The caption now says "k nguyên". Some books write (2k + 1)λ/2. They are equivalent and not mentioned, to avoid confusion.
5. **TTS pronunciation, check by ear:**
   - "em" for M could be heard as the pronoun "em" ("Em dao động cực đại…"). If it is ambiguous, change it to "điểm em" in s5, s7 and s9. That adds 1 syllable each: s5 → 98%, s7 → 100%, s9 → 94%. s7 would then need "làm yếu nhau" → "yếu đi", or 1 s more.
   - "I-âng": some Vietnamese sources write "Y-âng". The sound is the same.
   - "web", plus the single letters "a" and "i" at the start of a phrase.
6. **Website URL.** I found no public URL for the study website in the repo. The description has a bracketed placeholder that **must** be filled or removed before upload.
7. **Channel name.** ✅ Confirmed by the human: intro card uses "Toán Lý Hoá 11 Trực Quan" (the YouTube channel); "Học Lý Hoá 11" stays as the website's name in s19 and the description. Website link filled in (GitHub Pages). Point M stays "em" — to be checked by ear during the voiceover.
8. All numbers were checked by hand:
   - λ = 40/20 = 2 cm
   - 14 − 10 = 4 cm = 2λ → k = 2
   - λ/2 = 1 cm
   - i = 0,5·10⁻⁶ × 2 / 10⁻³ = 10⁻³ m = 1 mm

   They match vatLi.ts quiz items 4 and 6. The reviewer recomputed them and got the same results.
