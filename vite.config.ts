import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/itsme/',
  plugins: [
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // copies to dist/404.html
          rename: '404.html',
        },
      ],
    }),
  ],
});
