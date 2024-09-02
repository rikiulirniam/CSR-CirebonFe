import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/path": {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
});
