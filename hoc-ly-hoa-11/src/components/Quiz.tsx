import React, {useState} from 'react';
import type {Question} from '../types';
import {Rich} from './Math';

export const Quiz: React.FC<{questions: Question[]; best?: number; onFinish: (score: number) => void}> = ({
	questions,
	best,
	onFinish,
}) => {
	const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
	const [submitted, setSubmitted] = useState(false);
	// shuffle option order once per attempt so she can't memorise "always A"
	const [orders, setOrders] = useState(() => questions.map((q) => shuffle(q.options.map((_, i) => i))));

	const correct = answers.filter((a, i) => a === questions[i].answer).length;
	const done = answers.every((a) => a !== null);

	const submit = () => {
		setSubmitted(true);
		onFinish(correct / questions.length);
		window.scrollTo({top: 0, behavior: 'smooth'});
	};
	const retry = () => {
		setAnswers(questions.map(() => null));
		setOrders(questions.map((q) => shuffle(q.options.map((_, i) => i))));
		setSubmitted(false);
	};

	return (
		<div className="quiz">
			{submitted ? (
				<div className={`score ${correct / questions.length >= 0.8 ? 'good' : ''}`}>
					Kết quả: <b>{correct}/{questions.length}</b> câu đúng
					{correct === questions.length ? ' 🎉 Xuất sắc!' : correct / questions.length >= 0.8 ? ' 👍 Tốt lắm!' : ' — xem lời giải bên dưới rồi làm lại nhé.'}
					<button onClick={retry}>Làm lại</button>
				</div>
			) : best !== undefined ? (
				<p className="muted">Điểm cao nhất trước đây: {Math.round(best * questions.length)}/{questions.length}</p>
			) : null}

			{questions.map((q, qi) => (
				<div key={qi} className="question">
					<div className="q-text">
						<b>Câu {qi + 1}.</b> <Rich text={q.q} />
					</div>
					<div className="options">
						{orders[qi].map((oi, pos) => {
							const picked = answers[qi] === oi;
							const cls = submitted
								? oi === q.answer
									? 'opt right'
									: picked
										? 'opt wrong'
										: 'opt'
								: picked
									? 'opt picked'
									: 'opt';
							return (
								<button
									key={oi}
									className={cls}
									disabled={submitted}
									onClick={() => setAnswers(answers.map((a, i) => (i === qi ? oi : a)))}
								>
									<span className="letter">{'ABCD'[pos]}</span> <Rich text={q.options[oi]} />
								</button>
							);
						})}
					</div>
					{submitted ? (
						<div className="explain">
							{answers[qi] === q.answer ? '✅ ' : '❌ '}
							<Rich text={q.explain} />
						</div>
					) : null}
				</div>
			))}

			{!submitted ? (
				<button className="primary" disabled={!done} onClick={submit}>
					{done ? 'Nộp bài' : `Còn ${answers.filter((a) => a === null).length} câu chưa làm`}
				</button>
			) : null}
		</div>
	);
};

function shuffle<T>(arr: T[]) {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
