import React from 'react';
import {subjects} from '../data';
import type {Progress} from '../progress';
import {TABS} from './ChapterPage';

export const Home: React.FC<{progress: Progress}> = ({progress}) => (
	<>
		<section className="hero">
			<h1>Chào em! Hôm nay học gì nhỉ? 👋</h1>
			<p className="muted">
				Mỗi bài có 4 phần: <b>Tóm tắt</b> công thức, <b>Video</b> bài giảng, <b>Mô phỏng</b> để tự tay thử nghiệm và{' '}
				<b>Luyện tập</b> có lời giải.
			</p>
		</section>
		<div className="subjects">
			{subjects.map((s) => (
				<section key={s.id} className={`subject ${s.accent}`}>
					<h2>
						<span>{s.icon}</span> {s.name}
					</h2>
					{s.chapters.map((c) => {
						const p = progress[`${s.id}/${c.id}`];
						const visited = p?.visited.length ?? 0;
						return (
							<a key={c.id} className="chapter-card" href={`#/${s.id}/${c.id}/tom-tat`}>
								<div className="chapter-title">{c.title}</div>
								<div className="progress-row">
									<div className="steps">
										{TABS.map((t) => (
											<span key={t.id} className={p?.visited.includes(t.id) ? 'step done' : 'step'} title={t.label}>
												{t.icon}
											</span>
										))}
									</div>
									<span className="small muted">
										{p?.bestScore !== undefined
											? `Điểm cao nhất: ${Math.round(p.bestScore * c.quiz.length)}/${c.quiz.length}`
											: visited
												? `Đã xem ${visited}/4 phần`
												: 'Chưa bắt đầu'}
									</span>
								</div>
								<div className="bar">
									<div style={{width: `${(p?.bestScore ?? 0) * 100}%`}} />
								</div>
							</a>
						);
					})}
					<div className="upcoming">
						<div className="small muted">Sắp có:</div>
						{s.upcoming.map((u) => (
							<div key={u} className="upcoming-item">
								🔒 {u}
							</div>
						))}
					</div>
				</section>
			))}
		</div>
	</>
);
