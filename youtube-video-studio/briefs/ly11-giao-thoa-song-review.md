Round 1: FAIL — fixed (all 3 required items verified applied in round 2).

# Review: ly11-giao-thoa-song — PASS

## Round-1 fixes: verification
1. **s4 timing (was blocking): applied.** §2, §3 and the JSON all agree. The narration is "Hai nguồn cùng pha ét một, ét hai; em cách chúng đê một và đê hai." at 16 syllables in 5 s (91%). The caption and the 0:22–0:27 slot are unchanged.
2. **Chapters ≥ 10 s: applied.** The 00:08 line is gone and the first chapter is `00:00 Mở đầu – Giao thoa sóng là gì?`. I recomputed the chapter starts from the JSON durations (intro 2 s + scenes): s4 = 0:22, s8 = 0:47, s10 = 1:02, s13 = 1:19, s18 = 1:44. Chapter lengths are 22 / 25 / 15 / 17 / 25 / 16 s. All are ≥ 10 s, the first starts at 00:00, and there are 6 chapters (at least 3).
3. **Syllable counts: applied.** I counted all 19 scenes again by hand from the §3 TTS text. Every count matches the table (19, 26, 17, 16, 23, 15, 27, 26, 22, 16, 23, 16, 20, 16, 16, 20, 8, 23, 13), for a total of 362. Every Load % is correct. The highest is s7 at 27/28 = 96%. No scene is over 100%.

## Required fixes (blocking)
None.

## Non-blocking items for the publish step
- [§6 description] `Web luyện tập: [ĐIỀN LINK WEB HỌC LÝ HOÁ 11 TRƯỚC KHI ĐĂNG]` is a placeholder. Before upload, put in the real URL or delete the line. The brackets must never be published, and "Video được tạo bằng công cụ AI." must stay the last line.
- [Branding] The intro card `channelName` "Toán Lý Hoá 11 Trực Quan" (JSON, §1, §6) is a coordinator default. A human still needs to confirm it. The brief says "Học Lý Hoá 11".
- [Re-timing] If the editor changes scene durations to match the TTS timestamps, the total must stay at 113 s of scenes. Otherwise the §6 chapter times must be recomputed, and every chapter must still be ≥ 10 s. The tightest chapter is 01:02→01:19 at 15 s.

## Suggestions (optional)
- [s4, s5, s7, s9 — "em" for M] This is likely to confuse students. "Em dao động cực đại…" / "Em cách hai nguồn…" will be heard as the pronoun "em" ("you"). The fix costs no time, so apply it now rather than waiting for the ear check:
  - s4: `…; điểm em cách chúng đê một và đê hai.` (17 syllables, 97%)
  - s5: `Điểm em dao động cực đại khi đê hai trừ đê một bằng ca lam-đa: hai sóng cùng pha, tăng cường nhau.` (drops "tới", 23 syllables, 94%)
  - s7: `Điểm em dao động cực tiểu khi đê hai trừ đê một bằng ca cộng một phần hai, nhân lam-đa: sóng ngược pha, làm yếu nhau.` (drops "hai", 27 syllables, 96%)
  - s9: `Điểm em cách hai nguồn…` (23 syllables, 94%)
- [s12] "các cực đại cách nhau 1 cm" should say *liên tiếp* to match s10 and the sheet. The caption can change at no time cost: `λ = 2 cm → hai cực đại liên tiếp cách nhau 1 cm`. The narration "lam-đa bằng hai" has no unit. A version that fits is `Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét.` (17 syllables, 97%). It is tight, so use it only if the TTS read leaves room.
- [s9] "hiệu là bốn" has no unit (the caption shows 4 cm). Optional: "hiệu bốn xăng-ti-mét" gives 23 syllables (94%) if "là" is also dropped.
- [Captions] The s3 caption is 13 space-separated syllables, or 9 words if counted as Vietnamese lexical words. It is also the 63-character line already marked for the Mode B wrap check. s1 and s2 sit exactly at 12. These are acceptable. Check them in the render.
- [§3 TTS] No digits or raw symbols are left in the TTS text. Besides "em", the ear check should listen for the single letters "a" and "i" (s14, s15, s16, s17) and for "đê" being used for both d and D.

## Checked
- accuracy: ok. I recomputed every number:
  - λ = v/f = 40/20 = 2 cm
  - d2 − d1 = 14 − 10 = 4 cm = 2λ → cực đại bậc 2 (k = 2)
  - λ/2 = 2/2 = 1 cm
  - s11: shifting by x changes d2 − d1 by 2x; 2x = λ gives x = λ/2
  - i = λD/a = 0,5·10⁻⁶ × 2 / 10⁻³ = 10⁻³ m = 1 mm

  The definitions match `hoc-ly-hoa-11/src/data/vatLi.ts` chapter `giao-thoa-song` (lines 23–93): nguồn kết hợp, the phenomenon note "yếu hoặc đứng yên", kλ with k = 0, ±1, ±2…, (k + ½)λ with k nguyên, the trung trực as k = 0, λ/2 on S1S2, and i = λD/a with the meanings of a and D. The s7 wording "làm yếu nhau" is now consistent with s1 and s2. The visual prompts fit the physics: s9 shows the 2nd band beside the central band, and s16 uses green-cyan light for 0,5 μm.
- curriculum: ok. The content is KNTT Vật lí 11, Chương II, Bài 12, with SGK terms (hiệu đường đi, khoảng vân, vân sáng/vân tối, nguồn kết hợp). Nothing from outside the program is presented as required.
- timing: intro 2 s + scenes 113 s + outro 5 s = 120 s vs target 120 s (0%). This matches Remotion's 120.00 s. I checked the JSON's 19 durations and captions one by one against §2: they are identical. The §1 timestamps add up correctly. Narration is 362 syllables ≈ 103.4 s at 3.5 syllables/s, every scene is ≤ 96% of its slot, and every caption is ≤ 12 words.
- pedagogy: ok. The hook runs 0:02–0:08. Each scene carries one idea. There are 3 worked examples (λ, cực đại bậc 2 with λ/2 → 1 cm, and i = 1 mm), a recap in s18 and a CTA in s19 plus the outro.
- policy: ok. The description ends with the AI-disclosure line. The prompts contain no real people, cloned voices, copyrighted characters or other channels' branding (the s13 prompt says "no people"). The Suno prompt names no artist. "Made for kids: No" is stated.
- completeness: ok. All 8 sections are present. Asset names follow `ly11-giao-thoa-song-sNN.png`, `-voice.mp3`, `-music.mp3`, `-thumb.png`. The JSON is valid against `src/schema.ts`: fields and types are correct, `introSeconds` 2 and `outroSeconds` 5 are ≥ 0, and the volumes are in [0, 1].

VERDICT: PASS
