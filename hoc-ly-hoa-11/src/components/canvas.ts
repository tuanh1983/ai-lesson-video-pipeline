import {useEffect, useRef} from 'react';

/** Resize a canvas to its CSS size × devicePixelRatio and return a ready 2D context. */
export function fitCanvas(c: HTMLCanvasElement) {
	const rect = c.getBoundingClientRect();
	const dpr = window.devicePixelRatio || 1;
	const w = Math.max(1, Math.round(rect.width * dpr));
	const h = Math.max(1, Math.round(rect.height * dpr));
	if (c.width !== w || c.height !== h) {
		c.width = w;
		c.height = h;
	}
	const ctx = c.getContext('2d')!;
	ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	ctx.clearRect(0, 0, rect.width, rect.height);
	return {ctx, w: rect.width, h: rect.height};
}

/** Read theme colors from CSS variables so canvases follow light/dark mode. */
export function cssVar(name: string) {
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || '#888';
}

/** requestAnimationFrame loop; callback gets elapsed seconds since last frame (capped). */
export function useAnimationFrame(cb: (dt: number) => void) {
	const cbRef = useRef(cb);
	cbRef.current = cb;
	useEffect(() => {
		let id = 0;
		let last = performance.now();
		const loop = (now: number) => {
			const dt = Math.min(0.05, (now - last) / 1000);
			last = now;
			cbRef.current(dt);
			id = requestAnimationFrame(loop);
		};
		id = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(id);
	}, []);
}
