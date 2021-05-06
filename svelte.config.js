import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import fs from 'fs';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		ssr: false,
		target: '#svelte',
		hydrate: false,
		vite: {
			noExternal: Object.keys(pkg.dependencies || {})
		}
	}
};

export default config;
