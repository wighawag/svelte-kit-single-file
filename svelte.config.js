import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		router: {
			type: 'hash'
		},
		adapter: adapter({
			fallback: 'index.html' // may differ from host to host
		}),
		output: {
			bundleStrategy: 'inline'
		}
	}
};

export default config;
