# Review: ly11-giao-thoa-song - FAIL

## Required fixes (blocking)

1. **[Scene 12, narration and caption]** “Các cực đại cách nhau 1 cm” states the result for all maxima. It applies to consecutive maxima along the segment between the sources. In the production sheet and episode JSON, use `Trên S1S2: hai cực đại liên tiếp cách nhau 1 cm`. In both copies of the TTS text, use `Lam-đa hai xăng-ti-mét thì hai cực đại liên tiếp cách một xăng-ti-mét.` The revised line is 17 syllables in 5 seconds and follows scene 11’s explanation on the segment.
2. **[Sections 4 and 6, YouTube upload]** The plan specifies Suno music and gives a description disclosure, but omits YouTube Studio’s disclosure setting. Add the instruction to select **Yes** under **Attributes → AI use** when uploading with the generated track. Keep `Video được tạo bằng công cụ AI.` as the last line of the description. [YouTube’s GenAI disclosure guidance](https://support.google.com/youtube/answer/14328491?co=GENIE.Platform%3DDesktop&hl=en-11)

## Suggestions (optional)

- **[Scene 6]** Replace “the brightest band” in the image prompt with “the highlighted central maximum.” The \(k=0\) condition establishes constructive interference, and relative brightness depends on the arriving amplitudes.
- **[Scenes 14–17]** Identify \(\lambda\) as the light’s wavelength and show the unit conversion in scene 17 so learners can reproduce the Young calculation.
- **[Sections 6 and 8]** Remove the stale placeholder instructions. The current description already includes the practice URL. If the TTS changes scene boundaries, recompute the chapter starts.

## Checked

- **Accuracy: issues.** The interference definition, coherent-source conditions, and \(d_1=MS_1,\ d_2=MS_2\) agree with the website. For in-phase sources, a phase difference of \(2k\pi\) gives \(d_2-d_1=k\lambda\), and \((2k+1)\pi\) gives \(d_2-d_1=(k+\tfrac12)\lambda\), with integer \(k\). The perpendicular bisector has \(d_2-d_1=0\), so \(k=0\). A minimum can be stationary when the arriving amplitudes are equal.
- **Worked examples:** \(40\,\mathrm{cm/s}\div20\,\mathrm{Hz}=2\,\mathrm{cm}\). The path difference is \(14-10=4\,\mathrm{cm}=2\lambda\), so \(k=2\). A displacement of magnitude \(x\) along the segment changes the path difference by magnitude \(2x\), so consecutive maxima are separated by \(\lambda/2=1\,\mathrm{cm}\). In Young’s experiment, \(i=\lambda D/a=(0.5\times10^{-6}\,\mathrm m)(2\,\mathrm m)/(10^{-3}\,\mathrm m)=10^{-3}\,\mathrm m=1\,\mathrm{mm}\). [Website formula sheet and quiz](/C:/Project/AI/Automation_Temp_Structure/hoc-ly-hoa-11/src/data/vatLi.ts:17)
- **Curriculum and pedagogy: ok.** Covers the brief’s Kết nối tri thức Grade 11 topics with appropriate Vietnamese terminology. The hook starts at 0:02, each scene has a distinct teaching beat, and the examples lead into a recap and practice CTA.
- **Timing: 120 s vs target 120 s.** The intro, 19 scenes, and outro total \(2+113+5=120\) s. The 362 planned syllables take 103.4 s at 3.5 syllables/s. Scene 7 has the highest load at \(27/8=3.375\) syllables/s. This is a script estimate. The captions meet the 12-word limit when counted as Vietnamese words, with multi-syllable terms grouped and standalone formula operators excluded. The six chapters run 22, 25, 15, 17, 25, and 16 seconds. [YouTube chapter rules](https://support.google.com/youtube/answer/9884579?hl=en)
- **Policy: issues.** The description ends with the required AI line. The prompts specify generic diagrams and stock TTS and contain no real people, imitated voices, copyrighted characters, or other channels’ branding. The Grade 11 audience supports **Made for kids: No**. The upload instructions need the AI-use setting above. [YouTube audience guidance](https://support.google.com/youtube/answer/9528076?hl=en)
- **Completeness: ok.** All eight sections are present, the planned asset filenames follow the episode convention, and all 19 JSON captions and durations match the production table. The schema permits the draft color scenes and optional asset paths. The intro channel name and outro CTA match the current brief.

## Disagreements with first reviewer

The first review passed the script and treated scene 12’s missing “liên tiếp” as optional. I consider it a scientific scope error in the stated result. The policy check also needs to account for YouTube Studio’s AI-use disclosure for the planned Suno track. The first review’s placeholder and branding notes are superseded by the current description and brief.

VERDICT: FAIL