import { fileURLToPath } from "node:url";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// React Compiler runs as a Babel preset (plugin-react v6 no longer
		// accepts an inline `babel` option; it transforms JSX via oxc).
		babel({ presets: [reactCompilerPreset()] }),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	build: {
		minify: "esbuild",
		cssMinify: true,
		sourcemap: false, // Disable source maps in production for smaller bundle
	},
});
