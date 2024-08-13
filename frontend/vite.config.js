import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Uncomment if you have specific reasons to externalize certain modules
      // external: ['react-calendar'],
    },
  },
});
