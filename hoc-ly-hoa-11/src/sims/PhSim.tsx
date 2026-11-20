import React, {useState} from 'react';
import {Rich} from '../components/Math';
import {Slider} from './SpringSim';

// Strong acid (HCl) or strong base (NaOH), fully dissociated, 25 °C.
// Concentration range 10⁻¹…10⁻⁵ M so water's own ions can be ignored.
export const PhSim: React.FC = () => {
	const [kind, setKind] = useState<'HCl' | 'NaOH'>('HCl');
	const [exp, setExp] = useState(-2); // C = 10^exp M

	const C = 10 ** exp;
	const pH = kind === 'HCl' ? -exp : 14 + exp;
	const H = 10 ** -pH;
	const OH = 10 ** (pH - 14);

	const litmus = pH < 6.5 ? {c: '#D93A3A', t: 'đỏ'} : pH > 7.5 ? {c: '#2F6FD6', t: 'xanh'} : {c: '#7B4FA0', t: 'tím'};
	const phenol = pH >= 8.3 ? {c: '#E85AA6', t: 'hồng'} : {c: 'transparent', t: 'không màu'};
	const env = pH < 7 ? 'acid' : pH > 7 ? 'base' : 'trung tính';

	const sci = (n: number) => {
		const e = Math.round(Math.log10(n));
		return `10^{${e}}`;
	};

	return (
		<div className="sim">
			<h3>pH của dung dịch acid mạnh / base mạnh</h3>
			<p className="muted">Chọn chất, thay đổi nồng độ hoặc pha loãng, rồi quan sát pH và màu chất chỉ thị.</p>
			<div className="controls">
				<div className="control">
					<span>Chất tan</span>
					<div className="seg">
						<button className={kind === 'HCl' ? 'on' : ''} onClick={() => setKind('HCl')}>
							HCl (acid mạnh)
						</button>
						<button className={kind === 'NaOH' ? 'on' : ''} onClick={() => setKind('NaOH')}>
							NaOH (base mạnh)
						</button>
					</div>
				</div>
				<Slider
					label="Nồng độ"
					unit="M"
					min={-5}
					max={-1}
					step={1}
					value={exp}
					onChange={setExp}
					display={C.toLocaleString('vi-VN', {maximumFractionDigits: 5})}
				/>
				<div className="control">
					<span>Pha loãng</span>
					<div className="seg">
						<button disabled={exp <= -5} onClick={() => setExp(exp - 1)}>
							Pha loãng 10 lần
						</button>
					</div>
				</div>
			</div>

			<div className="ph-scale">
				<div className="ph-bar" />
				<div className="ph-marker" style={{left: `${(pH / 14) * 100}%`}}>
					▼<b>pH {pH}</b>
				</div>
				<div className="ph-ticks">
					{Array.from({length: 15}, (_, i) => (
						<span key={i}>{i}</span>
					))}
				</div>
			</div>

			<div className="readouts">
				<Rich text={`$[\\ce{H+}] = ${sci(H)}$ M`} />
				<Rich text={`$[\\ce{OH-}] = ${sci(OH)}$ M`} />
				<Rich
					text={
						kind === 'HCl'
							? `$\\mathrm{pH} = -\\lg ${sci(C)} = ${pH}$`
							: `$\\mathrm{pOH} = ${-exp} \\Rightarrow \\mathrm{pH} = 14 - ${-exp} = ${pH}$`
					}
				/>
				<span>
					Môi trường: <b>{env}</b>
				</span>
			</div>

			<div className="tubes">
				<div className="tube">
					<div className="liquid" style={{background: litmus.c}} />
					<span>Quỳ tím: {litmus.t}</span>
				</div>
				<div className="tube">
					<div className="liquid" style={{background: phenol.c}} />
					<span>Phenolphthalein: {phenol.t}</span>
				</div>
			</div>
			<p className="hint">
				💡 Pha loãng acid 10 lần → pH tăng 1 đơn vị; pha loãng base 10 lần → pH giảm 1 đơn vị. pH luôn tiến dần về 7
				khi pha loãng, nhưng không vượt qua 7.
			</p>
		</div>
	);
};
