# AI Lesson Video Pipeline

Multi-agent pipeline for making short Grade 11 Physics & Chemistry lesson videos (Vietnamese,
*Kết nối tri thức* textbooks) with AI, publishing them to YouTube and embedding them on a study website.

| Folder | What it is |
|---|---|
| [`hoc-ly-hoa-11/`](hoc-ly-hoa-11/) | Study website (Vite + React): formula sheets, lesson videos, interactive simulations, quizzes |
| [`youtube-video-studio/`](youtube-video-studio/) | Remotion template that renders a video, a 9:16 Short and a thumbnail from one JSON file per episode |
| [`.claude/agents/`](.claude/agents/) | Claude Code agents: scriptwriter, content reviewer, asset checker, video editor, YouTube publisher |
| [`.claude/commands/produce-lesson.md`](.claude/commands/produce-lesson.md) | `/produce-lesson <brief>` — runs the whole pipeline with review loops and a human approval gate |
| [`docs/multi-agent-pipeline.md`](docs/multi-agent-pipeline.md) | How the pipeline works, what is automatic, how to set it up for a coworker |

## Quick start

Requirements: Node.js 18+, [Claude Code](https://claude.com/claude-code).

```bash
# Study website
cd hoc-ly-hoa-11 && npm install && npm run dev

# Video studio
cd youtube-video-studio && npm install && npm run studio

# Full pipeline (from the repo root, in Claude Code)
/produce-lesson youtube-video-studio/briefs/ly11-giao-thoa-song.md
```

Publishing uses the Zapier MCP connector with a YouTube connection; see the pipeline doc.

## Notes

- Media assets in `youtube-video-studio/public/` are not committed (size and licensing). Each episode's
  production sheet lists the files to create.
- Remotion is free for individuals and companies of up to 3 people; larger companies need a
  [Remotion license](https://www.remotion.pro/license).
- Content is a study aid; always check it against the textbook.
