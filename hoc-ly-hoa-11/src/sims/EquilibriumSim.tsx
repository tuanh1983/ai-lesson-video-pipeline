import React, {useRef, useState} from 'react';
import {cssVar, fitCanvas, useAnimationFrame} from '../components/canvas';
import {Rich} from '../components/Math';
import {Slider} from './SpringSim';

// 2NO2(g) (brown) ⇌ N2O4(g) (colorless), ΔrH° ≈ −57 kJ/mol (forward is exothermic).
// Kinetics: v_t = k_t[NO2]², v_n = k_n[N2O4]; Kc = k_t/k_n. Kc(T) from van 't Hoff.
const K298 = 170; // L/mol, approximate literature value at 25 °C
const DH = -57200; // J/mol
const R = 8.314;
const KN = 0.1; // reverse rate constant (sim units), slow enough to watch
const HISTORY = 40; // seconds shown on graph
const START = 0.04; // mol/L NO2

const Kc = (tC: number) => K298 * Math.exp((-DH / R) * (1 / (tC + 273.15) - 1 / 298.15));

interface Sample {
	t: number;
	no2: number;
	n2o4: number;
}

export const EquilibriumSim: React.FC = () => {
	const [tempC, setTempC] = useState(25);
	const [catalyst, setCatalyst] = useState(false);
	const [message, setMessage] = useState(
		'Hỗn hợp ban đầu chỉ có NO₂. Quan sát màu nâu nhạt dần cho tới khi đạt cân bằng.',
	);
	const [readout, setReadout] = useState({no2: START, n2o4: 0, Q: 0});

	const s = useRef({no2: START, n2o4: 0, t: 0, lastSample: -1, lastReadout: 0, history: [] as Sample[]});
	const flask = useRef<HTMLCanvasElement>(null);
	const graph = useRef<HTMLCanvasElement>(null);

	const K = Kc(tempC);

	useAnimationFrame((dt) => {
		const st = s.current;
		const kn = KN * (catalyst ? 5 : 1);
		const kt = K * kn;
		// integrate with adaptive sub-steps for stability
		let remaining = dt;
		while (remaining > 0) {
			const h = Math.min(remaining, 0.005, 0.2 / (4 * kt * st.no2 + kn + 1e-9));
			const rate = kt * st.no2 * st.no2 - kn * st.n2o4;
			st.no2 = Math.max(0, st.no2 - 2 * rate * h);
			st.n2o4 = Math.max(0, st.n2o4 + rate * h);
			remaining -= h;
		}
		st.t += dt;
		if (st.t - st.lastSample >= 0.1) {
			st.history.push({t: st.t, no2: st.no2, n2o4: st.n2o4});
			while (st.history.length && st.history[0].t < st.t - HISTORY) st.history.shift();
			st.lastSample = st.t;
		}
		if (st.t - st.lastReadout > 0.2) {
			st.lastReadout = st.t;
			setReadout({no2: st.no2, n2o4: st.n2o4, Q: st.no2 > 0 ? st.n2o4 / (st.no2 * st.no2) : Infinity});
		}

		const muted = cssVar('--muted');
		const text = cssVar('--text');

		if (flask.current) {
			const {ctx, w, h} = fitCanvas(flask.current);
			const cx = w / 2;
			const r = Math.min(w, h) * 0.32;
			const cy = h * 0.6;
			// gas color: brown with opacity ∝ [NO2]
			const alpha = Math.min(0.95, st.no2 / 0.06);
			ctx.beginPath();
			ctx.arc(cx, cy, r, 0, Math.PI * 2);
			ctx.fillStyle = `rgba(165, 70, 20, ${alpha})`;
			ctx.fill();
			ctx.strokeStyle = text;
			ctx.lineWidth = 3;
			ctx.stroke();
			ctx.strokeRect(cx - r * 0.25, cy - r * 1.75, r * 0.5, r * 0.8);
			ctx.fillStyle = muted;
			ctx.font = '12px "Be Vietnam Pro", sans-serif';
			ctx.textAlign = 'center';
			ctx.fillText(`${tempC} °C${catalyst ? ' · có xúc tác' : ''}`, cx, h - 6);
		}

		if (graph.current) {
			const {ctx, w, h} = fitCanvas(graph.current);
			const maxC = Math.max(0.05, ...st.history.map((p) => Math.max(p.no2, p.n2o4))) * 1.1;
			const t0 = st.t - HISTORY;
			const X = (t: number) => ((t - t0) / HISTORY) * (w - 10);
			const Y = (c: number) => h - 18 - (c / maxC) * (h - 30);
			ctx.strokeStyle = muted;
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(0, Y(0));
			ctx.lineTo(w, Y(0));
			ctx.stroke();
			const line = (key: 'no2' | 'n2o4', color: string) => {
				ctx.strokeStyle = color;
				ctx.lineWidth = 2;
				ctx.beginPath();
				st.history.forEach((p, i) => (i ? ctx.lineTo(X(p.t), Y(p[key])) : ctx.moveTo(X(p.t), Y(p[key]))));
				ctx.stroke();
			};
			line('no2', '#C0582A');
			line('n2o4', cssVar('--chem'));
			ctx.fillStyle = muted;
			ctx.font = '11px "Be Vietnam Pro", sans-serif';
			ctx.textAlign = 'left';
			ctx.fillText('Nồng độ (mol/L) theo thời gian', 4, 12);
		}
	});

	const act = (fn: (st: typeof s.current) => void, msg: string) => {
		fn(s.current);
		setMessage(msg);
	};

	const onTemp = (v: number) => {
		if (v > tempC)
			setMessage(
				'Tăng nhiệt độ → Kc giảm (phản ứng thuận toả nhiệt) → cân bằng chuyển dịch theo chiều nghịch (thu nhiệt): tạo thêm NO₂, màu đậm dần.',
			);
		else if (v < tempC)
			setMessage(
				'Giảm nhiệt độ → Kc tăng → cân bằng chuyển dịch theo chiều thuận (toả nhiệt): NO₂ giảm, màu nhạt dần.',
			);
		setTempC(v);
	};

	const {no2, n2o4, Q} = readout;
	const ratio = Q / K;
	const status =
		Math.abs(ratio - 1) < 0.03
			? 'Hệ đang ở trạng thái cân bằng (Q ≈ Kc).'
			: ratio < 1
				? 'Q < Kc → cân bằng đang chuyển dịch theo chiều thuận (tạo N₂O₄).'
				: 'Q > Kc → cân bằng đang chuyển dịch theo chiều nghịch (tạo NO₂).';

	const fmt = (n: number, d = 4) => (isFinite(n) ? n.toLocaleString('vi-VN', {maximumFractionDigits: d}) : '∞');

	return (
		<div className="sim">
			<h3>
				<Rich text={'Chuyển dịch cân bằng: $\\ce{2NO2(g) <=> N2O4(g)}$, $\\Delta_rH < 0$'} />
			</h3>
			<p className="muted">
				<Rich text={'$\\ce{NO2}$ màu nâu đỏ, $\\ce{N2O4}$ không màu — nhìn màu bình khí để biết cân bằng chuyển dịch theo chiều nào.'} />
			</p>
			<div className="sim-row">
				<canvas ref={flask} className="sim-canvas" style={{height: 220, maxWidth: 260}} />
				<canvas ref={graph} className="sim-canvas" style={{height: 220, flex: 1}} />
			</div>
			<div className="legend">
				<span className="chip" style={{color: '#C0582A'}}>
					■ [NO₂] = {fmt(no2)} M
				</span>
				<span className="chip" style={{color: 'var(--chem)'}}>
					■ [N₂O₄] = {fmt(n2o4)} M
				</span>
				<span className="chip">
					<Rich text={`$Q = ${fmt(Q, 1)}$ · $K_C = ${fmt(K, 1)}$`} />
				</span>
			</div>
			<div className="status">{status}</div>
			<div className="controls">
				<Slider label="Nhiệt độ" unit="°C" min={0} max={100} step={5} value={tempC} onChange={onTemp} />
				<div className="control">
					<span>Tác động</span>
					<div className="seg wrap">
						<button
							onClick={() =>
								act(
									(st) => (st.no2 += 0.02),
									'Thêm NO₂ → nồng độ NO₂ tăng → cân bằng chuyển dịch theo chiều thuận để làm giảm NO₂.',
								)
							}
						>
							+ Thêm NO₂
						</button>
						<button
							onClick={() =>
								act(
									(st) => {
										st.no2 *= 2;
										st.n2o4 *= 2;
									},
									'Nén thể tích còn một nửa → áp suất tăng → màu đậm lên ngay (nồng độ tăng gấp đôi), sau đó nhạt dần vì cân bằng chuyển dịch theo chiều giảm số mol khí (2 mol → 1 mol, chiều thuận).',
								)
							}
						>
							Nén (V ÷ 2)
						</button>
						<button
							onClick={() =>
								act(
									(st) => {
										st.no2 /= 2;
										st.n2o4 /= 2;
									},
									'Tăng thể tích gấp đôi → áp suất giảm → cân bằng chuyển dịch theo chiều tăng số mol khí (chiều nghịch, tạo NO₂).',
								)
							}
						>
							Giãn (V × 2)
						</button>
						<button
							className={catalyst ? 'on' : ''}
							onClick={() => {
								setCatalyst(!catalyst);
								setMessage(
									'Chất xúc tác tăng tốc độ cả hai chiều như nhau → hệ đạt cân bằng nhanh hơn nhưng Kc và vị trí cân bằng không đổi.',
								);
							}}
						>
							{catalyst ? '✓ Xúc tác' : 'Xúc tác'}
						</button>
						<button
							onClick={() => {
								s.current = {no2: START, n2o4: 0, t: 0, lastSample: -1, lastReadout: 0, history: []};
								setTempC(25);
								setCatalyst(false);
								setMessage('Đã đặt lại: chỉ có NO₂ ở 25 °C.');
							}}
						>
							↺ Đặt lại
						</button>
					</div>
				</div>
			</div>
			<p className="hint">💡 {message}</p>
			<p className="muted small">
				Mô hình đơn giản hoá để minh hoạ; giá trị Kc xấp xỉ, đơn vị thời gian không phải giây thực.
			</p>
		</div>
	);
};
