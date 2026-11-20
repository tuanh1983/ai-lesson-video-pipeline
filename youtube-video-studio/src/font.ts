// "Be Vietnam Pro" has full Vietnamese diacritics support and works well for English too.
import {loadFont} from '@remotion/google-fonts/BeVietnamPro';

export const {fontFamily} = loadFont('normal', {
	weights: ['400', '700', '800'],
	subsets: ['latin', 'vietnamese'],
});
