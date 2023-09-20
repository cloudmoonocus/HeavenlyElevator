const navList = [
  {
    key: "/home",
    title: "逃离东秦之云签",
  },
  {
    key: "/organizeTeam",
    title: "组队",
  },
  {
    key: "/me",
    title: "个人中心",
  },
  {
    key: "/login",
    title: "登录",
  },
  {
    key: "/qrCodeCheckIn",
    title: "二维码签到",
  },
  {
    key: "/resource",
    title: "资源集",
  },
];

export const headerTitleMap = navList.reduce((acc, cur) => {
  acc[cur.key] = cur.title;
  return acc;
}, {} as Record<string, string>);
