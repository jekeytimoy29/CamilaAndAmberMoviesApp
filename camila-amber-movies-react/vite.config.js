import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3014, // you can replace this port with any port
  },
  test: { globals: true, environment: "jsdom", setupFiles: "./tests/setup.js" },
});
