import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" cho Vercel (hosting chuẩn). vercel.json lo phần SPA rewrite.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
