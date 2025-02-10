import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/react-dot-art-editor/", // リポジトリ名を指定
  plugins: [react()],
});
