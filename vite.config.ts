import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ svgrOptions: {} })],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
