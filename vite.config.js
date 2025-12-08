import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        programs: 'programs.html',
        events: 'events.html',
        projects: 'projects.html',
        blog: 'blog.html',
        contact: 'contact.html',
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  }
})
