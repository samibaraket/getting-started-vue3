import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // <-- THIS WAS MISSING

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // allows @ to point to src
    },
  },
  server: {
    port: 5173, // optional
  },
});