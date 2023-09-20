import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  title: "逃离东秦之云签",
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  proxy: {
    "/chaoxing": {
      target: "http://8.146.198.155",
      changeOrigin: true,
      pathRewrite: {
        "^/chaoxing": "",
      },
    },
  },
});
