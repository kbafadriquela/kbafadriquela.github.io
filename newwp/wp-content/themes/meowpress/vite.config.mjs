import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    base: isBuild
      ? '/newwp/wp-content/themes/meowpress/dist/'
      : 'http://localhost:5180/',

    server: {
      host: 'localhost',
      port: 5180,
      cors: true,
      strictPort: true, // Ensures it fails if the port is taken
    },

    build: {
      manifest: true,
      outDir: 'dist',
      rollupOptions: {
        input: [
          'resources/js/app.js',
          'resources/css/app.css',
          'resources/css/editor-style.css',
        ],
      },
    },

    plugins: [tailwindcss()],
  }
})
