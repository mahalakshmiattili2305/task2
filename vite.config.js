import { defineConfig } from "vite";
import nunjucks from "vite-plugin-nunjucks";
import { resolve } from "path";

export default defineConfig({
  root: resolve(process.cwd(), 'src'),
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        about: resolve(__dirname, "src/about.html"),
        contact: resolve(__dirname, "src/contact.html")
      }
    }
  },
  plugins: [
    nunjucks({
      templatesDir: resolve(__dirname, "src/")
    })
  ]
});