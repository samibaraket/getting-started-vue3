import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import tailwindcss from "@tailwindcss/postcss";

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
