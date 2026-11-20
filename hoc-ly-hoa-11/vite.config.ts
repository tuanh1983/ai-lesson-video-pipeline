import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// base './' so the built site works on GitHub Pages or opened from any sub-folder.
export default defineConfig({plugins: [react()], base: './'});
