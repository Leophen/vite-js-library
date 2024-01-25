import {defineConfig} from 'vite';

export default defineConfig({
    plugins: [],
    build: {
        lib: {
            entry: 'packages/index.ts',
            name: 'vite-js-library',
            fileName: format => `vite-js-library.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'svg'],
        },
    },
});