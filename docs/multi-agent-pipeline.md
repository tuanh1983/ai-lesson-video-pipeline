# Multi-agent lesson-video pipeline

Produces a Grade 11 Physics/Chemistry lesson video from a one-page brief, publishes it to the
**Toán Lý Hoá 11 Trực Quan** YouTube channel and embeds it on the study website (`hoc-ly-hoa-11`).

Run it from this folder in Claude Code:

```
/produce-lesson youtube-video-studio/briefs/ly11-giao-thoa-song.md
```

Run the same command again after any pause — it resumes from the first unfinished step.

## Flow

```
brief.md
   │
   ▼
[1] lesson-scriptwriter ──► production sheet + episode JSON
   │        ▲
   ▼        │ fixes (max 3 rounds)
   content-reviewer (accuracy · curriculum · timing · policy)
   │ PASS
   ▼
[2] asset-checker ──► MISSING? ── human makes voice/images/music from the prompts ── rerun
   │ READY
   ▼
[3] video-editor ──► mp4 + thumbnail + check frames
   │        ▲
   ▼        │ fixes (max 2 rounds)
   content-reviewer (frames: captions, diacritics, blanks, timing)
   │ PASS
   ▼
[4] HUMAN APPROVAL (Unlisted / Private / Public / Not yet)
   │
   ▼
[5] youtube-publisher ──► Zapier skill upload-youtube-lyhoa ──► embed video ID on the website
```

## Agents (`.claude/agents/`)

| Agent | Does | Can't do |
|---|---|---|
| `lesson-scriptwriter` | Script, scene prompts, voiceover text, music/thumbnail prompts, YouTube metadata, draft JSON | Edit anything outside `briefs/` and `episodes/` |
| `content-reviewer` | Independent PASS/FAIL review of scripts (accuracy, curriculum, timing, policy) and rendered frames | Edit the work (writes only its review report) |
| `asset-checker` | Checks files in `public/`, measures audio length, writes the human to-do list | Generate or download media |
| `video-editor` | Fits timing to the voiceover, renders video/thumbnail/check frames | Touch the website or upload |
| `youtube-publisher` | Uploads via Zapier (Unlisted by default), embeds on the website, rebuilds it | Run without explicit human approval; publish as Public unless approved |

Every step writes a report to `youtube-video-studio/briefs/<episode>-<step>.md`, so a coworker can see
exactly where an episode is and why.

## What is automatic today vs. later

| Step | Today | To make it fully automatic |
|---|---|---|
| Script + review | Automatic | — |
| Voiceover | Manual (TTS tool or own voice) | Connect ElevenLabs API (paid plan for commercial use) |
| Images / clips | Manual (Google Flow, Seedance, image tools) | Connect an image/video generation API with commercial terms |
| Music | Manual (Suno, paid plan) | Use a licensed royalty-free library or an API with commercial rights |
| Render + review | Automatic | — |
| Publish | Automatic **after your approval** | Keep the approval gate — uploads are public-facing |

## Setting this up for a coworker

1. They need: Node 18+, Claude Code, and access to this repository.
2. `youtube-video-studio/` is currently listed in `.gitignore`, so it is **not** shared through git.
   To share it, remove that line and instead ignore only `youtube-video-studio/node_modules/` and `youtube-video-studio/out/`.
3. Publishing needs the Zapier connector with the YouTube connection for the channel. The Zapier
   skill `upload-youtube-lyhoa` lives in the Zapier account that created it; share the account or
   recreate the skill in the coworker's Zapier.
4. Brief template: `youtube-video-studio/briefs/TEMPLATE.md`.
