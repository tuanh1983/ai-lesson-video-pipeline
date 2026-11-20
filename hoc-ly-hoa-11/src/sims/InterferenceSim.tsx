import React, {useMemo, useRef, useState} from 'react';
import {cssVar, fitCanvas, useAnimationFrame} from '../components/canvas';
import {Rich} from '../components/Math';
import {Slider} from './SpringSim';

// Ripple tank: two coherent point sources. Surface = cos(ωt − 2πd₁/λ) + cos(ωt − 2πd₂/λ + Δφ).
// World: 24 cm × 15 cm, computed on a 10 px/cm grid then scaled up.
const WORLD_W = 24;
const WORLD_H = 15;
const RES = 20; // grid cells per cm (higher = smoother lines)
const LINE_HALF_WIDTH = 0.07; // cm: maxima/minima lines have the same width everywhere
const GW = WORLD_W * RES;
const GH = WORLD_H * RES;
const SRC_Y = 2; // cm from the top

export const InterferenceSim: React.FC = () => {
	const [lambda, setLambda] = useState(1.6); // cm
	const [sep, setSep] = useState(6); // cm
	const [anti, setAnti] = useState(false); // sources in antiphase
	const [lines, setLines] = useState(true);
	const [point, setPoint] = useState<{x: number; y: number} | null>({x: 15, y: 9});

	const canvas = useRef<HTMLCanvasElement>(null);
	const off = useRef<HTMLCanvasElement | null>(null);
	const phase = useRef(0);

	const s1 = {x: WORLD_W / 2 - sep / 2, y: SRC_Y};
	const s2 = {x: WORLD_W / 2 + sep / 2, y: SRC_Y};

	// distances from every grid cell to each source (recomputed only when sources move)
	const dist = useMemo(() => {
		const d1 = new Float32Array(GW * GH);
		const d2 = new Float32Array(GW * GH);
		// |∇(d2 − d1)| per cell: how fast the path difference changes. Used to draw lines of
		// constant width (otherwise lines get thin/dashed near the sources and thick far away).
		const grad = new Float32Array(GW * GH);
		for (let j = 0; j < GH; j++)
			for (let i = 0; i < GW; i++) {
				const x = (i + 0.5) / RES;
				const y = (j + 0.5) / RES;
				const a = Math.hypot(x - s1.x, y - s1.y);
				const b = Math.hypot(x - s2.x, y - s2.y);
				const p = j * GW + i;
				d1[p] = a;
				d2[p] = b;
				const gx = (x - s2.x) / Math.max(b, 1e-6) - (x - s1.x) / Math.max(a, 1e-6);
				const gy = (y - s2.y) / Math.max(b, 1e-6) - (y - s1.y) / Math.max(a, 1e-6);
				grad[p] = Math.hypot(gx, gy);
			}
		return {d1, d2, grad};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sep]);

	useAnimationFrame((dt) => {
		const c = canvas.current;
		if (!c) return;
		phase.current += dt * 2 * Math.PI * 0.9;
		if (!off.current) {
			off.current = document.createElement('canvas');
			off.current.width = GW;
			off.current.height = GH;
		}
		const octx = off.current.getContext('2d')!;
		const img = octx.createImageData(GW, GH);
		const k = (2 * Math.PI) / lambda;
		const dphi = anti ? Math.PI : 0;
		const wt = phase.current;
		const {d1, d2, grad} = dist;
		for (let p = 0; p < GW * GH; p++) {
			const y = Math.cos(wt - k * d1[p]) + Math.cos(wt - k * d2[p] + dphi); // −2..2
			let r = 20 + 45 * (y + 2);
			let g = 70 + 40 * (y + 2);
			let b = 140 + 28 * (y + 2);
			if (lines) {
				// path difference in wavelengths, shifted by ½ for antiphase sources
				const n = (d2[p] - d1[p]) / lambda + (anti ? 0.5 : 0);
				const frac = Math.abs(n - Math.round(n));
				// tolerance in "wavelengths" that corresponds to a fixed line width in cm
				const tol = Math.min(0.12, Math.max(0.003, (grad[p] * LINE_HALF_WIDTH) / lambda));
				if (frac < tol) {
					r = 255;
					g = 210;
					b = 60; // maxima: yellow
				} else if (Math.abs(frac - 0.5) < tol) {
					r = 230;
					g = 70;
					b = 80; // minima: red
				}
			}
			const o = p * 4;
			img.data[o] = r;
			img.data[o + 1] = g;
			img.data[o + 2] = b;
			img.data[o + 3] = 255;
		}
		octx.putImageData(img, 0, 0);

		const {ctx, w, h} = fitCanvas(c);
		ctx.imageSmoothingEnabled = true;
		ctx.drawImage(off.current, 0, 0, w, h);
		const sx = w / WORLD_W;
		const sy = h / WORLD_H;
		// sources
		ctx.fillStyle = '#fff';
		ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
		ctx.textAlign = 'center';
		[s1, s2].forEach((s, i) => {
			ctx.beginPath();
			ctx.arc(s.x * sx, s.y * sy, 6, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillText(`S${i + 1}`, s.x * sx, s.y * sy - 10);
		});
		// point M
		if (point) {
			ctx.strokeStyle = '#fff';
			ctx.setLineDash([5, 4]);
			ctx.lineWidth = 1.5;
			ctx.beginPath();
			ctx.moveTo(s1.x * sx, s1.y * sy);
			ctx.lineTo(point.x * sx, point.y * sy);
			ctx.lineTo(s2.x * sx, s2.y * sy);
			ctx.stroke();
			ctx.setLineDash([]);
			ctx.fillStyle = cssVar('--accent');
			ctx.beginPath();
			ctx.arc(point.x * sx, point.y * sy, 7, 0, Math.PI * 2);
			ctx.fill();
			ctx.fillStyle = '#fff';
			ctx.fillText('M', point.x * sx + 14, point.y * sy + 4);
		}
	});

	const onPick = (e: React.PointerEvent<HTMLCanvasElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setPoint({
			x: ((e.clientX - rect.left) / rect.width) * WORLD_W,
			y: Math.max(SRC_Y + 0.3, ((e.clientY - rect.top) / rect.height) * WORLD_H),
		});
	};

	// analysis of M
	let info: React.ReactNode = null;
	if (point) {
		const d1 = Math.hypot(point.x - s1.x, point.y - s1.y);
		const d2 = Math.hypot(point.x - s2.x, point.y - s2.y);
		const n = (d2 - d1) / lambda;
		const nMax = n + (anti ? 0.5 : 0); // integer ⇒ maximum
		const nearest = Math.round(nMax);
		const off = Math.abs(nMax - nearest);
		const verdict =
			off < 0.08
				? `cực đại${anti ? '' : ` bậc k = ${nearest}`} (hai sóng tới M cùng pha, tăng cường nhau)`
				: Math.abs(off - 0.5) < 0.08
					? 'cực tiểu (hai sóng tới M ngược pha, triệt tiêu nhau → gần như đứng yên)'
					: 'trung gian giữa cực đại và cực tiểu';
		const f = (x: number) => x.toLocaleString('vi-VN', {maximumFractionDigits: 2});
		info = (
			<div className="readouts">
				<Rich text={`$d_1 = MS_1 = ${f(d1)}$ cm · $d_2 = MS_2 = ${f(d2)}$ cm`} />
				<Rich text={`$d_2 - d_1 = ${f(d2 - d1)}$ cm $= ${f(n)}\\,\\lambda$`} />
				<span>
					→ M là điểm <b>{verdict}</b>
				</span>
			</div>
		);
	}

	const ratio = sep / lambda;
	const countMax = anti
		? 2 * Math.ceil(ratio - 0.5 - 1e-9) // |k + ½| < S1S2/λ
		: 2 * Math.ceil(ratio - 1e-9) - 1; // |k| < S1S2/λ

	return (
		<div className="sim">
			<h3>Giao thoa sóng trên mặt nước</h3>
			<p className="muted">
				Hai nguồn S₁, S₂ dao động cùng tần số. <b>Chạm / nhấn vào mặt nước</b> để chọn điểm M và kiểm tra M là cực đại
				hay cực tiểu.
			</p>
			<canvas
				ref={canvas}
				className="sim-canvas tank"
				style={{aspectRatio: `${WORLD_W} / ${WORLD_H}`}}
				onPointerDown={onPick}
			/>
			<div className="legend">
				<label className="chip">
					<input type="checkbox" checked={lines} onChange={(e) => setLines(e.target.checked)} /> Hiện vân giao thoa
				</label>
				<span className="chip" style={{color: '#E0B000'}}>
					■ cực đại
				</span>
				<span className="chip" style={{color: '#E64650'}}>
					■ cực tiểu
				</span>
			</div>
			{info}
			<div className="controls">
				<Slider label="Bước sóng λ" unit="cm" min={0.8} max={3} step={0.1} value={lambda} onChange={setLambda} />
				<Slider label="Khoảng cách S₁S₂" unit="cm" min={2} max={10} step={0.5} value={sep} onChange={setSep} />
				<div className="control">
					<span>Độ lệch pha hai nguồn</span>
					<div className="seg">
						<button className={!anti ? 'on' : ''} onClick={() => setAnti(false)}>
							Cùng pha
						</button>
						<button className={anti ? 'on' : ''} onClick={() => setAnti(true)}>
							Ngược pha
						</button>
					</div>
				</div>
			</div>
			<div className="readouts">
				<Rich text={`Số cực đại trên đoạn $S_1S_2$: ${countMax} (vì $\\frac{S_1S_2}{\\lambda} = ${ratio.toLocaleString('vi-VN', {maximumFractionDigits: 2})}$)`} />
			</div>
			<p className="hint">
				💡 Thử: giảm λ → các vân sít lại gần nhau. Chọn M trên đường trung trực của S₁S₂ → d₂ − d₁ = 0 nên là cực
				đại (k = 0) khi hai nguồn cùng pha, nhưng là cực tiểu khi hai nguồn ngược pha.
			</p>
		</div>
	);
};
