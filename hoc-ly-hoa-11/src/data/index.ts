import {hoaHoc} from './hoaHoc';
import {vatLi} from './vatLi';

export const subjects = [vatLi, hoaHoc];

export function findChapter(subjectId?: string, chapterId?: string) {
	const subject = subjects.find((s) => s.id === subjectId);
	const chapter = subject?.chapters.find((c) => c.id === chapterId);
	return {subject, chapter};
}
