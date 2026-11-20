import {useCallback, useState} from 'react';

// Progress is kept in this browser only (localStorage). Fine for one student on one device.
export interface ChapterProgress {
	visited: string[]; // tabs opened: tom-tat, video, mo-phong, luyen-tap
	bestScore?: number; // 0..1
	attempts?: number;
	lastAttempt?: string; // ISO date
}
export type Progress = Record<string, ChapterProgress>; // key: subjectId/chapterId

const KEY = 'hoc-ly-hoa-11:progress';

function load(): Progress {
	try {
		return JSON.parse(localStorage.getItem(KEY) || '{}') as Progress;
	} catch {
		return {};
	}
}

function save(p: Progress) {
	try {
		localStorage.setItem(KEY, JSON.stringify(p));
	} catch {
		/* storage unavailable: progress just won't persist */
	}
}

export function useProgress() {
	const [progress, setProgress] = useState<Progress>(load);

	const update = useCallback((key: string, fn: (c: ChapterProgress) => ChapterProgress) => {
		setProgress((prev) => {
			const current = prev[key] ?? {visited: []};
			const updated = fn(current);
			if (updated === prev[key]) return prev; // nothing changed: no re-render, no write
			const next = {...prev, [key]: updated};
			save(next);
			return next;
		});
	}, []);

	const markVisited = useCallback(
		(key: string, tab: string) =>
			update(key, (c) => (c.visited.includes(tab) ? c : {...c, visited: [...c.visited, tab]})),
		[update],
	);

	const recordQuiz = useCallback(
		(key: string, score: number) =>
			update(key, (c) => ({
				...c,
				bestScore: Math.max(c.bestScore ?? 0, score),
				attempts: (c.attempts ?? 0) + 1,
				lastAttempt: new Date().toISOString(),
			})),
		[update],
	);

	return {progress, markVisited, recordQuiz};
}
