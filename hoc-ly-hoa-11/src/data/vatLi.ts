import type {Subject} from '../types';

const r = String.raw;

export const vatLi: Subject = {
	id: 'vat-li',
	name: 'Vật lí 11',
	icon: '⚛️',
	accent: 'phys',
	upcoming: [
		'Chương II. Sóng — các bài còn lại (sóng ngang, sóng dọc, sóng điện từ, sóng dừng…)',
		'Chương III. Điện trường',
		'Chương IV. Dòng điện. Mạch điện',
	],
	chapters: [
		{
			id: 'giao-thoa-song',
			title: 'Chương II. Sóng — Bài 12. Giao thoa sóng',
			lessons: [
				r`Ôn lại (Bài 8. Mô tả sóng): bước sóng $\lambda$, tốc độ truyền sóng $v = \lambda f$`,
				'Bài 12. Giao thoa sóng: giao thoa sóng nước và giao thoa ánh sáng (thí nghiệm Young)',
			],
			sheet: [
				{
					title: 'Ôn lại: bước sóng',
					items: [
						{
							name: 'Bước sóng',
							tex: r`\lambda = vT = \frac{v}{f}`,
							note: 'λ: quãng đường sóng truyền được trong một chu kì; cũng là khoảng cách giữa hai điểm gần nhau nhất trên phương truyền sóng dao động cùng pha.',
						},
					],
				},
				{
					title: 'Hiện tượng và điều kiện giao thoa',
					items: [
						{
							name: 'Hiện tượng giao thoa',
							note: 'Hai sóng kết hợp gặp nhau tạo ra những vùng dao động mạnh (cực đại) xen kẽ những vùng dao động yếu hoặc đứng yên (cực tiểu).',
						},
						{
							name: 'Điều kiện: hai nguồn kết hợp',
							note: 'Hai nguồn dao động cùng phương, cùng tần số và có hiệu số pha không đổi theo thời gian.',
						},
					],
				},
				{
					title: 'Giao thoa sóng trên mặt nước (hai nguồn cùng pha $S_1$, $S_2$)',
					items: [
						{
							name: 'Điểm M dao động cực đại',
							tex: r`d_2 - d_1 = k\lambda \qquad (k = 0, \pm1, \pm2, \dots)`,
							note: r`$d_1 = MS_1$, $d_2 = MS_2$. Đường trung trực của $S_1S_2$ là cực đại ứng với $k = 0$.`,
						},
						{
							name: 'Điểm M dao động cực tiểu (đứng yên)',
							tex: r`d_2 - d_1 = \left(k + \tfrac{1}{2}\right)\lambda`,
						},
						{
							name: 'Trên đoạn thẳng nối hai nguồn',
							note: r`Khoảng cách giữa hai cực đại (hoặc hai cực tiểu) liên tiếp là $\frac{\lambda}{2}$. Giữa cực đại và cực tiểu liền kề là $\frac{\lambda}{4}$.`,
						},
						{
							name: 'Số cực đại trên đoạn $S_1S_2$',
							tex: r`-\frac{S_1S_2}{\lambda} < k < \frac{S_1S_2}{\lambda}`,
							note: 'Đếm số giá trị nguyên của k (không tính hai nguồn). Nếu hai nguồn ngược pha, vai trò cực đại và cực tiểu đổi cho nhau.',
						},
					],
				},
				{
					title: 'Giao thoa ánh sáng – thí nghiệm Young',
					items: [
						{
							name: 'Khoảng vân',
							tex: r`i = \frac{\lambda D}{a}`,
							note: 'a: khoảng cách hai khe, D: khoảng cách từ hai khe đến màn, λ: bước sóng ánh sáng. Khoảng vân là khoảng cách giữa hai vân sáng (hoặc hai vân tối) liên tiếp.',
						},
						{
							name: 'Vị trí vân sáng',
							tex: r`x_s = k\,i = k\frac{\lambda D}{a} \qquad (k = 0, \pm1, \pm2, \dots)`,
							note: 'k = 0: vân sáng trung tâm. |k| là bậc của vân sáng.',
						},
						{
							name: 'Vị trí vân tối',
							tex: r`x_t = \left(k + \tfrac{1}{2}\right) i`,
							note: r`Vân sáng và vân tối liền kề cách nhau $\frac{i}{2}$.`,
						},
						{
							name: 'Ánh sáng trắng',
							note: 'Vân trung tâm màu trắng, hai bên là các dải màu như cầu vồng (tím ở trong, đỏ ở ngoài) vì mỗi màu có khoảng vân khác nhau.',
						},
					],
				},
			],
			videos: [
				{
					title: 'Bài 12. Giao thoa sóng (bài giảng đầy đủ)',
					youtubeId: 'YYeuy8TeGTs',
					search: 'giao thoa sóng nước vật lí 11 kết nối tri thức',
					note: 'Thầy Nguyễn Chí Sơn · Xem thêm: OLM – Giao thoa sóng phần 1 (youtu.be/h4v2IOvJ7cc)',
				},
				{
					title: 'Tìm số điểm cực đại, cực tiểu – công thức cần nhớ',
					youtubeId: 'EMae6UtXquM',
					search: 'cực đại cực tiểu giao thoa sóng vật lí 11',
					note: 'Học cùng Ms.Tuyết',
				},
				{
					title: 'Thí nghiệm Young tự làm bằng lưỡi lam',
					youtubeId: 'jawcSR_FRl0',
					search: 'thí nghiệm Young giao thoa ánh sáng vật lí 11',
					note: 'Trực quan Vật Lý · Xem thêm: thí nghiệm khe Young của thầy Khiêm (youtu.be/5xZlMVJQdw0)',
				},
			],
			sims: ['interference', 'young'],
			quiz: [
				{
					q: 'Điều kiện để hai sóng giao thoa được với nhau là hai sóng xuất phát từ hai nguồn',
					options: [
						'cùng phương, cùng tần số và có hiệu số pha không đổi theo thời gian',
						'cùng biên độ nhưng khác tần số',
						'có cùng biên độ',
						'đặt cách nhau đúng một bước sóng',
					],
					answer: 0,
					explain: 'Đó là định nghĩa hai nguồn kết hợp. Biên độ không cần bằng nhau.',
				},
				{
					q: r`Hai nguồn sóng kết hợp cùng pha $S_1$, $S_2$. Điểm M cách hai nguồn $d_1$, $d_2$ dao động với biên độ cực đại khi`,
					options: [r`$d_2 - d_1 = k\lambda$`, r`$d_2 - d_1 = (k + \frac{1}{2})\lambda$`, r`$d_2 + d_1 = k\lambda$`, r`$d_2 - d_1 = \frac{k\lambda}{4}$`],
					answer: 0,
					explain: 'Hai sóng tới M cùng pha (tăng cường nhau) khi hiệu đường đi bằng một số nguyên lần bước sóng.',
				},
				{
					q: 'Trong giao thoa sóng nước với hai nguồn cùng pha, khoảng cách giữa hai cực đại liên tiếp trên đoạn thẳng nối hai nguồn là',
					options: [r`$\frac{\lambda}{2}$`, r`$\lambda$`, r`$\frac{\lambda}{4}$`, r`$2\lambda$`],
					answer: 0,
					explain: r`Trên $S_1S_2$, đi thêm một đoạn $x$ thì hiệu đường đi thay đổi $2x$. Để hiệu đường đi tăng thêm $\lambda$ cần $x = \frac{\lambda}{2}$.`,
				},
				{
					q: 'Hai nguồn cùng pha có tần số 20 Hz, tốc độ truyền sóng 40 cm/s. Điểm M cách hai nguồn lần lượt 10 cm và 14 cm sẽ',
					options: ['dao động cực đại (k = 2)', 'đứng yên (cực tiểu)', 'dao động cực đại (k = 4)', 'dao động cực đại (k = 1)'],
					answer: 0,
					explain: r`$\lambda = \frac{v}{f} = \frac{40}{20} = 2$ cm. $d_2 - d_1 = 4$ cm $= 2\lambda$ → cực đại bậc $k = 2$.`,
				},
				{
					q: r`Hai nguồn cùng pha cách nhau $S_1S_2 = 10$ cm, bước sóng $\lambda = 3$ cm. Số điểm dao động cực đại trên đoạn $S_1S_2$ là`,
					options: ['7', '6', '3', '10'],
					answer: 0,
					explain: r`$-\frac{10}{3} < k < \frac{10}{3} \Rightarrow -3{,}33 < k < 3{,}33 \Rightarrow k = -3, \dots, 3$: có 7 giá trị.`,
				},
				{
					q: r`Trong thí nghiệm Young, $a = 1$ mm, $D = 2$ m, $\lambda = 0{,}5\ \mu$m. Khoảng vân là`,
					options: ['1 mm', '0,5 mm', '2 mm', '0,25 mm'],
					answer: 0,
					explain: r`$i = \frac{\lambda D}{a} = \frac{0{,}5\cdot10^{-6}\cdot 2}{10^{-3}} = 10^{-3}$ m $= 1$ mm.`,
				},
				{
					q: 'Trong thí nghiệm Young, khoảng vân i = 1,2 mm. Vân sáng bậc 3 cách vân trung tâm',
					options: ['3,6 mm', '1,2 mm', '4,2 mm', '2,4 mm'],
					answer: 0,
					explain: r`$x_s = 3i = 3 \cdot 1{,}2 = 3{,}6$ mm.`,
				},
				{
					q: 'Trong thí nghiệm Young, nếu tăng khoảng cách từ hai khe đến màn lên gấp đôi (giữ nguyên λ và a) thì khoảng vân',
					options: ['tăng gấp đôi', 'giảm một nửa', 'không đổi', 'tăng 4 lần'],
					answer: 0,
					explain: r`$i = \frac{\lambda D}{a}$ tỉ lệ thuận với $D$. Hãy thử kéo thanh trượt D trong phần Mô phỏng.`,
				},
				{
					q: 'Trong thí nghiệm Young, thay ánh sáng đỏ bằng ánh sáng tím (giữ nguyên a, D) thì khoảng vân',
					options: ['giảm', 'tăng', 'không đổi', 'bằng 0'],
					answer: 0,
					explain: r`Ánh sáng tím có bước sóng nhỏ hơn ánh sáng đỏ, mà $i \sim \lambda$ nên khoảng vân giảm.`,
				},
				{
					q: 'Khoảng cách giữa một vân sáng và vân tối liền kề trong thí nghiệm Young bằng',
					options: [r`$\frac{i}{2}$`, '$i$', r`$\frac{i}{4}$`, '$2i$'],
					answer: 0,
					explain: r`Vân sáng tại $x = ki$, vân tối tại $x = (k + \frac{1}{2})i$, nên chúng cách nhau $\frac{i}{2}$.`,
				},
			],
		},
		{
			id: 'dao-dong',
			title: 'Chương I. Dao động',
			lessons: [
				'Bài 1. Dao động điều hoà',
				'Bài 2. Mô tả dao động điều hoà',
				'Bài 3. Vận tốc, gia tốc trong dao động điều hoà',
				'Bài 4. Bài tập về dao động điều hoà',
				'Bài 5. Động năng. Thế năng. Sự chuyển hoá năng lượng trong dao động điều hoà',
				'Bài 6. Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng',
				'Bài 7. Bài tập về sự chuyển hoá năng lượng trong dao động điều hoà',
			],
			sheet: [
				{
					title: 'Phương trình dao động điều hoà',
					items: [
						{
							name: 'Li độ',
							tex: r`x = A\cos(\omega t + \varphi)`,
							note: r`$A$: biên độ (luôn dương) · $\omega$: tần số góc (rad/s) · $\varphi$: pha ban đầu (rad) · $(\omega t+\varphi)$: pha dao động.`,
						},
						{
							name: 'Chu kì, tần số',
							tex: r`T = \frac{2\pi}{\omega} = \frac{1}{f} \qquad f = \frac{\omega}{2\pi}`,
							note: 'T: thời gian thực hiện một dao động toàn phần (s). f: số dao động trong 1 giây (Hz).',
						},
					],
				},
				{
					title: 'Vận tốc và gia tốc',
					items: [
						{
							name: 'Vận tốc',
							tex: r`v = -\omega A\sin(\omega t+\varphi) = \omega A\cos\!\left(\omega t+\varphi+\tfrac{\pi}{2}\right)`,
							note: r`$v$ sớm pha $\frac{\pi}{2}$ so với $x$. $|v|_{max} = \omega A$ tại vị trí cân bằng; $v = 0$ tại hai biên.`,
						},
						{
							name: 'Gia tốc',
							tex: r`a = -\omega^2 x`,
							note: r`$a$ ngược pha với $x$, luôn hướng về vị trí cân bằng. $|a|_{max} = \omega^2 A$ tại biên; $a = 0$ tại vị trí cân bằng.`,
						},
						{
							name: 'Hệ thức độc lập với thời gian',
							tex: r`A^2 = x^2 + \frac{v^2}{\omega^2}`,
							note: r`Dùng khi biết $x$ và $v$ mà không biết $t$. Suy ra $|v| = \omega\sqrt{A^2 - x^2}$.`,
						},
					],
				},
				{
					title: 'Con lắc lò xo và con lắc đơn',
					items: [
						{
							name: 'Con lắc lò xo',
							tex: r`\omega = \sqrt{\frac{k}{m}} \qquad T = 2\pi\sqrt{\frac{m}{k}}`,
							note: 'k: độ cứng lò xo (N/m), m: khối lượng vật (kg). Chu kì không phụ thuộc biên độ.',
						},
						{
							name: 'Con lắc đơn (góc lệch nhỏ)',
							tex: r`\omega = \sqrt{\frac{g}{l}} \qquad T = 2\pi\sqrt{\frac{l}{g}}`,
							note: 'l: chiều dài dây (m), g: gia tốc trọng trường. Chu kì không phụ thuộc khối lượng vật.',
						},
					],
				},
				{
					title: 'Năng lượng',
					items: [
						{name: 'Động năng', tex: r`W_đ = \tfrac{1}{2}mv^2`},
						{
							name: 'Thế năng',
							tex: r`W_t = \tfrac{1}{2}m\omega^2x^2 \quad(\text{lò xo: } W_t = \tfrac{1}{2}kx^2)`,
						},
						{
							name: 'Cơ năng (được bảo toàn)',
							tex: r`W = W_đ + W_t = \tfrac{1}{2}m\omega^2A^2 = \text{hằng số}`,
							note: r`$W_đ$ và $W_t$ biến thiên tuần hoàn với chu kì $\frac{T}{2}$ (tần số $2f$). Mẹo: $W_đ = W_t$ khi $x = \pm\frac{A}{\sqrt{2}}$.`,
						},
					],
				},
				{
					title: 'Dao động tắt dần – cưỡng bức – cộng hưởng',
					items: [
						{name: 'Dao động tắt dần', note: 'Biên độ (và cơ năng) giảm dần theo thời gian do lực cản của môi trường.'},
						{
							name: 'Dao động cưỡng bức',
							note: 'Dao động dưới tác dụng của ngoại lực tuần hoàn; tần số dao động bằng tần số của ngoại lực.',
						},
						{
							name: 'Cộng hưởng',
							tex: r`f_{\text{ngoại lực}} = f_0 \;\Rightarrow\; A_{max}`,
							note: 'Biên độ dao động cưỡng bức đạt cực đại khi tần số ngoại lực bằng tần số riêng của hệ.',
						},
					],
				},
			],
			videos: [
				{
					title: 'Bài 1. Dao động điều hoà',
					youtubeId: 'CDzQ0FLaOcI',
					search: 'dao động điều hoà vật lí 11 kết nối tri thức',
					note: 'Thầy Phạm Minh Khoa · Xem thêm: Thầy Nguyễn Chí Sơn (youtu.be/BwEL6Ot0sD8)',
				},
				{
					title: 'Bài 3. Vận tốc, gia tốc trong dao động điều hoà',
					youtubeId: 'CAoIWpvjEVg',
					search: 'vận tốc gia tốc dao động điều hoà vật lí 11',
					note: 'Thầy Phạm Minh Khoa · Xem thêm: Thầy Nguyễn Chí Sơn (youtu.be/ASMa_HbUiVA)',
				},
				{
					title: 'Bài 5. Động năng. Thế năng. Sự chuyển hoá năng lượng',
					youtubeId: 'jn6E0vTgLZw',
					search: 'động năng thế năng dao động điều hoà vật lí 11',
					note: 'Thầy Phạm Minh Khoa · Xem thêm: Thầy Nguyễn Chí Sơn (youtu.be/-EDsWcDtzyc)',
				},
				{
					title: 'Bài 6. Dao động tắt dần. Dao động cưỡng bức. Cộng hưởng',
					youtubeId: 'prWyHxr-bGA',
					search: 'dao động tắt dần cưỡng bức cộng hưởng vật lí 11',
					note: 'Thầy Phạm Minh Khoa',
				},
			],
			sims: ['spring'],
			quiz: [
				{
					q: r`Một vật dao động theo phương trình $x = 5\cos(4\pi t + \frac{\pi}{3})$ (cm). Biên độ và tần số của dao động là`,
					options: ['5 cm; 2 Hz', '5 cm; 4 Hz', '10 cm; 2 Hz', r`5 cm; $4\pi$ Hz`],
					answer: 0,
					explain: r`$A = 5$ cm, $\omega = 4\pi$ rad/s $\Rightarrow f = \frac{\omega}{2\pi} = 2$ Hz. Chú ý: $4\pi$ là tần số góc, không phải tần số.`,
				},
				{
					q: 'Con lắc lò xo có vật m = 100 g, lò xo k = 40 N/m. Chu kì dao động là',
					options: [r`$\frac{\pi}{10}$ s $\approx 0{,}31$ s`, r`$\frac{\pi}{5}$ s`, r`$10\pi$ s`, r`$2\pi$ s`],
					answer: 0,
					explain: r`Đổi $m = 0{,}1$ kg. $T = 2\pi\sqrt{\frac{0{,}1}{40}} = 2\pi \cdot 0{,}05 = \frac{\pi}{10} \approx 0{,}31$ s.`,
				},
				{
					q: 'Trong dao động điều hoà, gia tốc của vật',
					options: [
						'ngược pha với li độ',
						'cùng pha với li độ',
						r`sớm pha $\frac{\pi}{2}$ so với li độ`,
						'luôn bằng 0 tại vị trí biên',
					],
					answer: 0,
					explain: r`$a = -\omega^2 x$ nên $a$ luôn ngược dấu với $x$, tức ngược pha. Tại biên $|a|$ lớn nhất, tại VTCB $a = 0$.`,
				},
				{
					q: 'Một vật dao động điều hoà với A = 4 cm, ω = 10 rad/s. Tốc độ cực đại của vật là',
					options: ['40 cm/s', '4 cm/s', '400 cm/s', '0,4 cm/s'],
					answer: 0,
					explain: r`$v_{max} = \omega A = 10 \cdot 4 = 40$ cm/s.`,
				},
				{
					q: 'Một vật dao động điều hoà với A = 10 cm, ω = 2π rad/s. Khi vật ở li độ x = 6 cm thì tốc độ của vật là',
					options: [r`$16\pi$ cm/s`, r`$12\pi$ cm/s`, r`$20\pi$ cm/s`, r`$8\pi$ cm/s`],
					answer: 0,
					explain: r`$|v| = \omega\sqrt{A^2 - x^2} = 2\pi\sqrt{100 - 36} = 2\pi \cdot 8 = 16\pi \approx 50{,}3$ cm/s.`,
				},
				{
					q: 'Động năng bằng thế năng khi vật ở li độ',
					options: [r`$x = \pm\frac{A}{\sqrt{2}}$`, r`$x = \pm\frac{A}{2}$`, r`$x = \pm A$`, '$x = 0$'],
					answer: 0,
					explain: r`$W_đ = W_t \Rightarrow W_t = \frac{W}{2} \Rightarrow \frac{1}{2}kx^2 = \frac{1}{2}\cdot\frac{1}{2}kA^2 \Rightarrow x = \pm\frac{A}{\sqrt{2}}$.`,
				},
				{
					q: 'Một vật dao động điều hoà với chu kì T. Động năng của vật biến thiên tuần hoàn với chu kì',
					options: [r`$\frac{T}{2}$`, '$T$', '$2T$', r`$\frac{T}{4}$`],
					answer: 0,
					explain: r`Trong một chu kì, vật qua VTCB 2 lần (động năng cực đại 2 lần), nên động năng biến thiên với chu kì $\frac{T}{2}$.`,
				},
				{
					q: 'Nếu tăng chiều dài con lắc đơn lên 4 lần thì chu kì dao động',
					options: ['tăng 2 lần', 'tăng 4 lần', 'giảm 2 lần', 'không đổi'],
					answer: 0,
					explain: r`$T = 2\pi\sqrt{\frac{l}{g}} \sim \sqrt{l}$. Chiều dài tăng 4 lần $\Rightarrow T$ tăng $\sqrt{4} = 2$ lần.`,
				},
				{
					q: 'Hiện tượng cộng hưởng xảy ra khi',
					options: [
						'tần số của ngoại lực bằng tần số riêng của hệ',
						'biên độ ngoại lực lớn nhất',
						'lực cản môi trường bằng 0',
						'tần số ngoại lực gấp đôi tần số riêng',
					],
					answer: 0,
					explain: 'Cộng hưởng: biên độ dao động cưỡng bức đạt cực đại khi tần số ngoại lực bằng tần số riêng $f_0$ của hệ.',
				},
				{
					q: 'Dao động tắt dần là dao động có',
					options: [
						'biên độ giảm dần theo thời gian',
						'chu kì tăng dần theo thời gian',
						'tần số bằng tần số ngoại lực',
						'cơ năng không đổi',
					],
					answer: 0,
					explain: 'Do lực cản, cơ năng chuyển dần thành nhiệt nên biên độ giảm dần theo thời gian.',
				},
			],
		},
	],
};
