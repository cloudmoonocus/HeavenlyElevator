import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes,
  title: "HeavenlyElevator",
  npmClient: "yarn",
  tailwindcss: {},
  plugins: ["@umijs/plugins/dist/tailwindcss"],
});
