import { Tag, Avatar } from "antd-mobile";
import CheckList from "./CheckList";
import { getUserInfo, judgeIsLogin } from "@/utils/user";
import { useEffect } from "react";
import { navigateTo } from "@/utils/router";

const Home = () => {
  const userInfo = getUserInfo();
  const isLogin = judgeIsLogin();

  useEffect(() => {
    if (!isLogin) {
      navigateTo("/login");
    }
  }, []);

  return (
    <div className="p-5">
      <div className="flex justify-around items-center indexCard w-full px-8 py-5">
        <Avatar src={userInfo.avatar} />
        <div className="flex items-center scale-125">
          当前登录：
          <Tag color="primary" fill="outline">
            {userInfo?.name}
          </Tag>
        </div>
      </div>
      <CheckList />
    </div>
  );
};

export default Home;
