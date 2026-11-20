# Assets: ly11-giao-thoa-song — MISSING

Checked on 2026-11-20 against §7 "Asset checklist" of `briefs/ly11-giao-thoa-song-production.md`.
`public/audio/`, `public/images/` and `public/clips/` are all empty. The only file under `public/` is `.gitkeep`.
22 of 22 files are missing.

| file | status | details |
|---|---|---|
| `public/audio/ly11-giao-thoa-song-voice.mp3` | MISSING | voiceover (MP3), from the §3 TTS text, about 105 s of speech, must fit within 113 s |
| `public/audio/ly11-giao-thoa-song-music.mp3` | MISSING | Suno music (MP3), instrumental, about 2:00 |
| `public/images/ly11-giao-thoa-song-s01.png` | MISSING | scene 1 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s02.png` | MISSING | scene 2 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s03.png` | MISSING | scene 3 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s04.png` | MISSING | scene 4 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s05.png` | MISSING | scene 5 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s06.png` | MISSING | scene 6 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s07.png` | MISSING | scene 7 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s08.png` | MISSING | scene 8 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s09.png` | MISSING | scene 9 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s10.png` | MISSING | scene 10 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s11.png` | MISSING | scene 11 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s12.png` | MISSING | scene 12 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s13.png` | MISSING | scene 13 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s14.png` | MISSING | scene 14 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s15.png` | MISSING | scene 15 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s16.png` | MISSING | scene 16 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s17.png` | MISSING | scene 17 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s18.png` | MISSING | scene 18 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-s19.png` | MISSING | scene 19 image (PNG, 16:9) |
| `public/images/ly11-giao-thoa-song-thumb.png` | MISSING | thumbnail (PNG, 1280×720) |

No video clips are planned for this episode, so nothing is expected in `public/clips/`.

## Voiceover vs script: not measured (no voiceover file) vs 113 s (adjust once recorded)

- Script: the 19 scenes add up to **113 s**. The planned speech is about **105 s** (366 syllables at 3.5 syllables per second).
- Voiceover: there is no file to measure yet. When the file exists, the next run will measure it with `npx remotion ffprobe` and flag it if it differs from 113 s by more than 10%, meaning shorter than 101.7 s or longer than 124.3 s.

---

## To do for the human

There are 4 groups of work below. Each box is one file to make.
**Every file goes into the `youtube-video-studio/public/` folder, inside the sub-folder shown (`audio` or `images`).**
The file name must match **exactly**: all lowercase, hyphens, no spaces, and the right ending (`.mp3` or `.png`).

### 1. Voiceover (1 file)

- [ ] **Make the voiceover** with a Vietnamese text-to-speech (TTS) tool.
  - Voice: a ready-made Vietnamese voice from the tool, for example a northern-accent female voice. It should sound calm and warm, at a normal speed, with a short pause between lines. **Do not clone or imitate a real person's voice.**
  - Copy everything in the grey box below and paste it **exactly as it is**. The spellings ("em", "ét", "lam-đa", "I-âng", numbers written as words) are deliberate, so do not "fix" them.

    ```
    Hai nguồn sóng trên mặt nước: vì sao có chỗ dao động mạnh, có chỗ gần như đứng yên?
    Đó là giao thoa sóng: hai sóng kết hợp gặp nhau, tạo ra vùng dao động mạnh xen kẽ vùng dao động yếu hoặc đứng yên.
    Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian.
    Hai nguồn cùng pha ét một, ét hai; em cách chúng đê một và đê hai.
    Em dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau.
    Đường trung trực của ét một ét hai chính là cực đại ca bằng không.
    Em dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, làm yếu nhau.
    Cho ép bằng hai mươi héc, vê bằng bốn mươi xăng-ti-mét trên giây: lam-đa bằng vê chia ép, bằng hai xăng-ti-mét.
    Em cách hai nguồn mười và mười bốn xăng-ti-mét: hiệu bốn xăng-ti-mét, tức hai lam-đa, cực đại bậc hai.
    Trên ét một ét hai, hai cực đại liên tiếp cách nhau lam-đa chia hai.
    Dịch điểm một đoạn ích, hiệu đường đi đổi hai ích; muốn đổi một lam-đa thì ích bằng lam-đa chia hai.
    Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét.
    Ánh sáng cũng giao thoa: thí nghiệm I-âng với hai khe hẹp cho vân sáng, vân tối xen kẽ.
    Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a.
    Với a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn.
    Cho a bằng một mi-li-mét, đê bằng hai mét, lam-đa bằng không phẩy năm micrô-mét.
    Thay vào: i bằng một mi-li-mét.
    Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a.
    Hãy làm bài luyện tập trên web Học Lý Hoá mười một nhé!
    ```

  - Download it as MP3 and save it as **`public/audio/ly11-giao-thoa-song-voice.mp3`**.
  - The whole recording should be **under about 1 minute 53 seconds (113 s)**. About 1 minute 45 seconds of talking is expected.
- [ ] **Listen to the voiceover** and check these 3 things:
  1. **"em" (point M)**: in lines 4, 5, 7 and 9, "em" is the name of a point (M), not the word "em" meaning a younger person. Does it sound clear? If it sounds confusing, change "Em" to "Điểm em" at the start of lines 5, 7 and 9 and make the voiceover again. (The editor may then need to give those scenes a little more time.)
  2. **"I-âng"** (Young, line 13): it should sound like the scientist's name "Y-âng". Some books write "Y-âng", and it is the same sound.
  3. **Recap line (line 18, the one starting "Nguồn cùng pha:")**: "ca cộng một phần hai lam-đa" must be heard as **(k + ½) times lambda**, not "k plus half a lambda". If it sounds unclear, replace that line with this one and make the voiceover again:

     ```
     Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai, nhân lam-đa, khoảng vân lam-đa đê chia a.
     ```

  Also listen for "web", the single letters "a" and "i", and "micrô-mét", which should all sound natural.

### 2. Background music (1 file)

- [ ] **Make the music in Suno.** Copy everything in the grey box below and paste it as the song description:

    ```
    Instrumental lo-fi study beat, calm and gentle, 70 BPM, soft Rhodes piano, warm muted bass, light vinyl crackle, brushed drums very low in the mix, no vocals, no drops, steady and unobtrusive, loopable, about 2 minutes.
    ```

  - Make sure it is **instrumental, with no singing**, and about **2 minutes** long.
  - Download it as MP3 and save it as **`public/audio/ly11-giao-thoa-song-music.mp3`**.
  - **Important:** the video goes on YouTube, which is commercial use. You need a **paid Suno plan (Pro or Premier)** when you make the song. Songs made on the free plan may not be used commercially.

### 3. Scene images (19 files)

Use any AI image tool. For each box, copy the **whole** prompt in the grey box, make a **wide (16:9)** image, download it as **PNG**, and save it under the exact name shown. If the picture comes out with words, letters or numbers in it, make it again, because the captions are added later by the video.

- [ ] **Scene 1** → save as **`public/images/ly11-giao-thoa-song-s01.png`**

    ```
    Top view of a ripple tank with two small vibrating point sources close together, concentric circular ripples overlapping into a striking interference pattern of bright bands and calm dark bands, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 2** → save as **`public/images/ly11-giao-thoa-song-s02.png`**

    ```
    Top view of a ripple tank, two sets of circular waves meeting, hyperbola-shaped bands alternating between strong amber-highlighted bands and flat calm blue bands, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 3** → save as **`public/images/ly11-giao-thoa-song-s03.png`**

    ```
    Two identical vibrating rods tapping a water surface in sync, side-by-side matching sine waveforms above them with identical spacing, showing same direction and same frequency, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 4** → save as **`public/images/ly11-giao-thoa-song-s04.png`**

    ```
    Top view of a ripple tank with two glowing source dots on a horizontal line and one marked point above them, two straight dashed lines from the point to each source (one blue, one amber), faint ripples in the background, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 5** → save as **`public/images/ly11-giao-thoa-song-s05.png`**

    ```
    Two identical sine waves arriving at the same point crest-on-crest and adding into one tall amber wave, inset of a ripple tank with a bright interference band highlighted, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 6** → save as **`public/images/ly11-giao-thoa-song-s06.png`**

    ```
    Top view of a ripple tank, two sources on a horizontal line, the straight central vertical band between them glowing amber as the highlighted central maximum, curved bands fanning out on both sides, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 7** → save as **`public/images/ly11-giao-thoa-song-s07.png`**

    ```
    Two sine waves arriving at the same point crest-on-trough and cancelling into a nearly flat line, inset of a ripple tank with a calm dark band highlighted in blue, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 8** → save as **`public/images/ly11-giao-thoa-song-s08.png`**

    ```
    A single sine wave along a ruler-like scale with one wavelength bracketed by an amber arrow between two neighbouring crests, a small tuning-fork style vibrator at the left, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 9** → save as **`public/images/ly11-giao-thoa-song-s09.png`**

    ```
    Top view of a ripple tank, two sources and a point sitting exactly on the second bright band to the side of the central band, two dashed lines of clearly different lengths from the point to the sources, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 10** → save as **`public/images/ly11-giao-thoa-song-s10.png`**

    ```
    Close-up of the straight segment between two wave sources, evenly spaced amber dots on the segment marking points of strongest vibration, a bracket between two neighbouring dots, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 11** → save as **`public/images/ly11-giao-thoa-song-s11.png`**

    ```
    The segment between two sources with a small point sliding a short distance to the right, one distance arrow growing (amber) while the other shrinks (blue) by the same amount, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 12** → save as **`public/images/ly11-giao-thoa-song-s12.png`**

    ```
    The segment between two sources drawn over a ruler scale, amber maxima dots spaced at equal small steps, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 13** → save as **`public/images/ly11-giao-thoa-song-s13.png`**

    ```
    Side view of a classic double-slit interference setup: a monochromatic light source emitting one single-colour amber beam, a barrier with two narrow slits, the same single-colour light spreading to a screen showing alternating bright amber and dark vertical fringes, one colour only, no rainbow colours, no people, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 14** → save as **`public/images/ly11-giao-thoa-song-s14.png`**

    ```
    Close-up of a screen with evenly spaced bright amber fringes on dark background, an arrow bracket spanning exactly from one bright fringe to the next, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 15** → save as **`public/images/ly11-giao-thoa-song-s15.png`**

    ```
    Side view of the double-slit setup with a small blue bracket between the two slits and a long amber bracket from the slit barrier to the screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 16** → save as **`public/images/ly11-giao-thoa-song-s16.png`**

    ```
    Double-slit setup seen from above at a slight angle, green-cyan monochromatic light beam, fringes on a distant screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 17** → save as **`public/images/ly11-giao-thoa-song-s17.png`**

    ```
    Close-up of the fringe pattern with one fringe spacing highlighted by a bright amber bracket and a small check-mark style glow, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 18** → save as **`public/images/ly11-giao-thoa-song-s18.png`**

    ```
    Split composition: left half a ripple tank interference pattern, right half a double-slit fringe screen, both glowing, a thin amber divider, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

- [ ] **Scene 19** → save as **`public/images/ly11-giao-thoa-song-s19.png`**

    ```
    A friendly flat laptop showing an abstract quiz layout (blank cards and checkboxes, no readable text) with small ripple and light-fringe icons floating around it, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9
    ```

### 4. Thumbnail (1 file)

- [ ] **Make the thumbnail picture.** Copy everything in the grey box below into the AI image tool:

    ```
    Top view of a ripple tank with two glowing wave sources and a bold, high-contrast interference pattern of amber bright bands and deep blue calm bands, large empty space on the left third for a title, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9, 1280x720
    ```

  - The picture is made **without words**. Then add this title in the empty space on the left, in big bold letters (Canva or any photo editor works):

    ```
    GIAO THOA SÓNG – 2 PHÚT
    ```

  - Make the final size **1280 × 720** pixels and save it as PNG: **`public/images/ly11-giao-thoa-song-thumb.png`**.

---

## How to continue

1. Check that all 22 files are saved in `youtube-video-studio/public/`:
   - 2 files in the `audio` folder (`...-voice.mp3`, `...-music.mp3`);
   - 20 files in the `images` folder (`...-s01.png` to `...-s19.png`, plus `...-thumb.png`).
2. Then run this command again:

   ```
   /produce-lesson youtube-video-studio/briefs/ly11-giao-thoa-song.md
   ```

   The asset check will run again. It will measure the voiceover length, and once everything is there, the pipeline will move on to building the video.
