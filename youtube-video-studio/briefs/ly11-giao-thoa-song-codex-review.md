# Review: ly11-giao-thoa-song - FAIL

## Required fixes (blocking)

1. **[s13, chapter opener at 01:19]** Two narrow slits and monochromatic light alone do not guarantee stable interference fringes. State that the waves from the two slits must be coherent. For example, use the caption `Young: hai khe phát sóng kết hợp, vân sáng tối xen kẽ` only after shortening it to 12 tokens, such as `Young: hai khe phát sóng kết hợp, vân sáng tối xen nhau`. Specify in the image prompt that the same monochromatic wavefront illuminates both slits.
2. **[s18, recap at 01:44]** The opening “Nguồn cùng pha” reads as a condition on all three results, including Young’s fringe spacing. The spoken minimum condition can also be heard as \(k+\lambda/2\). Use a separate Young clause and read the minimum as a half-integer multiple of the wavelength. A 12-token caption is `Cùng pha: cực đại kλ · cực tiểu (k + ½)λ · Young: i = λD/a`. A narration that fits the 7 s slot is “Cùng pha: cực đại ca lam-da, cực tiểu bội bán nguyên lam-da. I-âng: i bằng lam-da dê chia a.” Update the scene table, TTS block and JSON together.
3. **[s7–s9, brief coverage]** The brief calls for a numerical example for each formula. The worked water-wave example classifies a maximum and leaves the minimum condition without a numerical application. Add a companion case using the same \(\lambda=2\) cm. For in-phase sources, \(d_1=10\) cm and \(d_2=13\) cm give \(d_2-d_1=3\) cm \(=(1+\tfrac12)\lambda\), a minimum. Recheck the timing and chapter starts after placing it.

## Suggestions (optional)

- Correct the caption count in the production sheet for s2, s3, s10 and s12 to 12, 12, 10 and 11. All current captions meet the 12-token limit.
- In s16, show the monochromatic color on the screen as well as in the incident beam so the illustration depicts the stated \(0.5\,\mu\text{m}\) example consistently.

## Checked

- **Accuracy: issues.** The recorded calculations are correct. For s5–s7, equal paths give \(d_2-d_1=0\), so the perpendicular bisector is the \(k=0\) maximum for in-phase sources. Integer wavelength differences preserve phase, and half-integer differences put the arriving waves in opposition. For s8–s9, \(40\,\mathrm{cm/s}/20\,\mathrm{Hz}=2\,\mathrm{cm}\) and \(14-10=4\,\mathrm{cm}=2\lambda\), giving \(k=2\). For s10–s12, moving \(x\) within the segment increases one distance by \(x\) and decreases the other by \(x\). The path difference changes in magnitude by \(2x\), so adjacent maxima are \(x=\lambda/2=1\,\mathrm{cm}\) apart. For s16–s17, \((0.5\times10^{-6}\,\mathrm m)(2\,\mathrm m)/(10^{-3}\,\mathrm m)=10^{-3}\,\mathrm m=1\,\mathrm{mm}\). These results agree with `vatLi.ts`. The human decision on the textbook form \(i=\lambda D/a\) governs this review.
- **Curriculum and pedagogy: issues as listed above.** The terminology and material fit KNTT Vật lí 11, Bài 12. The hook starts at 0:02, the scenes build from water waves to light, and a recap precedes the practice CTA.
- **Timing: 120 s vs target 120 s.** The 19 scenes total 113 s, plus a 2 s intro and 5 s outro. The 366 planned syllables take about 104.6 s at 3.5 syllables/s. Every scene fits its planned slot. The highest loads are s9 and s18 at \(24/24.5\), about 98%. The six chapters run 22, 25, 15, 17, 25 and 16 s. Actual TTS timing remains a render-stage check.
- **Policy: ok.** The description ends with “Video được tạo bằng công cụ AI.” Section 6 directs the uploader to select **Yes** for YouTube Studio’s AI disclosure and **No** for Made for Kids. The prompts use generic diagrams, instrumental music and stock TTS. [YouTube AI disclosure guidance](https://support.google.com/youtube/answer/14328491?hl=en)
- **Completeness: all eight sections present.** Asset filenames follow the convention. The draft JSON conforms to `schema.ts`, and all 19 captions and scene durations match the production table.

## Disagreements with first reviewer

The first reviewer passed s13 on the strength of its monochromatic-light caption and accepted s18 because it restates the in-phase condition. The s13 chapter opener needs the coherence condition for stable fringes, and s18 needs to make clear which formulas the in-phase condition governs. The brief’s numerical example requirement also leaves the minimum condition uncovered.

VERDICT: FAIL