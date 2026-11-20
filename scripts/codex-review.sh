#!/usr/bin/env bash
# Second, cross-model review gate: asks OpenAI Codex to review an episode with the same
# checklist as the content-reviewer agent, in a READ-ONLY sandbox.
#
#   scripts/codex-review.sh script <episode>   # Mode A: production sheet + episode JSON
#   scripts/codex-review.sh render <episode>   # Mode B: rendered check frames (attached as images)
#
# Writes youtube-video-studio/briefs/<episode>-codex-review.md (or -codex-render-review.md)
# Exit code: 0 = PASS, 1 = FAIL, 2 = could not run.
set -euo pipefail

MODE="${1:-}"; EP="${2:-}"
if [[ -z "$MODE" || -z "$EP" ]]; then echo "usage: $0 script|render <episode>"; exit 2; fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BRIEFS="youtube-video-studio/briefs"

# Find the Codex CLI: $CODEX_BIN, then PATH, then the newest VS Code extension build.
CODEX="${CODEX_BIN:-}"
if [[ -z "$CODEX" ]] && command -v codex >/dev/null 2>&1; then CODEX="$(command -v codex)"; fi
if [[ -z "$CODEX" ]]; then
	CODEX="$(ls -d "$HOME"/.vscode/extensions/openai.chatgpt-*/bin/*/codex.exe 2>/dev/null | sort -V | tail -1 || true)"
fi
if [[ -z "$CODEX" || ! -x "$CODEX" ]]; then echo "Codex CLI not found (set CODEX_BIN)"; exit 2; fi

IMAGES=()
if [[ "$MODE" == "script" ]]; then
	OUT="$BRIEFS/$EP-codex-review.md"
	TASK="Mode A (script review). Review $BRIEFS/$EP-production.md and youtube-video-studio/episodes/$EP.json against the brief $BRIEFS/$EP.md, youtube-video-studio/src/schema.ts and the matching topic in hoc-ly-hoa-11/src/data/vatLi.ts or hoaHoc.ts. Recompute every number and worked example."
elif [[ "$MODE" == "render" ]]; then
	OUT="$BRIEFS/$EP-codex-render-review.md"
	TASK="Mode B (render review). The attached images are check frames from youtube-video-studio/out/$EP-check-*.png (one per scene, in order). Also read youtube-video-studio/episodes/$EP.json and $BRIEFS/$EP-render.md."
	for f in "$ROOT"/youtube-video-studio/out/"$EP"-check-*.png; do [[ -f "$f" ]] && IMAGES+=(-i "$f"); done
	if [[ ${#IMAGES[@]} -eq 0 ]]; then echo "No check frames found for $EP"; exit 2; fi
else
	echo "mode must be script or render"; exit 2
fi

PROMPT="You are an independent second reviewer (a different AI model from the author and from the first reviewer).
Read .claude/agents/content-reviewer.md and apply its checklist and verdict rules exactly.
$TASK
If a first review exists ($BRIEFS/$EP-review.md or $EP-render-review.md), do NOT copy it: form your own judgement, then add a short section 'Disagreements with first reviewer' if any.
You are in a read-only sandbox: do not try to modify files. Your final message IS the report, in the report format from content-reviewer.md, and its last line must be exactly 'VERDICT: PASS' or 'VERDICT: FAIL'."

"$CODEX" exec -s read-only -C "$ROOT" --skip-git-repo-check --ephemeral \
	-o "$ROOT/$OUT" "${IMAGES[@]}" "$PROMPT" >/dev/null 2>"$ROOT/$OUT.log" || {
	echo "Codex run failed — see $OUT.log"; exit 2; }
rm -f "$ROOT/$OUT.log"

VERDICT="$(grep -oE 'VERDICT: (PASS|FAIL)' "$ROOT/$OUT" | tail -1 || true)"
echo "Codex report: $OUT"
echo "${VERDICT:-VERDICT: MISSING}"
[[ "$VERDICT" == "VERDICT: PASS" ]] && exit 0
[[ "$VERDICT" == "VERDICT: FAIL" ]] && exit 1
exit 2
