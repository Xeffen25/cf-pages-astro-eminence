// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	tabWidth: 4,
	useTabs: true,
	quoteProps: "consistent",
	printWidth: 120,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.svg",
			options: {
				parser: "html",
			},
		},
		{
			files: "*.json",
			options: {
				parser: "json",
			},
		},
	],
};
