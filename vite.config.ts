import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { svgSpritemap } from 'vite-plugin-svg-spritemap';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		svgSpritemap({
			pattern: 'src/icons/*.svg',
		}),
	],
});
