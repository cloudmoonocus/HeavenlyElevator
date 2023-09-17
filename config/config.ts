import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes,
  title: 'CE2103无敌牛逼签到系统',
  npmClient: 'yarn',
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});
