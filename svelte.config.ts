import { Config } from '@sveltejs/kit';
import { PreprocessorGroup } from 'svelte/compiler';
import adapter from 'svelte-adapter-bun';
// import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

const config: Config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex() as PreprocessorGroup
	],
	extensions: ['.svelte', '.svx'],
	alias: {
		$components: 'src/lib/components',
		$assets: 'src/lib/assets',
		$state: 'src/lib/state'
	}
};

export default config;
