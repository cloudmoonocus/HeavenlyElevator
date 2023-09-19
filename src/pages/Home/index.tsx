import { Tag, Image } from "antd-mobile";
import CheckList from "./CheckList";
import { getUserInfo, judgeIsLogin } from "@/utils/user";
import { useEffect } from "react";

const Home = () => {
  const userInfo = getUserInfo();
  const isLogin = judgeIsLogin();

  useEffect(() => {
    if (!isLogin) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <div className="flex justify-around items-center indexCard w-full px-8 py-5">
        <Image src="../../favicon.png" width={64} height={64} alt="学习通" />
        <div className="scale-125">
          <span>当前登录：</span>
          {judgeIsLogin() ? (
            <Tag color="primary" fill="outline">
              {userInfo?.name}
            </Tag>
          ) : (
            <Tag color="danger" fill="outline">
              未登录
            </Tag>
          )}
        </div>
      </div>
      <CheckList />
    </div>
  );
};

export default Home;
