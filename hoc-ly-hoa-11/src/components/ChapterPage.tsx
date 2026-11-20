import React, {useEffect} from 'react';
import type {ChapterProgress} from '../progress';
import {EquilibriumSim} from '../sims/EquilibriumSim';
import {InterferenceSim} from '../sims/InterferenceSim';
import {PhSim} from '../sims/PhSim';
import {SpringSim} from '../sims/SpringSim';
import {YoungSim} from '../sims/YoungSim';
import type {Chapter, SimId, Subject} from '../types';
import {Rich, Tex} from './Math';
import {Quiz} from './Quiz';
import {Videos} from './Videos';

export const TABS = [
	{id: 'tom-tat', label: 'Tóm tắt', icon: '📝'},
	{id: 'video', label: 'Video', icon: '🎬'},
	{id: 'mo-phong', label: 'Mô phỏng', icon: '🔬'},
	{id: 'luyen-tap', label: 'Luyện tập', icon: '✏️'},
];

const SIMS: Record<SimId, React.FC> = {
	interference: InterferenceSim,
	young: YoungSim,
	spring: SpringSim,
	equilibrium: EquilibriumSim,
	ph: PhSim,
};

export const ChapterPage: React.FC<{
	subject: Subject;
	chapter: Chapter;
	tab: string;
	progress?: ChapterProgress;
	onVisit: (tab: string) => void;
	onQuiz: (score: number) => void;
}> = ({subject, chapter, tab, progress, onVisit, onQuiz}) => {
	useEffect(() => onVisit(tab), [tab, onVisit]);
	const base = `#/${subject.id}/${chapter.id}`;

	return (
		<div className={subject.accent}>
			<nav className="crumbs small">
				<a href="#/">Trang chủ</a> › {subject.name}
			</nav>
			<h1 className="chapter-h1">{chapter.title}</h1>
			<details className="lessons">
				<summary>Các bài trong SGK ({chapter.lessons.length})</summary>
				<ul>
					{chapter.lessons.map((l) => (
						<li key={l}>
							<Rich text={l} />
						</li>
					))}
				</ul>
			</details>

			<div className="tabs" role="tablist">
				{TABS.map((t) => (
					<a
						key={t.id}
						role="tab"
						aria-selected={tab === t.id}
						className={tab === t.id ? 'tab on' : 'tab'}
						href={`${base}/${t.id}`}
					>
						<span>{t.icon}</span> {t.label}
						{progress?.visited.includes(t.id) && tab !== t.id ? <span className="dot" /> : null}
					</a>
				))}
			</div>

			{tab === 'tom-tat' && (
				<div className="sheet">
					{chapter.sheet.map((sec) => (
						<section key={sec.title} className="card">
							<h2>
								<Rich text={sec.title} />
							</h2>
							{sec.items.map((it) => (
								<div key={it.name} className="formula">
									<div className="f-name">
										<Rich text={it.name} />
									</div>
									{it.tex ? <Tex tex={it.tex} /> : null}
									{it.note ? <Rich as="p" text={it.note} /> : null}
								</div>
							))}
						</section>
					))}
					<div className="actions">
						<button onClick={() => window.print()}>🖨️ In bảng tóm tắt</button>
					</div>
				</div>
			)}

			{tab === 'video' && <Videos videos={chapter.videos} />}

			{tab === 'mo-phong' && (
				<div className="sims">
					{chapter.sims.map((id) => {
						const Sim = SIMS[id];
						return (
							<section key={id} className="card">
								<Sim />
							</section>
						);
					})}
				</div>
			)}

			{tab === 'luyen-tap' && (
				<section className="card">
					<Quiz key={chapter.id} questions={chapter.quiz} best={progress?.bestScore} onFinish={onQuiz} />
				</section>
			)}
		</div>
	);
};
