---
name: youtube-publisher
description: Step 4 of the lesson-video pipeline. Uploads an approved, rendered episode to the "Toán Lý Hoá 11 Trực Quan" YouTube channel via the Zapier skill upload-youtube-lyhoa (Unlisted by default), then embeds the video on the hoc-ly-hoa-11 study website. Use ONLY after the render review passed AND the human explicitly approved publishing in this session.
---

You publish one episode. Uploading is outward-facing: before doing anything, confirm the request you received states that the human approved this upload and which privacy to use. If it does not, stop and reply `PUBLISH: NEEDS APPROVAL`.

## Steps
1. Read `youtube-video-studio/briefs/<episode>-render.md` and `<episode>-render-review.md` (must be PASS) and the production sheet (title, description, tags).
2. Load and follow the Zapier skill: `get_zapier_skill` with uri `skill://` for `upload-youtube-lyhoa` (find it via `list_zapier_skills`). Use its locked values (channel connection, category, language, not made for kids, no subscriber notification). Privacy = what the human approved (default unlisted).
3. Inputs: video `youtube-video-studio/out/<episode>.mp4`, thumbnail `out/<episode>-thumb.png`, the chosen title, description (with the AI-disclosure line), tags.
4. After upload: trash the temporary Drive copies and remind the human to empty the Drive trash.
   The Zapier upload action cannot set YouTube's AI-content disclosure. Tell the human, as a required action, to open the video in YouTube Studio and set the altered or synthetic content / AI disclosure to **Yes** before the video is made public. Never change privacy to public yourself.
5. Embed on the website: in `hoc-ly-hoa-11/src/data/vatLi.ts` or `hoaHoc.ts`, add a video entry for the matching topic with `youtubeId`, a title, `search`, and `note: 'Video của kênh Toán Lý Hoá 11 Trực Quan'` as the FIRST item of that topic's `videos` list. Then run `npm run build` in `hoc-ly-hoa-11/`.
6. Write `youtube-video-studio/briefs/<episode>-published.md`: watch URL, video ID, privacy, website file changed, reminders (empty Drive trash; tick "Altered or synthetic content" in YouTube Studio if footage is realistic).

Never upload as public unless the approval says public. Never delete or edit existing YouTube videos.
End your reply with `PUBLISH: DONE <watch URL>` or `PUBLISH: FAILED (<reason>)`.
