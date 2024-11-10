module.exports = {
	plugins: [
		require("@csstools/postcss-global-data")({
			files: ["src/styles/global/media-queries.css"],
		}),
		require("cssnano")({
			preset: "default",
		}),
		require("level4"),
	],
};
