const routes = [
  // 首页
  { path: "/", redirect: "/home" },
  { path: "/home", component: "./Home" },
  // 组队
  { path: "/organizeTeam", component: "./OrganizeTeam" },
  // 个人中心
  { path: "/me", component: "./Me" },
  // 登录
  { path: "/login", component: "./Login" },
  // 二维码签到
  { path: "/qrCodeCheckIn", component: "./CheckIn/QrCodeCheckIn" },
  // 资源集
  { path: "/resource", component: "./Resource" },
  // 兜底
  { path: "/*", component: "@/components/404.tsx" },
];

export default routes;
