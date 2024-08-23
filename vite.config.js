import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-router-dom"], // Add any other external dependencies here
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
});
