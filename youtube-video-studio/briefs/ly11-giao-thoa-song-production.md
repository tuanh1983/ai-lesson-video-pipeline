# Production sheet — ly11-giao-thoa-song

- Brief: `briefs/ly11-giao-thoa-song.md` · **Round 5** (round 2 applied `briefs/ly11-giao-thoa-song-review.md`, which then passed; round 3 applied the Codex gate `briefs/ly11-giao-thoa-song-codex-review.md`; round 4, an extra round approved by the human, applied the round-3 Claude review `briefs/ly11-giao-thoa-song-review.md`, verdict FAIL; round 5, approved by the human, applies the round-4 Codex gate `briefs/ly11-giao-thoa-song-codex-review.md`, verdict FAIL; **round 5b** applies a human decision on the Young formula, see "Human decisions")
- Source of truth for formulas: `hoc-ly-hoa-11/src/data/vatLi.ts` → chapter `giao-thoa-song` (Bài 12. Giao thoa sóng, KNTT). All formulas and worked numbers below come from that formula sheet and quiz.
- Format: Long video 16:9 · Channel (YouTube, intro card): **Toán Lý Hoá 11 Trực Quan** (coordinator default, see "Changes from review" item 5) · Tone: calm, friendly, educational
- Timing: intro title card **2 s** + 19 scenes **113 s** + outro **5 s** = **120 s** (target 120 s ±10%, exactly on target).
  - The intro is kept at 2 s (not the default 3 s) so the spoken hook starts at 0:02, inside the first 3 seconds. The voiceover starts at the end of the intro (`Episode.tsx`).
- Narration rate: ≈ 3.5 syllables/s. Syllables are counted on the **TTS text** (numbers read as words, "Young" = I-âng = 2 syllables, lam-đa = 2, xăng-ti-mét = 3, mi-li-mét = 3, micrô-mét = 3).
- Total narration: **366 syllables ≈ 105 s** of speech in 113 s of scenes → about 0.4 s of pause per scene on average. No scene is above 98% of its slot (s9 and s18 are the highest).
- Caption length rule (from round 5): **≤ 12 space-delimited words**, counting words and numbers and excluding standalone operators (=, →, ·, −, +, ≈, ≪).
- **Editor note:** the table durations are planning values. After generating the voiceover, align each scene's `durationInSeconds` to the real TTS timestamps (start of each sentence), not to the table.

---

## Human decisions

These are final. Reviewers should not reopen them.

1. **Young formula as in the textbook:** `i = λD/a`, with no scope qualifier (no "gần vân trung tâm", no "a ≪ D") and "=" rather than "≈". This matches the KNTT textbook and the website formula sheet (vatLi.ts line 75). Decided after the Codex round-4 review.
2. **Intro card channel name:** "Toán Lý Hoá 11 Trực Quan". The website's name, "Học Lý Hoá 11", is used in s19 and the description.
3. **Point M is read as "em".** It will be checked by ear during the voiceover (see §8 item 5).
4. **Website link:** the GitHub Pages URL goes in the description.
5. **Script gate closed by human override (after round 5b).** Claude: PASS. Codex: FAIL on three new, non-numerical points, all accepted as is by the human:
   - s13 does not restate "sóng kết hợp" for Young's slits (coherent sources are taught in s3).
   - s18: "ca cộng một phần hai lam-đa" could be heard as k + λ/2, and the "Nguồn cùng pha" prefix also sits in front of i = λD/a. **Check by ear in the voiceover.** If it sounds ambiguous, re-record s18 as "cực tiểu ca cộng một phần hai, nhân lam-đa".
   - No separate numerical example for a minimum.

---

## Changes from review

### Round 5b (human decision)

Source: the human decision on the Young formula (see "Human decisions" item 1). It reverses the round-5 Young-scope fix and keeps every other round-5 change. Nothing else was changed.

1. **s14** (sheet + JSON):
   - Caption: `Gần vân trung tâm (a ≪ D): i ≈ λD/a` → `Khoảng vân: i = λD/a (λ: bước sóng ánh sáng đơn sắc)`. That is 11 words: Khoảng · vân: · i · λD/a · (λ: · bước · sóng · ánh · sáng · đơn · sắc).
   - Narration: back to the round-4 text, which includes the spoken definition: "Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a."
   - Recount: khoảng 1 + vân 1 + i 1 + khoảng 1 + cách 1 + hai 1 + vân 1 + sáng 1 + liên 1 + tiếp 1 + bằng 1 + lam-đa 2 + đê 1 + chia 1 + a 1 = **16 syllables**.
   - The s13 caption also says "(ánh sáng đơn sắc)", so the two captions overlap. Both are kept as instructed.
2. **Round 5's 1-second move is undone.** The restored s14 line fits in 5 s (16 ÷ 17.5 = **91%**), so:
   - s14 goes back to 6 → **5 s**.
   - s3 goes back to 5 → **6 s** (17 ÷ 21 = **81%**).
   - The scene total stays at 113 s and the video at 120 s.
3. **s18** (sheet + JSON):
   - Caption: back to the round-4 version, `Nguồn cùng pha: cực đại kλ · cực tiểu (k + ½)λ · i = λD/a`. A recount gives **12 words**: Nguồn · cùng · pha: · cực · đại · kλ · cực · tiểu · (k · ½)λ · i · λD/a. Round 4 said 11, which was a miscount. It is still ≤ 12.
   - Narration: back to the round-4 line, "Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a." That is **24 syllables, 98%** (same as before).
4. **Chapters (§6):** back to the round-4 timestamps: 00:21 → **00:22**, 00:46 → **00:47**, 01:01 → **01:02**, 01:18 → **01:19**. 01:44 is unchanged. The chapter lengths are 22 · 25 · 15 · 17 · 25 · 16 s, all ≥ 10 s. The §1 time table is updated for s3 to s14.
5. **§6 description:**
   - Young bullet: back to `Thí nghiệm Young: khoảng vân i = λD/a`, with no qualifier.
   - The s17 metre-conversion line from round 5 is kept. Its "i ≈" became "i =" so that it matches decision 1.
6. **Kept from round 5:**
   - the s3 caption (Codex wording);
   - the s9 caption "(nguồn cùng pha)" and the narration "hiệu bốn xăng-ti-mét";
   - the s13 caption "(ánh sáng đơn sắc)" and its monochromatic image prompt.
7. **Totals:** 370 → **366 syllables ≈ 104.6 s** of speech (s14 −4). The header, the §2 sums, §3 and §7 are updated. The highest loads are still s9 and s18, both at 98%.
8. **Caption recheck** (space-delimited, standalone operators excluded):
   - s1 12 · s2 11 · s3 11 · s4 10 · s5 12 · s6 10 · s7 11 · s8 10 · s9 11 · s10 9
   - s11 11 · s12 10 · s13 12 · s14 11 · s15 11 · s16 9 · s17 4 · s18 12 · s19 9
   - All 19 are ≤ 12. No caption uses "≈" or "≪" any more.
9. **§8 item 9:** the three points this decision resolves are removed:
   - the s14 definition not being spoken;
   - the "=" in the s17 caption not matching the "≈" in s14 and s18;
   - the website formula not having the scope.
   
   The render check stays, minus the "≪"/"≈" glyph check.

### Round 5 (Codex)

*Superseded in part by round 5b. The Young-scope changes to s14, s18 and §6, and the s3/s14 timing move, were reverted. The rest still applies.*

Source: `briefs/ly11-giao-thoa-song-codex-review.md` (FAIL, after round 4). Round approved by the human. Nothing else was changed. §8 item 7 (decisions the human confirmed) is untouched. The scene total stays at **113 s**, and the video stays at **120 s**.

**Required fixes**
1. **Young formula scope (s13–s18, §6).**
   - **s13:** the caption is now `Thí nghiệm Young (ánh sáng đơn sắc): vân sáng, tối xen kẽ` (12 words). The image prompt now asks for a monochromatic light source with a single-colour amber beam, and for fringes of that same colour with no rainbow colours. The narration is unchanged (20 syllables, 95%).
   - **s14:** the caption is Codex's exact wording, `Gần vân trung tâm (a ≪ D): i ≈ λD/a` (8 words). Monochromatic light is now stated on s13, so "(λ: bước sóng ánh sáng đơn sắc)" was removed here.
     - TTS text (§2 + §3): "Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a." → "Gần vân trung tâm, khi a rất nhỏ so với đê: khoảng vân i bằng lam-đa đê chia a."
     - Recount: gần 1 + vân 1 + trung 1 + tâm 1 + khi 1 + a 1 + rất 1 + nhỏ 1 + so 1 + với 1 + đê 1 + khoảng 1 + vân 1 + i 1 + bằng 1 + lam-đa 2 + đê 1 + chia 1 + a 1 = **20 syllables**.
     - **Timing:** the new line does not fit in 5 s (it needs 5.7 s), so **1 s moved from s3 to s14**. s3 had the lowest load of any scene that could shrink (81%). s17 is lower (76%), but it is already at the 3 s minimum. Results: s3 6 → 5 s (17 syllables, **97%**), s14 5 → 6 s (20 syllables, **95%**). The scene total is unchanged at 113 s.
     - **Trade-off:** the spoken definition "khoảng cách hai vân sáng liên tiếp" no longer fits. The s14 image (a bracket from one bright fringe to the next) shows it on screen, and the term "khoảng vân" is still spoken. See the open questions.
   - **s18 recap** (same 7 s):
     - Caption: `Nguồn cùng pha: cực đại kλ · cực tiểu (k + ½)λ · i = λD/a` → `Nguồn cùng pha: cực đại/tiểu kλ, (k + ½)λ · i ≈ λD/a (a ≪ D)` (**12 words**). The full form with "(a ≪ D)" would be 14 words, so "cực đại · cực tiểu" was merged into "cực đại/tiểu", which keeps both textbook terms. The narration reads the two conditions in order, which resolves the pairing. If the reviewer sees "đại/tiểu" as one word too many, the fallback is the round-4 caption with `i ≈ λD/a` (12 words, without "(a ≪ D)").
     - TTS text: "…cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a." → "Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng nửa lam-đa; gần trung tâm, i lam-đa đê chia a."
     - Recount: nguồn 1 + cùng 1 + pha 1 + cực 1 + đại 1 + ca 1 + lam-đa 2 + cực 1 + tiểu 1 + ca 1 + cộng 1 + nửa 1 + lam-đa 2 + gần 1 + trung 1 + tâm 1 + i 1 + lam-đa 2 + đê 1 + chia 1 + a 1 = **24 syllables**, **98%** (unchanged).
     - To make room for the qualifier, "một phần hai" became "nửa" and "khoảng vân" became "i" (s14 already says "khoảng vân i"). The spoken qualifier is "gần trung tâm". The caption carries "a ≪ D". The full "a rất nhỏ so với đê" (+6 syllables) does not fit in 7 s.
   - **§6 description:** the Young bullet is now `Thí nghiệm Young: khoảng vân i ≈ λD/a (gần vân trung tâm, a ≪ D)`. "=" became "≈" to match the captions.
2. **s9 phase qualifier.**
   - Caption (§2 + JSON): Codex's exact wording, `Hiệu 4 cm = 2λ → cực đại bậc 2 (nguồn cùng pha)` (11 words).
   - Optional narration applied: "hiệu là bốn" → "hiệu bốn xăng-ti-mét". That makes **24 syllables** in 7 s (**98%**), up from 22.
3. **s3 caption.** Codex's exact wording, `Nguồn kết hợp: cùng phương, cùng tần số, hiệu pha không đổi` (11 words). The narration keeps the full textbook wording, "hiệu số pha không đổi theo thời gian".

**Caption recheck (space-delimited, standalone operators excluded):** s1 12 · s2 11 · s3 11 · s4 10 · s5 12 · s6 10 · s7 11 · s8 10 · s9 11 · s10 9 · s11 11 · s12 10 · s13 12 · s14 8 · s15 11 · s16 9 · s17 4 · s18 12 · s19 9. All 19 are ≤ 12. Only s3, s9, s13, s14 and s18 changed.

**Optional suggestion applied**
- **s17 metre conversions:** added to the §6 description under the Young bullet. The 3 s scene, its caption and its narration are unchanged.

**Knock-on updates (required by the changes above)**
- **Chapters (§6):** because s3 is 1 s shorter, the four chapters between s3 and s14 move 1 s earlier: 00:22 → **00:21**, 00:47 → **00:46**, 01:02 → **01:01**, 01:19 → **01:18**. 01:44 is unchanged, because s14 grew by the same 1 s. The new chapter lengths are 21 · 25 · 15 · 17 · 26 · 16 s, all ≥ 10 s.
- **§1 time table:** updated for s3 to s14.
- **Totals:** 364 → **370 syllables ≈ 105.7 s** of speech (s9 +2, s14 +4). The header, the §2 sums, §3 and §7 are updated.
- **§8 item 5:** the "điểm em" fallback percentage for s9 is updated (s9 is now 24 syllables, so +1 → 102%).

### Round 4 (Claude review, round 3 verdict FAIL; extra round approved by the human)

Source: `briefs/ly11-giao-thoa-song-review.md` (FAIL, round 3). Nothing else was changed. No durations, timestamps, chapters, image prompts, metadata or §8 item 7 (human-confirmed decisions) were touched.

**Required fix**
1. **s18 recap now states its condition (blocking).** For sources in opposite phase the max/min conditions swap (vatLi.ts line 66), so the line students memorize must say "nguồn cùng pha".
   - TTS text (§2 table + §3 block): "Nhớ nhé: cực đại ca lam-đa, …" → "Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a."
   - Recount: nguồn 1 + cùng 1 + pha 1 + cực 1 + đại 1 + ca 1 + lam-đa 2 + cực 1 + tiểu 1 + ca 1 + cộng 1 + một 1 + phần 1 + hai 1 + lam-đa 2 + khoảng 1 + vân 1 + lam-đa 2 + đê 1 + chia 1 + a 1 = **24 syllables** in 7 s → 24 ÷ 24.5 = **98%**. The duration is unchanged (7 s).
   - Caption (§2 table + JSON): `Cực đại kλ · Cực tiểu (k + ½)λ · i = λD/a` → `Nguồn cùng pha: cực đại kλ · cực tiểu (k + ½)λ · i = λD/a` (11 words, operators not counted).
   - Totals: 363 → **364 syllables ≈ 104.0 s** of speech. s18 (98%) is now the highest load. The header and the §2 sum are updated; §3 and §7 already said ≈ 104 s.

**Optional suggestions applied (caption only, zero time, every caption ≤ 12 words even counting numbers)**
- **s5:** `Cực đại (nguồn cùng pha): d2 − d1 = kλ (k = 0, ±1, ±2…)` (12).
- **s6:** `Trung trực S1S2 (nguồn cùng pha): cực đại k = 0` (10). "của" was dropped to make room.
- **s7:** `Cực tiểu (nguồn cùng pha): d2 − d1 = (k + ½)λ (k nguyên)` (11).
- **s11:** `Trên S1S2: dịch x → hiệu đổi 2x; 2x = λ → x = λ/2` (11).
- **s14 (monochromatic light):** `Khoảng vân: i = λD/a (λ: bước sóng ánh sáng đơn sắc)` (11). I put it on s14 rather than s13, because `Thí nghiệm Young (ánh sáng đơn sắc): vân sáng, vân tối xen kẽ` would be 13 words.

**Optional suggestions skipped**
- **s9 unit ("hiệu là bốn xăng-ti-mét"):** skipped. Adding "xăng-ti-mét" takes s9 from 22 to 25 syllables in 7 s (102%), which is over the 100% limit. The caption already shows `4 cm`. (A 24-syllable variant, "hiệu bốn xăng-ti-mét" with "là" dropped, would fit at 98%. I did not apply it because it rewords more than the unit.)
- **Description `Thí nghiệm Young (a ≪ D)`:** not applied. It was outside the round-4 instructions, and the reviewer marked it non-blocking.

### Round 3 (Codex)

Source: `briefs/ly11-giao-thoa-song-codex-review.md` (FAIL). Nothing else was changed; §8 item 7 (human-confirmed decisions) is untouched.

**Required fixes**
1. **Scene 12 scope (blocking).** The λ/2 spacing holds only for *consecutive* maxima *on the segment S1S2*.
   - Caption (§2 table + JSON): `λ = 2 cm → các cực đại cách nhau 1 cm` → `Trên S1S2: hai cực đại liên tiếp cách nhau 1 cm`.
   - TTS text (§2 table + §3 block): "Với lam-đa bằng hai như trên, các cực đại cách nhau một xăng-ti-mét." → "Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét."
   - Recount: lam-đa 2 + hai 1 + xăng-ti-mét 3 + thì 1 + hai 1 + cực 1 + đại 1 + liên 1 + tiếp 1 + cách 1 + một 1 + xăng-ti-mét 3 = **17 syllables** in 5 s → 17 ÷ 17.5 = **97%** (≤ 100%). The duration is unchanged (5 s), so all timestamps and chapters are unchanged.
   - Totals: 362 → **363 syllables ≈ 103.7 s** of speech. s12 (97%) is now the highest load, ahead of s7 (96%). The header, the table sums, §3 and §7 are updated to match.
2. **AI-content disclosure (blocking).** §6 now tells the publisher to set YouTube Studio's altered or synthetic content / AI disclosure setting to **Yes** at upload, because the video uses AI-generated images, a TTS voice and Suno music. I did not give an exact menu path, because the Studio labels may change. `Video được tạo bằng công cụ AI.` is still the last line of the description.

**Optional suggestions applied**
- **s6 image prompt:** "glowing amber as the brightest band" → "glowing amber as the highlighted central maximum". k = 0 means constructive interference, but how bright it looks depends on the amplitudes that arrive.
- **Stale placeholder text removed.** The §6 note telling the publisher to replace the bracketed URL is gone, because the practice URL is already filled in. §8 item 6 is now marked resolved. The note about recomputing chapters if TTS timing changes stays in §7.
- **s14 caption: λ is now named as the light's wavelength.** `Khoảng vân: i = λD/a` → `Khoảng vân: i = λD/a (λ: bước sóng ánh sáng)`. This is a caption-only change (sheet + JSON), so the s14 narration and its load (16 syllables, 91%) stay the same. The caption is still within 12 words.

**Optional suggestions skipped**
- **λ named in the narration (s14–s16):** skipped. s14 (91%), s15 (91%) and s16 (95%) have no room for "bước sóng ánh sáng" (+5 syllables) without going over 100%. The caption change above covers it on screen.
- **s17 unit conversion:** skipped. s17 is a 3 s slot (10.5 syllables at most). Any spoken conversion, even the shortest ("Đổi ra mét rồi thay vào: i bằng một mi-li-mét", 12 syllables), would load it to 114%. A caption such as `i = 0,5·10⁻⁶ · 2 / 10⁻³ m = 1 mm` would be too dense to read in 3 s. The full conversion is in §8 item 8 for anyone who wants it in the description or a pinned comment.

### Round 2

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
- **§6 website link:** added a link line above the AI line. The AI line is still last. **No URL exists in the repo**, so the line held a placeholder. *(Superseded: the human has since filled in the GitHub Pages URL; see §8 items 6–7.)*
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
| 9 | 0:55–1:02 | Worked example: M is a maximum, k = 2 (in-phase sources) |
| 10 | 1:02–1:07 | On S1S2: neighbouring maxima λ/2 apart |
| 11 | 1:07–1:14 | Why λ/2 (path difference changes by 2x → x = λ/2) |
| 12 | 1:14–1:19 | Worked example: λ = 2 cm → 1 cm |
| 13 | 1:19–1:25 | Light interferes too: Young's experiment with monochromatic light |
| 14 | 1:25–1:30 | Fringe spacing i = λD/a (distance between two consecutive bright fringes) |
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
| 3 | 6 | Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian. | 17 | 81% | Nguồn kết hợp: cùng phương, cùng tần số, hiệu pha không đổi | Two identical vibrating rods tapping a water surface in sync, side-by-side matching sine waveforms above them with identical spacing, showing same direction and same frequency, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 4 | 5 | Hai nguồn cùng pha ét một, ét hai; em cách chúng đê một và đê hai. | 16 | 91% | Hai nguồn cùng pha S1, S2 · MS1 = d1, MS2 = d2 | Top view of a ripple tank with two glowing source dots on a horizontal line and one marked point above them, two straight dashed lines from the point to each source (one blue, one amber), faint ripples in the background, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 5 | 7 | Em dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau. | 23 | 94% | Cực đại (nguồn cùng pha): d2 − d1 = kλ (k = 0, ±1, ±2…) | Two identical sine waves arriving at the same point crest-on-crest and adding into one tall amber wave, inset of a ripple tank with a bright interference band highlighted, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 6 | 5 | Đường trung trực của ét một ét hai chính là cực đại ca bằng không. | 15 | 86% | Trung trực S1S2 (nguồn cùng pha): cực đại k = 0 | Top view of a ripple tank, two sources on a horizontal line, the straight central vertical band between them glowing amber as the highlighted central maximum, curved bands fanning out on both sides, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 7 | 8 | Em dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, làm yếu nhau. | 27 | 96% | Cực tiểu (nguồn cùng pha): d2 − d1 = (k + ½)λ (k nguyên) | Two sine waves arriving at the same point crest-on-trough and cancelling into a nearly flat line, inset of a ripple tank with a calm dark band highlighted in blue, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 8 | 8 | Cho ép bằng hai mươi héc, vê bằng bốn mươi xăng-ti-mét trên giây: lam-đa bằng vê chia ép, bằng hai xăng-ti-mét. | 26 | 93% | f = 20 Hz, v = 40 cm/s → λ = v/f = 2 cm | A single sine wave along a ruler-like scale with one wavelength bracketed by an amber arrow between two neighbouring crests, a small tuning-fork style vibrator at the left, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 9 | 7 | Em cách hai nguồn mười và mười bốn xăng-ti-mét: hiệu bốn xăng-ti-mét, tức hai lam-đa, cực đại bậc hai. | 24 | 98% | Hiệu 4 cm = 2λ → cực đại bậc 2 (nguồn cùng pha) | Top view of a ripple tank, two sources and a point sitting exactly on the second bright band to the side of the central band, two dashed lines of clearly different lengths from the point to the sources, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 10 | 5 | Trên ét một ét hai, hai cực đại liên tiếp cách nhau lam-đa chia hai. | 16 | 91% | Trên S1S2: hai cực đại liên tiếp cách nhau λ/2 | Close-up of the straight segment between two wave sources, evenly spaced amber dots on the segment marking points of strongest vibration, a bracket between two neighbouring dots, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 11 | 7 | Dịch điểm một đoạn ích, hiệu đường đi đổi hai ích; muốn đổi một lam-đa thì ích bằng lam-đa chia hai. | 23 | 94% | Trên S1S2: dịch x → hiệu đổi 2x; 2x = λ → x = λ/2 | The segment between two sources with a small point sliding a short distance to the right, one distance arrow growing (amber) while the other shrinks (blue) by the same amount, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 12 | 5 | Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét. | 17 | 97% | Trên S1S2: hai cực đại liên tiếp cách nhau 1 cm | The segment between two sources drawn over a ruler scale, amber maxima dots spaced at equal small steps, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 13 | 6 | Ánh sáng cũng giao thoa: thí nghiệm I-âng với hai khe hẹp cho vân sáng, vân tối xen kẽ. | 20 | 95% | Thí nghiệm Young (ánh sáng đơn sắc): vân sáng, tối xen kẽ | Side view of a classic double-slit interference setup: a monochromatic light source emitting one single-colour amber beam, a barrier with two narrow slits, the same single-colour light spreading to a screen showing alternating bright amber and dark vertical fringes, one colour only, no rainbow colours, no people, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 14 | 5 | Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a. | 16 | 91% | Khoảng vân: i = λD/a (λ: bước sóng ánh sáng đơn sắc) | Close-up of a screen with evenly spaced bright amber fringes on dark background, an arrow bracket spanning exactly from one bright fringe to the next, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 15 | 5 | Với a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn. | 16 | 91% | a: khoảng cách hai khe · D: từ hai khe đến màn | Side view of the double-slit setup with a small blue bracket between the two slits and a long amber bracket from the slit barrier to the screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 16 | 6 | Cho a bằng một mi-li-mét, đê bằng hai mét, lam-đa bằng không phẩy năm micrô-mét. | 20 | 95% | a = 1 mm, D = 2 m, λ = 0,5 μm | Double-slit setup seen from above at a slight angle, green-cyan monochromatic light beam, fringes on a distant screen, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 17 | 3 | Thay vào: i bằng một mi-li-mét. | 8 | 76% | i = λD/a = 1 mm | Close-up of the fringe pattern with one fringe spacing highlighted by a bright amber bracket and a small check-mark style glow, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 18 | 7 | Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a. | 24 | 98% | Nguồn cùng pha: cực đại kλ · cực tiểu (k + ½)λ · i = λD/a | Split composition: left half a ripple tank interference pattern, right half a double-slit fringe screen, both glowing, a thin amber divider, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |
| 19 | 4 | Hãy làm bài luyện tập trên web Học Lý Hoá mười một nhé! | 13 | 93% | Luyện tập ngay trên web Học Lý Hoá 11! | A friendly flat laptop showing an abstract quiz layout (blank cards and checkboxes, no readable text) with small ripple and light-fringe icons floating around it, clean flat educational diagram, vector style, dark navy background #0B1020, royal blue #3B6FE0 and amber #F2A516 accents, soft glow, minimal, no text, no letters, no numbers, no watermark, 16:9 |

Scene durations sum: 6+8+6+5+7+5+8+8+7+5+7+5+6+5+5+6+3+7+4 = **113 s**.
Syllables sum: 19+26+17+16+23+15+27+26+24+16+23+17+20+16+16+20+8+24+13 = **366** (≈ 104.6 s at 3.5/s).

## 3. Voiceover (TTS input — paste as is)

Voice: a stock Vietnamese TTS voice (e.g. a northern-accent female voice), calm and warm, ~3.5 syllables/s, a short pause between lines. No cloned or imitated real voices. Expected read length is ≈ 105 s of speech, plus pauses, inside the 113 s scene window. Align the JSON scene durations to the generated timestamps instead of rushing the read.

Symbols are already spelled out for TTS: ép (f), vê (v), ích (x), em (M), ét (S), đê (d, D), ca (k), lam-đa (λ), I-âng (Young), and numbers in words. On-screen captions keep the normal symbols.

> Hai nguồn sóng trên mặt nước: vì sao có chỗ dao động mạnh, có chỗ gần như đứng yên?
> Đó là giao thoa sóng: hai sóng kết hợp gặp nhau, tạo ra vùng dao động mạnh xen kẽ vùng dao động yếu hoặc đứng yên.
> Hai nguồn kết hợp: cùng phương, cùng tần số, hiệu số pha không đổi theo thời gian.
> Hai nguồn cùng pha ét một, ét hai; em cách chúng đê một và đê hai.
> Em dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng tới cùng pha, tăng cường nhau.
> Đường trung trực của ét một ét hai chính là cực đại ca bằng không.
> Em dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: hai sóng ngược pha, làm yếu nhau.
> Cho ép bằng hai mươi héc, vê bằng bốn mươi xăng-ti-mét trên giây: lam-đa bằng vê chia ép, bằng hai xăng-ti-mét.
> Em cách hai nguồn mười và mười bốn xăng-ti-mét: hiệu bốn xăng-ti-mét, tức hai lam-đa, cực đại bậc hai.
> Trên ét một ét hai, hai cực đại liên tiếp cách nhau lam-đa chia hai.
> Dịch điểm một đoạn ích, hiệu đường đi đổi hai ích; muốn đổi một lam-đa thì ích bằng lam-đa chia hai.
> Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét.
> Ánh sáng cũng giao thoa: thí nghiệm I-âng với hai khe hẹp cho vân sáng, vân tối xen kẽ.
> Khoảng vân i, khoảng cách hai vân sáng liên tiếp, bằng lam-đa đê chia a.
> Với a là khoảng cách hai khe, đê là khoảng cách từ hai khe đến màn.
> Cho a bằng một mi-li-mét, đê bằng hai mét, lam-đa bằng không phẩy năm micrô-mét.
> Thay vào: i bằng một mi-li-mét.
> Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a.
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

**AI-content disclosure: Yes (required at upload).** In YouTube Studio, set the altered or synthetic content / AI disclosure setting to **Yes** when uploading. The video uses AI-generated images, an AI TTS voice and Suno AI music. If the upload tool cannot set it, set it by hand in YouTube Studio before the video goes public. The description line "Video được tạo bằng công cụ AI." does not replace this setting. Keep both.

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
>   Ví dụ: a = 1 mm = 10⁻³ m, D = 2 m, λ = 0,5 μm = 0,5·10⁻⁶ m → i = (0,5·10⁻⁶ · 2) / 10⁻³ = 10⁻³ m = 1 mm
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
Publisher: the AI line must stay the last line of the description. Also set the AI disclosure in YouTube Studio to Yes (see above).

**Tags (15)**
giao thoa sóng, vật lí 11, vật lý 11, kết nối tri thức, bài 12 giao thoa sóng, cực đại giao thoa, cực tiểu giao thoa, nguồn kết hợp, thí nghiệm Young, khoảng vân, giao thoa ánh sáng, sóng cơ, ôn tập vật lí 11, học lý hoá 11, toán lý hoá 11 trực quan

## 7. Asset checklist (under `youtube-video-studio/public/`)

- [ ] `audio/ly11-giao-thoa-song-voice.mp3` (voiceover from the §3 TTS text, ≈ 105 s of speech, must fit within 113 s)
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
   - "em" for M could be heard as the pronoun "em" ("Em dao động cực đại…"). If it is ambiguous, change it to "điểm em" in s5, s7 and s9. That adds 1 syllable each: s5 → 98%, s7 → 100%, s9 → 102% (round 5: s9 is now 24 syllables). s7 would then need "làm yếu nhau" → "yếu đi", or 1 s more. s9 would need "tức hai lam-đa" → "hai lam-đa", or 1 s more.
   - "I-âng": some Vietnamese sources write "Y-âng". The sound is the same.
   - "web", plus the single letters "a" and "i" at the start of a phrase.
6. **Website URL.** Resolved. The description links the GitHub Pages practice page (see §6 and item 7).
7. **Channel name.** ✅ Confirmed by the human: intro card uses "Toán Lý Hoá 11 Trực Quan" (the YouTube channel); "Học Lý Hoá 11" stays as the website's name in s19 and the description. Website link filled in (GitHub Pages). Point M stays "em" — to be checked by ear during the voiceover.
8. All numbers were checked by hand:
   - λ = 40/20 = 2 cm
   - 14 − 10 = 4 cm = 2λ → k = 2
   - λ/2 = 1 cm
   - i = 0,5·10⁻⁶ × 2 / 10⁻³ = 10⁻³ m = 1 mm

   They match vatLi.ts quiz items 4 and 6. The reviewer recomputed them and got the same results.
9. **Open points after round 5b:**
   - **Render check:** confirm that the 12-word captions wrap cleanly at 16:9, especially s13 and s18.
