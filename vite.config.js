// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Output folder for production
    assetsDir: "assets", // Static files will go inside 'dist/assets'
  },
  define: {
    "process.env": process.env, // Optional: This line ensures that `process.env` works in your project
  },
});
