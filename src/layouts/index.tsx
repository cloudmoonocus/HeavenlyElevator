import { headerTitleMap } from "@/constants/headerTitle";
import { backToPrevious, navigateTo } from "@/utils/router";
import { judgeIsLogin } from "@/utils/user";
import { NavBar, TabBar } from "antd-mobile";
import { AppOutline, TeamOutline, UserOutline } from "antd-mobile-icons";
import React from "react";
import { Outlet, useLocation } from "umi";
import { Analytics } from "@vercel/analytics/react";

const tabs = [
  {
    key: "/home",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/organizeTeam",
    title: "组队",
    icon: <TeamOutline />,
  },
  {
    key: "/me",
    title: "我的",
    icon: <UserOutline />,
  },
];
const defaultDisabledKeys = ["/login"];
const tabKeys = tabs.map((item) => item.key).concat(defaultDisabledKeys);

const Bottom: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <TabBar activeKey={pathname} onChange={navigateTo}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

const Layout: React.FC = () => {
  const location = useLocation();
  const isLogin = judgeIsLogin();
  const { pathname } = location;

  return (
    <>
      <div className="flex flex-col h-screen bg-[#f3f3f3]">
        <header className="flex-0 border-b-[1px] border-[#e6e4e4] border-solid bg-white">
          <NavBar back={tabKeys.includes(pathname) ? null : true} onBack={backToPrevious}>
            {headerTitleMap[pathname]}
          </NavBar>
        </header>
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        {isLogin && (
          <nav className="flex-0 border-t-[1px] border-[#e6e4e4] border-solid bg-white">
            <Bottom />
          </nav>
        )}
      </div>
      <Analytics />
    </>
  );
};

export default Layout;
