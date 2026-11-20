import katex from 'katex';
import 'katex/contrib/mhchem';
import React, {useMemo} from 'react';

function render(tex: string, displayMode: boolean) {
	// Vietnamese decimal comma: "9,22" → "9{,}22" so KaTeX doesn't add a space after the comma.
	const fixed = tex.replace(/(\d),(\d)/g, '$1{,}$2');
	return katex.renderToString(fixed, {displayMode, throwOnError: false, strict: false});
}

/** Display formula (block). */
export const Tex: React.FC<{tex: string}> = ({tex}) => {
	const html = useMemo(() => render(tex, true), [tex]);
	return <div className="tex" dangerouslySetInnerHTML={{__html: html}} />;
};

/** Text with inline $...$ math. */
export const Rich: React.FC<{text: string; as?: 'span' | 'p' | 'div'}> = ({text, as = 'span'}) => {
	const html = useMemo(
		() =>
			text
				.split(/(\$[^$]+\$)/g)
				.map((part) =>
					part.startsWith('$') && part.endsWith('$') && part.length > 1
						? render(part.slice(1, -1), false)
						: part.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'),
				)
				.join(''),
		[text],
	);
	return React.createElement(as, {dangerouslySetInnerHTML: {__html: html}});
};
