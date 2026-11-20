Rounds 1–4 history: see production sheet · Round 5b review

# Review: ly11-giao-thoa-song — PASS

## Codex round-4 points that were not overridden: verification
1. **s9 is fixed.** The caption in both §2 and JSON line 25 reads `Hiệu 4 cm = 2λ → cực đại bậc 2 (nguồn cùng pha)` (11 words). The narration in §2 and §3 says "hiệu bốn xăng-ti-mét". That makes 24 syllables in 7 s, a 98% load.
2. **s3 is fixed.** The caption reads `Nguồn kết hợp: cùng phương, cùng tần số, hiệu pha không đổi`. By the space-delimited rule this is **12** words, not the 11 that the sheet and Codex give, but it is still within the limit. The narration keeps the full SGK wording.
3. **s13 is fixed.** The caption contains "(ánh sáng đơn sắc)" (12 words). The image prompt asks for a single amber colour and no rainbow colours.

## Human decision 1 (i = λD/a, no qualifier): consistency check
- It is applied everywhere it should be: the s14 caption and narration, the s17 caption, the s18 caption and narration, the §6 Young bullet, the §6 conversion line ("i = … = 1 mm") and §8 item 8. All of them use "=" with no qualifier.
- "≈", "≪" and "gần vân trung tâm" now appear only in the change-history text. The sheet and the JSON agree.

## Required fixes (blocking)
None.

## Suggestions (optional)
- **[Human decision 1]** Strictly, i = λD/a is a small-angle result (a ≪ D, near the central fringe). Following the KNTT textbook is fine and not dangerous, and the worked example satisfies the condition (D/a = 2000). One line in the description or a pinned comment would cover it.
- **[§Changes item 8, caption recheck]** Four counts in the recheck line are 1 too low: s2 is **12** (not 11), s3 is **12** (not 11), s10 is **10** (not 9) and s12 is **11** (not 10). All are still ≤ 12. Correct the line so a later round does not trust it.
- **[Header line 3]** The bold says "Round 5", but the content is round 5b. This is cosmetic.
- **[Render]** Check the wrap of the four 12-word captions in Mode B: s1, s2, s3 and s5, plus s13 and s18.

## Checked
- **accuracy: ok.**
  - Recomputed:
    - λ = 40/20 = 2 cm.
    - 14 − 10 = 4 cm = 2λ, so k = 2 for in-phase sources.
    - On S1S2, a shift of x changes the path difference by 2x, so 2x = λ gives x = λ/2 = 1 cm.
    - i = 0,5·10⁻⁶ × 2 / 10⁻³ = 10⁻³ m = 1 mm.
  - All results match vatLi.ts lines 29–86 and the quiz.
  - Scope at each chapter start:
    - 00:22 (s4): "Hai nguồn cùng pha" appears in both the caption and the narration.
    - 00:47 (s8–s9): λ = v/f needs no condition, and s9 has "(nguồn cùng pha)".
    - 01:02 (s10): "Trên S1S2 … liên tiếp".
    - 01:19 (s13): Young with monochromatic light. The formula is covered by the human decision.
    - 01:44 (s18): "Nguồn cùng pha".
  - s5, s6 and s7 carry "nguồn cùng pha" in their captions. s11 and s12 carry "Trên S1S2".
- **curriculum: ok.** The script covers KNTT Vật lí 11, Bài 12 and uses SGK terminology.
- **timing: 120 s vs target 120 s.**
  - Scene durations: 6+8+6+5+7+5+8+8+7+5+7+5+6+5+5+6+3+7+4 = 113 s. With the 2 s intro and 5 s outro that is 120 s, which matches the coordinator's 120.00 s render.
  - Every scene was recounted. Syllables total 366 (≈ 104.6 s of speech). The maximum load is 98% (s9 and s18), and no scene is over 100%.
  - The §1 timestamps match the durations. Chapters start at 00:00, 00:22, 00:47, 01:02, 01:19 and 01:44, giving lengths of 22, 25, 15, 17, 25 and 16 s (all ≥ 10 s).
  - Every caption was recounted with the space-delimited rule: s1 12, s2 12, s3 12, s4 10, s5 12, s6 10, s7 11, s8 10, s9 11, s10 10, s11 11, s12 11, s13 12, s14 11, s15 11, s16 9, s17 4, s18 12, s19 9. All 19 are ≤ 12.
- **pedagogy: ok.** The hook starts at 0:02, each scene covers one idea, there are 3 worked examples, and a recap and CTA close the video.
- **policy: ok.**
  - The description's last line is "Video được tạo bằng công cụ AI."
  - The YouTube Studio AI / altered-or-synthetic content setting is set to Yes, covering the AI images, TTS voice and Suno music.
  - Made for kids: No.
  - The prompts contain no real people, voice clones, copyrighted characters or other channels' branding.
- **completeness: ok.**
  - All 8 sections are present.
  - Asset names follow the convention.
  - All 19 captions and durations in the JSON match §2 character for character.
  - The JSON is valid against `src/schema.ts`.

VERDICT: PASS
