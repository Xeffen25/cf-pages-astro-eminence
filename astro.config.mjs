// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://cf-pages-astro-starter.pages.dev/",
	output: "server",
	adapter: cloudflare({
		imageService: "compile",
		platformProxy: {
			enabled: true,
		},
	}),
});
