import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ".svx", ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocespacs
	// for more information about preprocessors
	preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
