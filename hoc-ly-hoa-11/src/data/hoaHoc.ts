import type {Subject} from '../types';

const r = String.raw;

export const hoaHoc: Subject = {
	id: 'hoa-hoc',
	name: 'Hoá học 11',
	icon: '🧪',
	accent: 'chem',
	upcoming: [
		'Chương 2. Nitrogen và sulfur',
		'Chương 3. Đại cương về hoá học hữu cơ',
		'Chương 4. Hydrocarbon',
		'Chương 5. Dẫn xuất halogen – Alcohol – Phenol',
		'Chương 6. Hợp chất carbonyl – Carboxylic acid',
	],
	chapters: [
		{
			id: 'can-bang-hoa-hoc',
			title: 'Chương 1. Cân bằng hoá học',
			lessons: [
				'Bài 1. Khái niệm về cân bằng hoá học',
				'Bài 2. Cân bằng trong dung dịch nước',
				'Bài 3. Ôn tập chương 1',
			],
			sheet: [
				{
					title: 'Phản ứng thuận nghịch và cân bằng hoá học',
					items: [
						{
							name: 'Phản ứng thuận nghịch',
							tex: r`\ce{aA + bB <=> cC + dD}`,
							note: 'Xảy ra theo hai chiều ngược nhau trong cùng điều kiện. Chiều từ trái sang phải là chiều thuận.',
						},
						{
							name: 'Trạng thái cân bằng',
							tex: r`v_{\text{thuận}} = v_{\text{nghịch}}`,
							note: 'Là cân bằng động: phản ứng vẫn xảy ra theo cả hai chiều nhưng nồng độ các chất không đổi.',
						},
					],
				},
				{
					title: 'Hằng số cân bằng $K_C$',
					items: [
						{
							name: 'Biểu thức',
							tex: r`K_C = \frac{[C]^c\,[D]^d}{[A]^a\,[B]^b}`,
							note: r`[ ]: nồng độ mol/L lúc cân bằng. Chất rắn không có mặt trong biểu thức. $K_C$ chỉ phụ thuộc nhiệt độ.`,
						},
						{
							name: 'Ý nghĩa',
							note: r`$K_C$ càng lớn, phản ứng thuận càng chiếm ưu thế (lượng sản phẩm lúc cân bằng càng nhiều).`,
						},
					],
				},
				{
					title: 'Nguyên lí chuyển dịch cân bằng Le Chatelier',
					items: [
						{
							name: 'Phát biểu',
							note: 'Khi một hệ đang ở trạng thái cân bằng chịu một tác động bên ngoài, cân bằng chuyển dịch theo chiều làm giảm tác động đó.',
						},
						{name: 'Nồng độ', note: 'Tăng nồng độ một chất → cân bằng chuyển dịch theo chiều làm giảm nồng độ chất đó (và ngược lại).'},
						{
							name: 'Áp suất (chất khí)',
							note: 'Tăng áp suất → chuyển dịch theo chiều làm giảm số mol khí. Nếu số mol khí hai vế bằng nhau, áp suất không làm chuyển dịch cân bằng.',
						},
						{
							name: 'Nhiệt độ',
							note: r`Tăng nhiệt độ → chuyển dịch theo chiều thu nhiệt ($\Delta_rH > 0$). Giảm nhiệt độ → chiều toả nhiệt ($\Delta_rH < 0$).`,
						},
						{name: 'Chất xúc tác', note: 'Không làm chuyển dịch cân bằng, chỉ giúp hệ đạt cân bằng nhanh hơn.'},
					],
				},
				{
					title: 'Sự điện li – Thuyết Brønsted–Lowry',
					items: [
						{
							name: 'Chất điện li',
							tex: r`\ce{HCl -> H+ + Cl-} \qquad \ce{CH3COOH <=> CH3COO- + H+}`,
							note: 'Chất điện li mạnh (acid mạnh, base mạnh, hầu hết muối tan) dùng mũi tên một chiều; chất điện li yếu dùng mũi tên hai chiều.',
						},
						{
							name: 'Thuyết Brønsted–Lowry',
							tex: r`\ce{NH3 + H2O <=> NH4+ + OH-}`,
							note: r`Acid là chất cho $\ce{H+}$, base là chất nhận $\ce{H+}$. Trong ví dụ trên, $\ce{H2O}$ là acid, $\ce{NH3}$ là base.`,
						},
					],
				},
				{
					title: 'pH và chất chỉ thị',
					items: [
						{
							name: 'Công thức pH',
							tex: r`\mathrm{pH} = -\lg[\ce{H+}] \qquad [\ce{H+}] = 10^{-\mathrm{pH}}`,
						},
						{
							name: 'Tích số ion của nước (25 °C)',
							tex: r`[\ce{H+}][\ce{OH-}] = 10^{-14} \qquad \mathrm{pH} + \mathrm{pOH} = 14`,
							note: 'pH < 7: môi trường acid · pH = 7: trung tính · pH > 7: môi trường base.',
						},
						{
							name: 'Chất chỉ thị',
							note: 'Quỳ tím: hoá đỏ trong acid, hoá xanh trong base. Phenolphthalein: không màu trong acid và trung tính, hồng trong base (pH ≳ 8,3).',
						},
						{
							name: 'Chuẩn độ acid mạnh – base mạnh',
							tex: r`C_{\text{acid}}\,V_{\text{acid}} = C_{\text{base}}\,V_{\text{base}}`,
							note: r`Áp dụng cho acid và base có tỉ lệ 1:1 (ví dụ $\ce{HCl + NaOH}$), dùng phenolphthalein để nhận biết điểm tương đương.`,
						},
						{
							name: 'Sự thuỷ phân của ion',
							note: r`Ion $\ce{Al^3+}$, $\ce{Fe^3+}$ thuỷ phân tạo môi trường acid; ion $\ce{CO3^2-}$, $\ce{CH3COO-}$ thuỷ phân tạo môi trường base.`,
						},
					],
				},
			],
			videos: [
				{
					title: 'Bài 1. Khái niệm về cân bằng hoá học',
					youtubeId: 'NT_FGqx22oE',
					search: 'cân bằng hoá học hằng số cân bằng hoá 11 kết nối tri thức',
					note: 'Thầy Lâm 1E',
				},
				{
					title: 'Tổng quan: hằng số cân bằng và chuyển dịch cân bằng (Le Chatelier)',
					youtubeId: 'uoPLwOox_XU',
					search: 'nguyên lí Le Chatelier NO2 N2O4 hoá 11',
					note: 'Thầy Lâm Mạnh Cường',
				},
				{
					title: 'Bài 2. Cân bằng trong dung dịch nước (điện li, pH, chuẩn độ)',
					youtubeId: '9hINBAx1UMY',
					search: 'pH chất chỉ thị chuẩn độ acid base hoá 11 kết nối tri thức',
					note: 'Thầy Nguyễn Chí Sơn · Xem thêm: thí nghiệm chuẩn độ NaOH bằng HCl (youtu.be/5oWusTftpEY), Thầy Lâm 1E (youtu.be/gasF4UrUYhU)',
				},
			],
			sims: ['equilibrium', 'ph'],
			quiz: [
				{
					q: 'Trạng thái cân bằng hoá học là trạng thái mà',
					options: [
						'tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch',
						'phản ứng dừng lại hoàn toàn',
						'nồng độ chất phản ứng bằng nồng độ sản phẩm',
						'chỉ còn phản ứng thuận xảy ra',
					],
					answer: 0,
					explain: 'Cân bằng là cân bằng động: hai chiều vẫn xảy ra với tốc độ bằng nhau, nên nồng độ các chất không đổi (nhưng không nhất thiết bằng nhau).',
				},
				{
					q: r`Biểu thức hằng số cân bằng của phản ứng $\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$ là`,
					options: [
						r`$K_C = \frac{[\ce{NH3}]^2}{[\ce{N2}][\ce{H2}]^3}$`,
						r`$K_C = \frac{2[\ce{NH3}]}{[\ce{N2}] \cdot 3[\ce{H2}]}$`,
						r`$K_C = \frac{[\ce{N2}][\ce{H2}]^3}{[\ce{NH3}]^2}$`,
						r`$K_C = \frac{[\ce{NH3}]}{[\ce{N2}][\ce{H2}]}$`,
					],
					answer: 0,
					explain: 'Sản phẩm ở tử, chất phản ứng ở mẫu; hệ số tỉ lượng trở thành số mũ.',
				},
				{
					q: r`Biểu thức $K_C$ của phản ứng $\ce{C(s) + CO2(g) <=> 2CO(g)}$ là`,
					options: [
						r`$K_C = \frac{[\ce{CO}]^2}{[\ce{CO2}]}$`,
						r`$K_C = \frac{[\ce{CO}]^2}{[\ce{C}][\ce{CO2}]}$`,
						r`$K_C = \frac{2[\ce{CO}]}{[\ce{CO2}]}$`,
						r`$K_C = \frac{[\ce{CO2}]}{[\ce{CO}]^2}$`,
					],
					answer: 0,
					explain: r`Chất rắn ($\ce{C}$) không có mặt trong biểu thức hằng số cân bằng.`,
				},
				{
					q: r`Cho cân bằng $\ce{2NO2(g)}$ (nâu đỏ) $\ce{<=> N2O4(g)}$ (không màu), $\Delta_rH < 0$. Ngâm bình vào nước đá thì màu của hỗn hợp khí`,
					options: ['nhạt dần', 'đậm dần', 'không thay đổi', 'chuyển sang xanh'],
					answer: 0,
					explain: r`Giảm nhiệt độ → cân bằng chuyển dịch theo chiều toả nhiệt (chiều thuận, vì $\Delta_rH < 0$) → $\ce{NO2}$ giảm → màu nhạt dần. Thử lại trong phần Mô phỏng!`,
				},
				{
					q: 'Yếu tố nào sau đây KHÔNG làm chuyển dịch cân bằng hoá học?',
					options: ['Chất xúc tác', 'Nhiệt độ', 'Nồng độ', 'Áp suất (với phản ứng có số mol khí hai vế khác nhau)'],
					answer: 0,
					explain: 'Chất xúc tác làm tăng tốc độ cả hai chiều như nhau, chỉ giúp đạt cân bằng nhanh hơn.',
				},
				{
					q: r`Với cân bằng $\ce{H2(g) + I2(g) <=> 2HI(g)}$, khi tăng áp suất của hệ thì cân bằng`,
					options: ['không chuyển dịch', 'chuyển dịch theo chiều thuận', 'chuyển dịch theo chiều nghịch', 'bị phá vỡ hoàn toàn'],
					answer: 0,
					explain: 'Số mol khí hai vế bằng nhau (1 + 1 = 2) nên áp suất không ảnh hưởng đến cân bằng.',
				},
				{
					q: r`Dung dịch $\ce{HCl}$ 0,01 M có pH bằng`,
					options: ['2', '1', '12', '0,01'],
					answer: 0,
					explain: r`$\ce{HCl}$ là acid mạnh, điện li hoàn toàn: $[\ce{H+}] = 0{,}01 = 10^{-2}$ M $\Rightarrow$ pH = 2.`,
				},
				{
					q: r`Dung dịch $\ce{NaOH}$ 0,001 M có pH bằng`,
					options: ['11', '3', '10', '13'],
					answer: 0,
					explain: r`$[\ce{OH-}] = 10^{-3}$ M $\Rightarrow$ pOH = 3 $\Rightarrow$ pH = 14 − 3 = 11.`,
				},
				{
					q: r`Theo thuyết Brønsted–Lowry, trong phản ứng $\ce{NH3 + H2O <=> NH4+ + OH-}$, nước đóng vai trò`,
					options: ['acid', 'base', 'chất lưỡng tính nhưng ở đây là base', 'không phải acid, không phải base'],
					answer: 0,
					explain: r`$\ce{H2O}$ cho $\ce{H+}$ cho $\ce{NH3}$ (tạo $\ce{OH-}$) nên là acid. ($\ce{H2O}$ là chất lưỡng tính, nhưng trong phản ứng này nó là acid.)`,
				},
				{
					q: 'Nhỏ vài giọt phenolphthalein vào dung dịch có pH = 12, dung dịch có màu',
					options: ['hồng', 'không màu', 'đỏ', 'xanh'],
					answer: 0,
					explain: 'pH = 12 là môi trường base, phenolphthalein chuyển màu hồng.',
				},
			],
		},
	],
};
