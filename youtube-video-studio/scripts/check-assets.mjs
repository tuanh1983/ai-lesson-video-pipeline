// Quick asset check for one episode: which files exist in public/, which are missing.
//   npm run check-assets -- ly11-giao-thoa-song
import {existsSync, readFileSync, statSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import path from 'node:path';

const ep = process.argv[2];
if (!ep) {
	console.log('Usage: npm run check-assets -- <episode>   (e.g. ly11-giao-thoa-song)');
	process.exit(1);
}

const sheet = path.join('briefs', `${ep}-production.md`);
if (!existsSync(sheet)) {
	console.log(`Production sheet not found: ${sheet}`);
	process.exit(1);
}

// Every asset path the production sheet mentions, e.g. images/ly11-giao-thoa-song-s01.png
const pattern = new RegExp(`(?:audio|images|clips)/${ep}-[\\w-]+\\.(?:mp3|wav|m4a|png|jpe?g|webp|mp4)`, 'g');
const wanted = [...new Set(readFileSync(sheet, 'utf8').match(pattern) ?? [])]
	.filter((f) => !/-s?NN\.|-sXX\./.test(f)) // skip naming-convention examples like "-sNN.png"
	.sort();

const seconds = (file) => {
	try {
		const out = execFileSync(
			'npx',
			['remotion', 'ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file],
			{encoding: 'utf8', shell: true, stdio: ['ignore', 'pipe', 'ignore']},
		);
		return parseFloat(out);
	} catch {
		return NaN;
	}
};

let missing = 0;
console.log(`\nAssets for ${ep}  (folder: youtube-video-studio/public/)\n`);
for (const rel of wanted) {
	const file = path.join('public', rel);
	if (!existsSync(file)) {
		missing++;
		console.log(`  ❌ ${rel}`);
		continue;
	}
	const kb = Math.round(statSync(file).size / 1024);
	let extra = '';
	if (/\.(mp3|wav|m4a)$/.test(rel)) {
		const s = seconds(file);
		if (!Number.isNaN(s)) extra = ` · ${s.toFixed(1)} s`;
	}
	console.log(`  ✅ ${rel}  (${kb} KB${extra})`);
}

const voice = wanted.find((f) => f.endsWith('-voice.mp3'));
if (voice && existsSync(path.join('public', voice))) {
	const json = JSON.parse(readFileSync(path.join('episodes', `${ep}.json`), 'utf8'));
	const scenes = json.scenes.reduce((s, x) => s + x.durationInSeconds, 0);
	const v = seconds(path.join('public', voice));
	if (!Number.isNaN(v)) {
		const diff = ((v - scenes) / scenes) * 100;
		console.log(
			`\n  Voiceover ${v.toFixed(1)} s vs scenes ${scenes} s (${diff >= 0 ? '+' : ''}${diff.toFixed(0)}%) → ${
				Math.abs(diff) <= 10 ? 'OK' : 'the video editor will re-time the scenes'
			}`,
		);
	}
}

console.log(`\n  ${wanted.length - missing} of ${wanted.length} files ready${missing ? `, ${missing} missing` : ' — all set!'}\n`);
