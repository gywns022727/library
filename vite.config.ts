import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },

  plugins: [
    react(),
    svgr({ svgrOptions: {} }),

    {
      name: "inject-html",
      transformIndexHtml(html) {
        return html.replace(
          "%VITE_KAKAO_API_KEY%",
          process.env.VITE_KAKAO_API_KEY || ""
        );
      },
    },
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src/" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@components", replacement: "/src/components" },
    ],
  },
});
