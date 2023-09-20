import { headerTitleMap } from "@/constants/headerTitle";
import { navigateTo } from "@/utils/router";
import { NavBar, TabBar } from "antd-mobile";
import { AppOutline, SetOutline, UserOutline } from "antd-mobile-icons";
import React from "react";
import { Outlet, useLocation } from "umi";

const tabs = [
  {
    key: "/home",
    title: "首页",
    icon: <AppOutline />,
  },
  {
    key: "/allocation",
    title: "配置",
    icon: <SetOutline />,
  },
  {
    key: "/me",
    title: "我的",
    icon: <UserOutline />,
  },
];

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
  const { pathname } = location;

  return (
    <div className="flex flex-col h-screen bg-[#f3f3f3]">
      <header className="flex-0 border-b-[1px] border-[#e6e4e4] border-solid bg-white">
        <NavBar backArrow={false}>{headerTitleMap[pathname]}</NavBar>
      </header>
      <main className="flex-1 p-5 overflow-auto">
        <Outlet />
      </main>
      <nav className="flex-0 border-t-[1px] border-[#e6e4e4] border-solid bg-white">
        <Bottom />
      </nav>
    </div>
  );
};

export default Layout;
