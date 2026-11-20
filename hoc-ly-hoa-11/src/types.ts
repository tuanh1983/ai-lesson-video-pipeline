// Text fields support inline math: $...$ (KaTeX). Chemistry can use mhchem: $\ce{2NO2 <=> N2O4}$
export type SimId = 'interference' | 'young' | 'spring' | 'equilibrium' | 'ph';

export interface FormulaItem {
	name: string;
	tex?: string; // display formula (LaTeX, no $)
	note?: string; // rich text
}

export interface SheetSection {
	title: string;
	items: FormulaItem[];
}

export interface Video {
	title: string;
	/** YouTube video ID (the part after watch?v=). Leave empty until you pick one. */
	youtubeId?: string;
	/** Or a file you rendered yourself, placed in public/videos/ (e.g. "videos/dao-dong.mp4"). */
	file?: string;
	/** Search phrase used for the "Tìm trên YouTube" button. */
	search: string;
	note?: string;
}

export interface Question {
	q: string;
	options: string[];
	answer: number; // index into options
	explain: string;
}

export interface Chapter {
	id: string;
	title: string;
	lessons: string[];
	sheet: SheetSection[];
	videos: Video[];
	sims: SimId[];
	quiz: Question[];
}

export interface Subject {
	id: string;
	name: string;
	icon: string;
	accent: 'phys' | 'chem';
	chapters: Chapter[];
	upcoming: string[];
}
