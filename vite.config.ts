import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: "lovelust.end.works",
    port: 3000,
  },
  server: {
    port: 3000,
    host: true,
  },
});
