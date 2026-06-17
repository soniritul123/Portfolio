import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub repo: soniritul123/Portfolio → https://soniritul123.github.io/Portfolio/
const GITHUB_PAGES_BASE = '/Portfolio/'

export default defineConfig(({ mode }) => {
  const isPagesBuild = mode === 'pages'

  return {
    plugins: [react()],
    base: isPagesBuild ? GITHUB_PAGES_BASE : '/',
    build: {
      outDir: isPagesBuild ? 'docs' : 'dist',
      emptyOutDir: true,
    },
  }
})
