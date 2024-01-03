import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@api", replacement: path.resolve(__dirname, "src/api") },
      { find: "@atom", replacement: path.resolve(__dirname, "src/atom") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@core", replacement: path.resolve(__dirname, "src/core") },
      { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
      { find: "@type", replacement: path.resolve(__dirname, "src/type") },
    ],
  },
});
