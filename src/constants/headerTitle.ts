const navList = [
  {
    key: "/home",
    title: "首页",
  },
  {
    key: "/allocation",
    title: "个人配置",
  },
  {
    key: "/me",
    title: "个人中心",
  },
  {
    key: "/login",
    title: "登录",
  },
];

export const headerTitleMap = navList.reduce((acc, cur) => {
  acc[cur.key] = cur.title;
  return acc;
}, {} as Record<string, string>);
