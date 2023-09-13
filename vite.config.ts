import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
    plugins: [react()],
    build: {},
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@/app': path.resolve(__dirname, 'src/app'),
            '@/components': path.resolve(__dirname, 'src/components'),
            '@/hooks': path.resolve(__dirname, 'src/hooks'),
        },
    },
});
