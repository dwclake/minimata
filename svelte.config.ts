import { Config } from "@sveltejs/kit";
import { PreprocessorGroup } from "svelte/compiler";
import adapter from "svelte-adapter-bun";
// import adapter from '@sveltejs/adapter-static';
import { mdsvex } from "mdsvex";

const config: Config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: "src/lib/components",
			$assets: "src/lib/assets",
			$state: "src/lib/state",
			$algorithms: "src/lib/algorithms",
			$functions: "src/lib/functions",
			$routes: "src/routes"
		},
		experimental: {
			remoteFunctions: true
		},
		csp: {
			directives: {
				"script-src": ["self"]
			},
			reportOnly: {
				"script-src": ["self"],
				"report-uri": ["/"]
			}
		}
	},
	preprocess: [mdsvex() as PreprocessorGroup],
	extensions: [".svelte", ".svx"],
	compilerOptions: {
		experimental: {
			async: true
		}
	}
};

export default config;
