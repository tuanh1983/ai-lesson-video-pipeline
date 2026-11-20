Round 1: FAIL — fixed · Round 2: PASS (Codex FAIL — fixed)

# Review: ly11-giao-thoa-song — FAIL (round 3)

## Codex fixes: verification
1. **s12 scope: applied in all four copies.**
   - §2 caption and JSON line 28 both read `Trên S1S2: hai cực đại liên tiếp cách nhau 1 cm`.
   - §2 narration and the §3 TTS block both read "Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét."
   - I recounted it at 17 syllables in 5 s, which is 97%. The 1:14–1:19 slot is unchanged.
2. **AI disclosure: applied.** §6 tells the publisher to set YouTube Studio's altered/synthetic / AI disclosure to **Yes**, giving AI images, TTS voice and Suno music as the reason. The publisher note at line 201 repeats this. "Video được tạo bằng công cụ AI." is still the last line of the description.

## Required fixes (blocking)
1. **[s18 recap, narration and caption] A result is stated without its condition (the new scope rule).**
   - The problem: "cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa" / `Cực đại kλ · Cực tiểu (k + ½)λ` is the line students will memorize, and it drops "hai nguồn cùng pha". That condition was last said in s4, about 80 s earlier.
   - Why it is an error: for sources in opposite phase the two conditions swap. The website sheet says so itself (vatLi.ts line 66: "Nếu hai nguồn ngược pha, vai trò cực đại và cực tiểu đổi cho nhau"), and the brief attaches "(hai nguồn cùng pha)" to this key point.
   - **Exact fix:**
     - Narration (§2 and §3): `Nguồn cùng pha: cực đại ca lam-đa, cực tiểu ca cộng một phần hai lam-đa, khoảng vân lam-đa đê chia a.` This replaces "Nhớ nhé" with "Nguồn cùng pha". It is 24 syllables in 7 s (98%), so durations and chapters stay the same.
     - Caption (§2 and JSON line 34): `Nguồn cùng pha: cực đại kλ · cực tiểu (k + ½)λ · i = λD/a`. That is 11 words, with operators not counted.
     - Update the syllable total: 363 → 364.

## Suggestions (optional)
- **[s5, s6, s7 captions]** These are scoped by s4 (both its narration and its caption say "Hai nguồn cùng pha"), so they are acceptable. Still, each caption read alone states an in-phase-only result. Adding the condition on screen costs no time:
  - `Hai nguồn cùng pha – cực đại: d2 − d1 = kλ (k = 0, ±1, ±2…)`
  - `Trung trực S1S2 (nguồn cùng pha): cực đại k = 0`
  - `Hai nguồn cùng pha – cực tiểu: d2 − d1 = (k + ½)λ (k nguyên)`
- **[s11 caption]** "Hiệu đổi 2x" is true only for points between the sources on S1S2. The context covers this: s10 says "Trên S1S2" 5 s earlier, and the visual shows the segment. A zero-cost caption fix is `Trên S1S2: dịch x → hiệu đổi 2x; 2x = λ → x = λ/2`.
- **[s13/s14] Monochromatic light.** i = λD/a needs a single wavelength, and the website sheet treats white light as a separate case. Caption-only options:
  - s13: `Thí nghiệm Young (ánh sáng đơn sắc): vân sáng, vân tối xen kẽ`
  - or s14: `(λ: bước sóng ánh sáng đơn sắc)`
  - The narration has no room for this (s13 is at 95%).
- **[i = λD/a, a ≪ D]** This is not blocking: the website sheet and SGK give the formula without the condition, and the worked numbers (a = 1 mm, D = 2 m) meet it anyway. It could be added to the description line `Thí nghiệm Young (a ≪ D): khoảng vân i = λD/a`.
- **[s9]** "hiệu là bốn" has no unit (carried over from round 2). The caption shows 4 cm.

## Checked
- **accuracy: one scope issue (s18), everything else ok.**
  - Recomputed: λ = 40/20 = 2 cm. 14 − 10 = 4 cm = 2λ → k = 2. λ/2 = 1 cm. s11: 2x = λ → x = λ/2. i = 0,5·10⁻⁶ × 2 / 10⁻³ = 10⁻³ m = 1 mm.
  - These agree with vatLi.ts lines 23–93: kλ (k = 0, ±1, ±2…), (k + ½)λ, trung trực k = 0, λ/2 between consecutive maxima on the segment, and i = λD/a with a, D and λ defined.
  - Scope, scene by scene:
    - s2/s3 match the sheet notes word for word.
    - s4 sets the in-phase setup.
    - s10 and s12 are now scoped "Trên S1S2 … liên tiếp".
    - s14 says "hai vân sáng liên tiếp".
    - The description has "Hai nguồn cùng pha:" and "Trên đoạn S₁S₂: … liên tiếp".
    - Only s18 restates in-phase results with no condition.
- **curriculum: ok.** KNTT Vật lí 11, Bài 12, SGK terminology.
- **timing: 120 s vs target 120 s.**
  - Intro 2 s + scenes 113 s + outro 5 s. This matches the 120.00 s render.
  - The JSON's 19 durations and captions are identical to §2 (s12 and s14 updated in both).
  - Syllables: 363, re-summed. The highest load is s12 at 97%. After fix 1, s18 is at 98%. All captions are ≤ 12 words.
  - Chapters run 22/25/15/17/25/16 s (all ≥ 10 s).
- **pedagogy: ok.** Hook at 0:02, one idea per scene, 3 worked examples, recap, CTA.
- **policy: ok.**
  - The description ends with the AI line.
  - The Studio AI disclosure instruction is set to Yes.
  - Made for kids: No.
  - No real people, cloned voices, copyrighted characters or other channels' branding in the prompts.
  - The Suno prompt names no artist.
- **completeness: ok.**
  - All 8 sections are present.
  - Asset names follow `ly11-giao-thoa-song-sNN.png` / `-voice.mp3` / `-music.mp3` / `-thumb.png`.
  - The JSON is valid against `src/schema.ts`.
  - Channel name, "em" and the URL are human-confirmed.

VERDICT: FAIL
