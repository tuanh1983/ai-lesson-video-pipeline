import React, {useEffect, useRef, useState} from 'react';
import {cssVar, fitCanvas, useAnimationFrame} from '../components/canvas';
import {Rich} from '../components/Math';

const PHASES = [
	{label: '0', value: 0},
	{label: 'π/2', value: Math.PI / 2},
	{label: 'π', value: Math.PI},
	{label: '−π/2', value: -Math.PI / 2},
];
const WINDOW = 3; // seconds of graph history

// Horizontal spring pendulum. With damping γ: x = A·e^(−γt)·cos(ω_d t + φ), exact solution.
export const SpringSim: React.FC = () => {
	const [m, setM] = useState(0.4); // kg
	const [k, setK] = useState(40); // N/m
	const [A, setA] = useState(6); // cm
	const [phi, setPhi] = useState(0);
	const [gamma, setGamma] = useState(0); // 1/s
	const [speed, setSpeed] = useState(1);
	const [running, setRunning] = useState(true);
	const [show, setShow] = useState({x: true, v: true, a: false});

	const t = useRef(0);
	const scene = useRef<HTMLCanvasElement>(null);
	const graph = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		t.current = 0;
	}, [m, k, A, phi, gamma]);

	const w0 = Math.sqrt(k / m);
	const wd = Math.sqrt(Math.max(w0 * w0 - gamma * gamma, 1e-6));
	const T = (2 * Math.PI) / w0;

	const state = (time: number) => {
		const env = A * Math.exp(-gamma * time);
		const th = wd * time + phi;
		const x = env * Math.cos(th);
		const v = env * (-gamma * Math.cos(th) - wd * Math.sin(th));
		const a = -w0 * w0 * x - 2 * gamma * v;
		return {x, v, a};
	};

	useAnimationFrame((dt) => {
		if (running) t.current += dt * speed;
		const s = state(t.current);
		const text = cssVar('--text');
		const muted = cssVar('--muted');
		const cx = cssVar('--c-x');
		const cv = cssVar('--c-v');
		const ca = cssVar('--c-a');

		// --- scene ---
		if (scene.current) {
			const {ctx, w, h} = fitCanvas(scene.current);
			const mid = w * 0.55;
			const scale = (w * 0.3) / 10; // 10 cm → 30% of width
			const y = h * 0.55;
			const bx = mid + s.x * scale;
			const box = 46;
			// floor & wall
			ctx.strokeStyle = muted;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(10, y + box / 2);
			ctx.lineTo(w - 10, y + box / 2);
			ctx.moveTo(14, y - 50);
			ctx.lineTo(14, y + box / 2);
			ctx.stroke();
			// equilibrium & amplitude markers
			ctx.setLineDash([4, 4]);
			ctx.beginPath();
			ctx.moveTo(mid, 16);
			ctx.lineTo(mid, y + box / 2);
			ctx.moveTo(mid - A * scale, 30);
			ctx.lineTo(mid - A * scale, y + box / 2);
			ctx.moveTo(mid + A * scale, 30);
			ctx.lineTo(mid + A * scale, y + box / 2);
			ctx.stroke();
			ctx.setLineDash([]);
			ctx.fillStyle = muted;
			ctx.font = '12px "Be Vietnam Pro", sans-serif';
			ctx.textAlign = 'center';
			ctx.fillText('VTCB (x = 0)', mid, 12);
			ctx.fillText('−A', mid - A * scale, 26);
			ctx.fillText('+A', mid + A * scale, 26);
			// spring (zigzag)
			const sx = 14;
			const ex = bx - box / 2;
			const coils = 14;
			ctx.strokeStyle = text;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(sx, y);
			for (let i = 1; i <= coils; i++) {
				const px = sx + ((ex - sx) * i) / (coils + 1);
				ctx.lineTo(px, y + (i % 2 ? -10 : 10));
			}
			ctx.lineTo(ex, y);
			ctx.stroke();
			// block
			ctx.fillStyle = cssVar('--phys');
			ctx.fillRect(bx - box / 2, y - box / 2, box, box);
			ctx.fillStyle = '#fff';
			ctx.fillText('m', bx, y + 4);
			// arrows: velocity (above) & acceleration (below)
			const arrow = (val: number, max: number, yy: number, color: string, label: string) => {
				const len = (val / max) * 70;
				if (Math.abs(len) < 2) return;
				ctx.strokeStyle = color;
				ctx.fillStyle = color;
				ctx.lineWidth = 3;
				ctx.beginPath();
				ctx.moveTo(bx, yy);
				ctx.lineTo(bx + len, yy);
				ctx.stroke();
				const dir = Math.sign(len);
				ctx.beginPath();
				ctx.moveTo(bx + len + dir * 8, yy);
				ctx.lineTo(bx + len, yy - 5);
				ctx.lineTo(bx + len, yy + 5);
				ctx.fill();
				ctx.fillText(label, bx + len / 2, yy - 6);
			};
			if (show.v) arrow(s.v, w0 * A, y - box / 2 - 14, cv, 'v');
			if (show.a) arrow(s.a, w0 * w0 * A, y + box / 2 + 18, ca, 'a');
		}

		// --- graph + energy bars ---
		if (graph.current) {
			const {ctx, w, h} = fitCanvas(graph.current);
			const barW = 120;
			const gw = w - barW - 20;
			const mid = h / 2;
			ctx.strokeStyle = muted;
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(0, mid);
			ctx.lineTo(gw, mid);
			ctx.stroke();
			const t1 = t.current;
			const t0 = t1 - WINDOW;
			const plot = (key: 'x' | 'v' | 'a', norm: number, color: string) => {
				ctx.strokeStyle = color;
				ctx.lineWidth = 2;
				ctx.beginPath();
				let started = false;
				for (let px = 0; px <= gw; px += 2) {
					const time = t0 + (px / gw) * WINDOW;
					if (time < 0) continue;
					const val = state(time)[key] / norm;
					const py = mid - val * (h * 0.42);
					if (!started) {
						ctx.moveTo(px, py);
						started = true;
					} else ctx.lineTo(px, py);
				}
				ctx.stroke();
			};
			if (show.x) plot('x', A, cx);
			if (show.v) plot('v', w0 * A, cv);
			if (show.a) plot('a', w0 * w0 * A, ca);
			ctx.fillStyle = muted;
			ctx.font = '11px "Be Vietnam Pro", sans-serif';
			ctx.textAlign = 'left';
			ctx.fillText('t (đồ thị đã chuẩn hoá theo giá trị cực đại)', 4, h - 4);

			// energy (SI): x, v in m and m/s
			const xm = s.x / 100;
			const vm = s.v / 100;
			const Wd = 0.5 * m * vm * vm;
			const Wt = 0.5 * k * xm * xm;
			const W0 = 0.5 * k * (A / 100) ** 2;
			const bars = [
				{label: 'Wđ', val: Wd, color: cv},
				{label: 'Wt', val: Wt, color: cx},
				{label: 'W', val: Wd + Wt, color: text},
			];
			const bx0 = gw + 20;
			const bw = 28;
			bars.forEach((b, i) => {
				const bh = (b.val / W0) * (h - 40);
				const x = bx0 + i * (bw + 10);
				ctx.fillStyle = b.color;
				ctx.fillRect(x, h - 20 - bh, bw, bh);
				ctx.fillStyle = muted;
				ctx.textAlign = 'center';
				ctx.fillText(b.label, x + bw / 2, h - 6);
			});
		}
	});

	const fmt = (n: number, d = 2) => n.toLocaleString('vi-VN', {maximumFractionDigits: d});
	const W = 0.5 * k * (A / 100) ** 2 * 1000;

	return (
		<div className="sim">
			<h3>Con lắc lò xo nằm ngang</h3>
			<p className="muted">
				Thay đổi m, k, A và quan sát chu kì, vận tốc, gia tốc, năng lượng. Bật lực cản để thấy dao động tắt dần.
			</p>
			<canvas ref={scene} className="sim-canvas" style={{height: 170}} />
			<canvas ref={graph} className="sim-canvas" style={{height: 180}} />
			<div className="legend">
				{(['x', 'v', 'a'] as const).map((key) => (
					<label key={key} className={`chip c-${key}`}>
						<input
							type="checkbox"
							checked={show[key]}
							onChange={(e) => setShow({...show, [key]: e.target.checked})}
						/>{' '}
						{key === 'x' ? 'Li độ x' : key === 'v' ? 'Vận tốc v' : 'Gia tốc a'}
					</label>
				))}
			</div>
			<div className="controls">
				<Slider label="Khối lượng m" unit="kg" min={0.1} max={1} step={0.05} value={m} onChange={setM} />
				<Slider label="Độ cứng k" unit="N/m" min={10} max={100} step={5} value={k} onChange={setK} />
				<Slider label="Biên độ A" unit="cm" min={2} max={10} step={1} value={A} onChange={setA} />
				<Slider label="Lực cản γ" unit="1/s" min={0} max={1} step={0.05} value={gamma} onChange={setGamma} />
				<div className="control">
					<span>Pha ban đầu φ</span>
					<div className="seg">
						{PHASES.map((p) => (
							<button key={p.label} className={phi === p.value ? 'on' : ''} onClick={() => setPhi(p.value)}>
								{p.label}
							</button>
						))}
					</div>
				</div>
				<div className="control">
					<span>Tốc độ phát</span>
					<div className="seg">
						{[0.25, 0.5, 1].map((s) => (
							<button key={s} className={speed === s ? 'on' : ''} onClick={() => setSpeed(s)}>
								{s}×
							</button>
						))}
						<button onClick={() => setRunning(!running)}>{running ? '⏸ Dừng' : '▶ Chạy'}</button>
					</div>
				</div>
			</div>
			<div className="readouts">
				<Rich text={`$\\omega = \\sqrt{k/m} = ${fmt(w0)}$ rad/s`} />
				<Rich text={`$T = ${fmt(T, 3)}$ s · $f = ${fmt(1 / T)}$ Hz`} />
				<Rich text={`$v_{max} = \\omega A = ${fmt(w0 * A, 1)}$ cm/s`} />
				<Rich text={`$a_{max} = \\omega^2 A = ${fmt(w0 * w0 * A, 0)}$ cm/s²`} />
				<Rich text={`$W = \\tfrac12 kA^2 = ${fmt(W, 1)}$ mJ${gamma > 0 ? ' (ban đầu)' : ''}`} />
			</div>
			<p className="hint">
				💡 Thử: tăng m lên 4 lần → T tăng 2 lần. Thay đổi A → T không đổi. Quan sát Wđ và Wt đổi chỗ cho nhau 2
				lần mỗi chu kì, còn W giữ nguyên (khi không có lực cản).
			</p>
		</div>
	);
};

export const Slider: React.FC<{
	label: string;
	unit: string;
	min: number;
	max: number;
	step: number;
	value: number;
	onChange: (v: number) => void;
	display?: string;
}> = ({label, unit, min, max, step, value, onChange, display}) => (
	<label className="control">
		<span>
			{label}: <b>{display ?? value.toLocaleString('vi-VN')}</b> {unit}
		</span>
		<input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
	</label>
);
