import React, {useRef, useState} from 'react';
import {fitCanvas, useAnimationFrame} from '../components/canvas';
import {Rich} from '../components/Math';
import {Slider} from './SpringSim';

const HALF = 8; // screen shows −8 mm … +8 mm

/** Approximate visible color for a wavelength in nm (380–780). Returns [r,g,b] 0..1. */
function wavelengthRGB(nm: number): [number, number, number] {
	let r = 0,
		g = 0,
		b = 0;
	if (nm < 440) [r, g, b] = [-(nm - 440) / 60, 0, 1];
	else if (nm < 490) [r, g, b] = [0, (nm - 440) / 50, 1];
	else if (nm < 510) [r, g, b] = [0, 1, -(nm - 510) / 20];
	else if (nm < 580) [r, g, b] = [(nm - 510) / 70, 1, 0];
	else if (nm < 645) [r, g, b] = [1, -(nm - 645) / 65, 0];
	else [r, g, b] = [1, 0, 0];
	const fade = nm < 420 ? 0.3 + (0.7 * (nm - 380)) / 40 : nm > 700 ? 0.3 + (0.7 * (780 - nm)) / 80 : 1;
	return [r * fade, g * fade, b * fade];
}

// Ideal double slit: intensity ∝ cos²(π·a·x / (λ·D)), bright fringes at x = k·λD/a.
export const YoungSim: React.FC = () => {
	const [nm, setNm] = useState(600);
	const [a, setA] = useState(1); // mm
	const [D, setD] = useState(1.5); // m
	const [white, setWhite] = useState(false);
	const canvas = useRef<HTMLCanvasElement>(null);

	const i = (nm * 1e-6 * D * 1000) / a; // mm: λ[mm]·D[mm]/a[mm]

	useAnimationFrame(() => {
		const c = canvas.current;
		if (!c) return;
		const {ctx, w, h} = fitCanvas(c);
		const stripH = h - 46;
		const lambdas = white ? Array.from({length: 16}, (_, k) => 400 + k * 20) : [nm];
		const cols = lambdas.map(wavelengthRGB);
		const norm = white ? cols.reduce((s, c) => [s[0] + c[0], s[1] + c[1], s[2] + c[2]], [0, 0, 0]) : [1, 1, 1];
		for (let px = 0; px < w; px++) {
			const x = (px / w - 0.5) * 2 * HALF; // mm
			let R = 0,
				G = 0,
				B = 0;
			lambdas.forEach((L, k) => {
				const ii = (L * 1e-6 * D * 1000) / a;
				const I = Math.cos((Math.PI * x) / ii) ** 2;
				R += cols[k][0] * I;
				G += cols[k][1] * I;
				B += cols[k][2] * I;
			});
			ctx.fillStyle = `rgb(${(255 * R) / norm[0]}, ${(255 * G) / norm[1]}, ${(255 * B) / norm[2]})`;
			ctx.fillRect(px, 0, 1.5, stripH);
		}
		// ruler
		// canvas background is always black, so use fixed light colors
		const muted = '#b8bccb';
		const text = '#ffffff';
		ctx.strokeStyle = muted;
		ctx.fillStyle = muted;
		ctx.font = '11px "Be Vietnam Pro", sans-serif';
		ctx.textAlign = 'center';
		for (let mm = -HALF + 1; mm <= HALF - 1; mm++) {
			const px = ((mm + HALF) / (2 * HALF)) * w;
			ctx.beginPath();
			ctx.moveTo(px, stripH);
			ctx.lineTo(px, stripH + (mm % 2 === 0 ? 8 : 4));
			ctx.stroke();
			if (mm % 2 === 0) ctx.fillText(`${mm}`, px, stripH + 20);
		}
		ctx.fillText('x (mm)', w - 24, stripH + 36);
		// mark one fringe spacing i from the centre
		if (!white && i < HALF) {
			const x0 = w / 2;
			const x1 = ((i + HALF) / (2 * HALF)) * w;
			ctx.strokeStyle = text;
			ctx.fillStyle = text;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(x0, stripH + 32);
			ctx.lineTo(x1, stripH + 32);
			ctx.stroke();
			ctx.fillText('i', (x0 + x1) / 2, stripH + 44);
		}
	});

	const fmt = (n: number, d = 3) => n.toLocaleString('vi-VN', {maximumFractionDigits: d});
	const [r, g, b] = wavelengthRGB(nm);

	return (
		<div className="sim">
			<h3>Thí nghiệm Young về giao thoa ánh sáng</h3>
			<p className="muted">
				Ánh sáng qua hai khe hẹp cách nhau a, tạo các vân sáng – tối xen kẽ trên màn đặt cách hai khe một khoảng D.
			</p>
			<canvas ref={canvas} className="sim-canvas" style={{height: 150, background: '#000'}} />
			<div className="readouts">
				<Rich
					text={`$i = \\dfrac{\\lambda D}{a} = \\dfrac{${fmt(nm / 1000)}\\cdot10^{-6} \\cdot ${fmt(D)}}{${fmt(a)}\\cdot10^{-3}} = ${fmt(i)}$ mm`}
				/>
				<Rich text={`Vân sáng bậc 2 tại $x = 2i = ${fmt(2 * i)}$ mm · vân tối thứ nhất tại $x = 0{,}5i = ${fmt(i / 2)}$ mm`} />
			</div>
			<div className="controls">
				<Slider
					label="Bước sóng λ"
					unit="nm"
					min={380}
					max={760}
					step={10}
					value={nm}
					onChange={setNm}
					display={`${nm} (${fmt(nm / 1000)} μm)`}
				/>
				<Slider label="Khoảng cách hai khe a" unit="mm" min={0.5} max={2} step={0.1} value={a} onChange={setA} />
				<Slider label="Khoảng cách khe – màn D" unit="m" min={0.5} max={2.5} step={0.1} value={D} onChange={setD} />
				<div className="control">
					<span>Nguồn sáng</span>
					<div className="seg">
						<button className={!white ? 'on' : ''} onClick={() => setWhite(false)}>
							<span className="swatch" style={{background: `rgb(${r * 255},${g * 255},${b * 255})`}} /> Đơn sắc
						</button>
						<button className={white ? 'on' : ''} onClick={() => setWhite(true)}>
							Ánh sáng trắng
						</button>
					</div>
				</div>
			</div>
			<p className="hint">
				💡 Thử: tăng D hoặc λ → khoảng vân rộng ra; tăng a → khoảng vân hẹp lại. Chọn ánh sáng trắng: vân trung
				tâm màu trắng, hai bên viền màu, tím ở trong, đỏ ở ngoài.
			</p>
		</div>
	);
};
