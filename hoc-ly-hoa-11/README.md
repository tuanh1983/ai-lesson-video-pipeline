# Học Lý Hoá 11

A study website for Grade 11 Physics & Chemistry (Vietnamese, following the **Kết nối tri thức** textbooks).
Each topic has 4 tabs: **Tóm tắt** (formula sheet, printable), **Video**, **Mô phỏng** (interactive simulations), **Luyện tập** (quiz with explanations; best score saved).

## Run it
```
npm install        # first time only
npm run dev        # open the printed http://localhost:5173 link
npm run build      # makes dist/ — a static site you can host anywhere
```
Node 18 works (Vite 6, TypeScript 5).

## Current content
| Subject | Topic | Simulations |
|---|---|---|
| Vật lí | Chương II — Bài 12. Giao thoa sóng | Ripple tank (2 sources, tap to test point M), Young double slit |
| Vật lí | Chương I. Dao động | Spring pendulum with x/v/a graphs, energy bars, damping |
| Hoá học | Chương 1. Cân bằng hoá học | 2NO₂ ⇌ N₂O₄ Le Chatelier, pH & indicators |

## Adding videos
Edit the `videos` list of a topic in `src/data/vatLi.ts` or `src/data/hoaHoc.ts`:
- **YouTube lesson:** set `youtubeId: 'abc123XYZ'` (the part after `watch?v=`). The "Tìm trên YouTube" button on each empty card helps you find one.
- **Your own video** (from `../youtube-video-studio`): copy the mp4 to `public/videos/` and set `file: 'videos/giao-thoa.mp4'`.

## Adding a topic
Copy one chapter object in `src/data/*.ts`, change `id`, `title`, `lessons`, `sheet`, `videos`, `sims`, `quiz`.
Text supports inline math `$...$` and chemistry `$\ce{H2O}$`. Use `String.raw` (the `r` tag) for LaTeX.
Then move the title out of `upcoming`. Claude Code can do this for you: "add Bài 13 Sóng dừng following the existing format".

## Progress
Saved in the browser (localStorage) on the device she uses. Clearing browser data resets it.

## Hosting (later)
`npm run build`, then upload `dist/` to GitHub Pages, Netlify or Vercel (all free). The site uses hash URLs, so it works on any static host.

## Content accuracy
Formulas and answers were written to match the KNTT program, but please skim each topic against her textbook and teacher's notes.
