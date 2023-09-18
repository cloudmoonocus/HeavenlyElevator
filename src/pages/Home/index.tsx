import { Tag } from "antd-mobile";
import CheckList from "./CheckList";

const Home = () => {
  return (
    <div>
      <div className="flex justify-around items-center indexCard w-full px-8 py-5">
        <img src="../../favicon.png" alt="学习通" />
        <div className="scale-125">
          <span>当前登录：</span>
          <Tag color="danger" fill="outline">
            未登录
          </Tag>
        </div>
      </div>
      <CheckList />
    </div>
  );
};

export default Home;
