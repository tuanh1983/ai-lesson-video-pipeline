import React, {useEffect, useState} from 'react';
import {ChapterPage} from './components/ChapterPage';
import {Home} from './components/Home';
import {findChapter} from './data';
import {useProgress} from './progress';

// Hash routes: #/  ·  #/<subject>/<chapter>/<tab>
function useRoute() {
	const [hash, setHash] = useState(window.location.hash);
	useEffect(() => {
		const on = () => setHash(window.location.hash);
		window.addEventListener('hashchange', on);
		return () => window.removeEventListener('hashchange', on);
	}, []);
	return hash.replace(/^#\/?/, '').split('/').filter(Boolean);
}

export const App: React.FC = () => {
	const [subjectId, chapterId, tab] = useRoute();
	const {progress, markVisited, recordQuiz} = useProgress();
	const {subject, chapter} = findChapter(subjectId, chapterId);

	useEffect(() => window.scrollTo(0, 0), [subjectId, chapterId]);

	return (
		<>
			<header className="topbar">
				<a href="#/" className="brand">
					<span className="logo">⚡</span> Học Lý Hoá 11
				</a>
				<span className="muted small">Bám sát SGK Kết nối tri thức</span>
			</header>
			<main className="container">
				{subject && chapter ? (
					<ChapterPage
						subject={subject}
						chapter={chapter}
						tab={tab || 'tom-tat'}
						progress={progress[`${subject.id}/${chapter.id}`]}
						onVisit={(t) => markVisited(`${subject.id}/${chapter.id}`, t)}
						onQuiz={(s) => recordQuiz(`${subject.id}/${chapter.id}`, s)}
					/>
				) : (
					<Home progress={progress} />
				)}
			</main>
			<footer className="footer muted small">
				Nội dung tóm tắt để ôn tập — luôn đối chiếu với SGK và lời giảng của thầy cô.
			</footer>
		</>
	);
};
