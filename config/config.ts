import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  title: "豆瓣爷的潮寄云签",
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  proxy: {
    "/api": {
      target: "http://8.146.210.58",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/",
      },
    },
  },
});
