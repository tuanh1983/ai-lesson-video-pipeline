# YouTube Video Studio

Remotion project that renders YouTube videos from `episodes/*.json`.
Schema: `src/schema.ts` (source of truth). Assets live in `public/`; JSON paths are relative to it.

When asked to create an episode from a script:
1. Split the script into scenes of 3–8 seconds each; one sentence per caption.
2. Create `episodes/epNNN.json` following `episodes/sample.json`; use `"type": "color"` for scenes without assets yet.
3. Validate with `npm run typecheck` and render a test still:
   `npx remotion still Episode out/check.png --frame=100 --props=episodes/epNNN.json`
Node is v18, so keep TypeScript on v5.

Uploading to YouTube: use the Zapier skill `upload-youtube-lyhoa` (get_zapier_skill) — it targets the
"Toán Lý Hoá 11 Trực Quan" channel, Unlisted by default. Then put the returned video ID into
`../hoc-ly-hoa-11/src/data/*.ts` (`youtubeId`) to embed it on the study website.
