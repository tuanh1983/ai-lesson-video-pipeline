# Production sheet — ly11-giao-thoa-song

- Brief: `briefs/ly11-giao-thoa-song.md` · Round 1 (no review yet)
- Source of truth for formulas: `hoc-ly-hoa-11/src/data/vatLi.ts` → chapter `giao-thoa-song` (Bài 12. Giao thoa sóng, KNTT). All formulas and worked numbers below come from that formula sheet and quiz.
- Format: Long video 16:9 · Channel: Học Lý Hoá 11 · Tone: calm, friendly, educational
- Timing: intro title card **2 s** + 19 scenes **112 s** + outro **5 s** = **119 s** (target 120 s ±10%).
  - The intro is kept at 2 s (not the default 3 s) so the spoken hook starts at 0:02, inside the first 3 seconds. The voiceover starts at the end of the intro (`Episode.tsx`).
- Narration rate: ≈ 3.5 syllables/s. The syllable count per scene is shown in the table. Symbols are written the way they should be **read** (đê một, lam-đa, ca, S một…), so TTS does not mispronounce them.

---

## 1. Script (scene by scene)

| # | Time | Beat |
|---|------|------|
| — | 0:00–0:02 | Title card: "Giao thoa sóng trong 2 phút" |
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
| 11 | 1:07–1:13 | Why λ/2 (path difference changes by 2x) |
| 12 | 1:13–1:18 | Worked example: λ = 2 cm → 1 cm |
| 13 | 1:18–1:24 | Light interferes too: Young's experiment |
| 14 | 1:24–1:29 | Fringe spacing i = λD/a |
| 15 | 1:29–1:34 | Meaning of a and D |
| 16 | 1:34–1:40 | Worked example data |
| 17 | 1:40–1:43 | Result i = 1 mm |
| 18 | 1:43–1:50 | Recap |
| 19 | 1:50–1:54 | Call to action |
| — | 1:54–1:59 | Outro: "Làm bài luyện tập trên web nhé!" |

## 2. Per-scene table

**Visual style block (repeat it in every prompt):** *clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9*

The images carry **no text**. All formulas and labels appear as the burned-in captions, because AI image tools render text and math badly.

| # | Dur (s) | Narration (Vietnamese) | Syl. | On-screen caption | Visual prompt (English, still image) |
|---|---|---|---|---|---|
| 1 | 6 | Hai nguồn sóng trên mặt nước: vì sao có chỗ dao động rất mạnh, có chỗ lại gần như đứng yên? | 21 | Vì sao có chỗ sóng mạnh, có chỗ gần như đứng yên? | Top view of a ripple tank with two small vibrating point sources close together, concentric circular ripples overlapping into a striking interference pattern of bright bands and calm dark bands, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 2 | 8 | Đó là giao thoa sóng: hai sóng kết hợp gặp nhau, tạo ra vùng dao động mạnh xen kẽ vùng dao động yếu hoặc đứng yên. | 26 | Giao thoa: vùng dao động mạnh xen kẽ vùng dao động yếu | Top view of a ripple tank, two sets of circular waves meeting, hyperbola-shaped bands alternating between strong amber-highlighted bands and flat calm blue bands, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 3 | 6 | Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian. | 17 | Nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi | Two identical vibrating rods tapping a water surface in sync, side-by-side matching sine waveforms above them with identical spacing, showing same direction and same frequency, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 4 | 5 | Xét hai nguồn cùng pha S một, S hai. Điểm M cách hai nguồn lần lượt đê một và đê hai. | 21 | Hai nguồn cùng pha S1, S2 · MS1 = d1, MS2 = d2 | Top view of a ripple tank with two glowing source dots on a horizontal line and one marked point above them, two straight dashed lines from the point to each source (one blue, one amber), faint ripples in the background, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 5 | 7 | M dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau. | 23 | Cực đại: d2 − d1 = kλ (k = 0, ±1, ±2…) | Two identical sine waves arriving at the same point crest-on-crest and adding into one tall amber wave, inset of a ripple tank with a bright interference band highlighted, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 6 | 5 | Đường trung trực của S một S hai chính là cực đại ca bằng không. | 15 | Trung trực của S1S2: cực đại k = 0 | Top view of a ripple tank, two sources on a horizontal line, the straight central vertical band between them glowing amber as the brightest band, curved bands fanning out on both sides, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 7 | 8 | M dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, triệt tiêu nhau. | 25 | Cực tiểu: d2 − d1 = (k + ½)λ | Two sine waves arriving at the same point crest-on-trough and cancelling into a flat line, inset of a ripple tank with a calm dark band highlighted in blue, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 8 | 8 | Ví dụ: f bằng 20 héc, v bằng 40 xăng-ti-mét trên giây, nên lam-đa bằng v chia f, bằng 2 xăng-ti-mét. | 27 | f = 20 Hz, v = 40 cm/s → λ = v/f = 2 cm | A single sine wave along a ruler-like scale with one wavelength bracketed by an amber arrow between two neighbouring crests, a small tuning-fork style vibrator at the left, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 9 | 7 | M cách hai nguồn 10 và 14 xăng-ti-mét: hiệu là 4, tức 2 lam-đa, nên M là cực đại bậc 2. | 23 | Hiệu đường đi 4 cm = 2λ → cực đại bậc 2 | Top view of a ripple tank, two sources and a point sitting exactly on the second bright band to the side of the central band, two dashed lines of clearly different lengths from the point to the sources, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 10 | 5 | Trên đoạn S một S hai, hai cực đại liên tiếp cách nhau lam-đa chia hai. | 17 | Trên S1S2: hai cực đại liên tiếp cách nhau λ/2 | Close-up of the straight segment between two wave sources, evenly spaced amber dots on the segment marking points of strongest vibration, a bracket between two neighbouring dots, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 11 | 6 | Vì dịch một đoạn x thì hiệu đường đi đổi 2 x, mà cần đổi đúng một lam-đa. | 19 | Dịch x → hiệu đường đi đổi 2x; cần đổi λ | The segment between two sources with a small point sliding a short distance to the right, one distance arrow growing (amber) while the other shrinks (blue) by the same amount, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 12 | 5 | Như ví dụ trên, lam-đa bằng 2 thì các cực đại cách nhau 1 xăng-ti-mét. | 17 | λ = 2 cm → các cực đại cách nhau 1 cm | The segment between two sources drawn over a ruler scale, amber maxima dots spaced at equal small steps, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 13 | 6 | Ánh sáng cũng giao thoa: trong thí nghiệm Young, hai khe hẹp tạo vân sáng, vân tối xen kẽ trên màn. | 21 | Thí nghiệm Young: vân sáng, vân tối xen kẽ | Side view of Young's double-slit setup: a light source, a barrier with two narrow slits, light spreading to a screen showing alternating bright and dark vertical fringes, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 14 | 5 | Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a. | 16 | Khoảng vân: i = λD/a | Close-up of a screen with evenly spaced bright amber fringes on dark background, an arrow bracket spanning exactly from one bright fringe to the next, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 15 | 5 | Trong đó a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn. | 17 | a: khoảng cách hai khe · D: từ hai khe đến màn | Side view of the double-slit setup with a small blue bracket between the two slits and a long amber bracket from the slit barrier to the screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 16 | 6 | Ví dụ: a bằng 1 mi-li-mét, đê bằng 2 mét, lam-đa bằng 0,5 micrô-mét. | 21 | a = 1 mm, D = 2 m, λ = 0,5 μm | Double-slit setup seen from above at a slight angle, green-cyan monochromatic light beam, fringes on a distant screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 17 | 3 | Thay vào: i bằng 1 mi-li-mét. | 8 | i = λD/a = 1 mm | Close-up of the fringe pattern with one fringe spacing highlighted by a bright amber bracket and a small check-mark style glow, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 18 | 7 | Nhớ nhé: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a. | 24 | Cực đại kλ · Cực tiểu (k + ½)λ · i = λD/a | Split composition: left half a ripple tank interference pattern, right half a double-slit fringe screen, both glowing, a thin amber divider, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 19 | 4 | Giờ hãy làm bài luyện tập trên web Học Lý Hoá 11 nhé! | 14 | Luyện tập ngay trên web Học Lý Hoá 11! | A friendly flat laptop showing an abstract quiz layout (blank cards and checkboxes, no readable text) with small ripple and light-fringe icons floating around it, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |

Scene durations sum: 6+8+6+5+7+5+8+8+7+5+6+5+6+5+5+6+3+7+4 = **112 s**.

## 3. Voiceover (paste into TTS / read aloud)

Voice: the brief says "you decide" → a stock Vietnamese TTS voice (e.g. a northern-accent female voice), calm and warm, ~3.5 syllables/s, short pauses between scenes. No cloned or imitated real voices. Target length of the read: ≈ 112 s. If it runs long or short, adjust the scene durations in the JSON instead of rushing.

> Hai nguồn sóng trên mặt nước: vì sao có chỗ dao động rất mạnh, có chỗ lại gần như đứng yên?
> Đó là giao thoa sóng: hai sóng kết hợp gặp nhau, tạo ra vùng dao động mạnh xen kẽ vùng dao động yếu hoặc đứng yên.
> Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian.
> Xét hai nguồn cùng pha S một, S hai. Điểm M cách hai nguồn lần lượt đê một và đê hai.
> M dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau.
> Đường trung trực của S một S hai chính là cực đại ca bằng không.
> M dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, triệt tiêu nhau.
> Ví dụ: f bằng 20 héc, v bằng 40 xăng-ti-mét trên giây, nên lam-đa bằng v chia f, bằng 2 xăng-ti-mét.
> M cách hai nguồn 10 và 14 xăng-ti-mét: hiệu là 4, tức 2 lam-đa, nên M là cực đại bậc 2.
> Trên đoạn S một S hai, hai cực đại liên tiếp cách nhau lam-đa chia hai.
> Vì dịch một đoạn x thì hiệu đường đi đổi 2 x, mà cần đổi đúng một lam-đa.
> Như ví dụ trên, lam-đa bằng 2 thì các cực đại cách nhau 1 xăng-ti-mét.
> Ánh sáng cũng giao thoa: trong thí nghiệm Young, hai khe hẹp tạo vân sáng, vân tối xen kẽ trên màn.
> Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a.
> Trong đó a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn.
> Ví dụ: a bằng 1 mi-li-mét, đê bằng 2 mét, lam-đa bằng 0,5 micrô-mét.
> Thay vào: i bằng 1 mi-li-mét.
> Nhớ nhé: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a.
> Giờ hãy làm bài luyện tập trên web Học Lý Hoá 11 nhé!

TTS notes: "f" and "v" may be read as letters ("ép", "vê"). Check after generating. "Young" should be read as "I-âng".

## 4. Music prompt (Suno)

> Instrumental lo-fi study beat, calm and gentle, 70 BPM, soft Rhodes piano, warm muted bass, light vinyl crackle, brushed drums very low in the mix, no vocals, no drops, steady and unobtrusive, loopable, about 2 minutes.

Mix: very quiet. JSON uses `musicVolume` 0.2 and `musicDuckedVolume` 0.06 (under the voice).

## 5. Thumbnail

- Text (Vietnamese): **GIAO THOA SÓNG – 2 PHÚT**
- Image prompt: *Top view of a ripple tank with two glowing wave sources and a bold, high-contrast interference pattern of amber bright bands and deep blue calm bands, large empty space on the left third for a title, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9, 1280x720*

## 6. YouTube metadata

**Title options**
1. Giao thoa sóng trong 2 phút | Vật lí 11 KNTT – Bài 12
2. Cực đại, cực tiểu giao thoa & khoảng vân Young – hiểu nhanh trong 2 phút
3. Vì sao mặt nước có chỗ đứng yên? Giao thoa sóng – Vật lí 11

**Description**
> Ôn nhanh Bài 12. Giao thoa sóng (Vật lí 11 – Kết nối tri thức) trong khoảng 2 phút, có hình minh hoạ trực quan và ví dụ số cho từng công thức:
> • Điều kiện giao thoa: hai nguồn kết hợp (cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian)
> • Hai nguồn cùng pha: cực đại d₂ − d₁ = kλ, cực tiểu d₂ − d₁ = (k + ½)λ
> • Trên đoạn S₁S₂: hai cực đại liên tiếp cách nhau λ/2
> • Thí nghiệm Young: khoảng vân i = λD/a
>
> 00:00 Mở đầu
> 00:08 Giao thoa sóng là gì?
> 00:22 Cực đại và cực tiểu giao thoa
> 00:47 Ví dụ tính bước sóng và bậc cực đại
> 01:02 Khoảng cách giữa hai cực đại trên S₁S₂
> 01:18 Giao thoa ánh sáng – thí nghiệm Young
> 01:43 Tóm tắt
>
> Làm bài luyện tập trên web Học Lý Hoá 11 nhé!
>
> Video được tạo bằng công cụ AI.

**Tags (14)**
giao thoa sóng, vật lí 11, vật lý 11, kết nối tri thức, bài 12 giao thoa sóng, cực đại giao thoa, cực tiểu giao thoa, nguồn kết hợp, thí nghiệm Young, khoảng vân, giao thoa ánh sáng, sóng cơ, ôn tập vật lí 11, học lý hoá 11

## 7. Asset checklist (under `youtube-video-studio/public/`)

- [ ] `audio/ly11-giao-thoa-song-voice.mp3` (voiceover, ≈ 112 s)
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

When assets exist, set each scene to `"type": "image"`, `"src": "images/ly11-giao-thoa-song-sNN.png"`, and add `"voiceover"`, `"music"`, `"thumbnailImage"` to the episode JSON.
Delivery note from the brief: the final render is also meant for the study website at `hoc-ly-hoa-11/public/videos/giao-thoa.mp4`. That copy step is outside this step's scope.

## 8. Facts to verify

1. **"Đứng yên" at minima.** Strictly, a minimum point is completely still only when the two waves arriving there have equal amplitude. The narration therefore says "dao động yếu hoặc đứng yên" / "gần như đứng yên" / "cực tiểu" and avoids claiming every minimum is perfectly still. The website sheet labels it "cực tiểu (đứng yên)". Reviewer: confirm this wording is acceptable for KNTT.
2. **Lesson number.** "Bài 12. Giao thoa sóng" comes from `vatLi.ts`. I did not cross-check it against the printed KNTT table of contents. It appears only in the subtitle, title option 1 and the description.
3. **Scene 11 reasoning** (moving x along S1S2 changes d2 − d1 by 2x) holds only for points *between* the two sources on the segment. The caption and narration say "trên đoạn S1S2", so it is correct as scoped. It matches the quiz explanation in `vatLi.ts`.
4. **k notation for minima.** We use (k + ½)λ with k integer, as the sheet does. Some books write (2k + 1)λ/2. They are equivalent and not mentioned, to avoid confusion.
5. **TTS pronunciation** of symbols (f, v, a, D, λ, "Young") must be checked by ear after generation.
6. All numbers were checked by hand: λ = 40/20 = 2 cm. 14 − 10 = 4 cm = 2λ → k = 2. λ/2 = 1 cm. i = 0,5·10⁻⁶ × 2 / 10⁻³ = 10⁻³ m = 1 mm. They match quiz items 4 and 6 in `vatLi.ts`.
