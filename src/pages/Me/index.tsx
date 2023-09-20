import { ResultPage, Card, Avatar, List, Dialog } from "antd-mobile";
import { SetOutline, TextDeletionOutline } from "antd-mobile-icons";
import { getUserInfo, judgeIsLogin, logOut } from "@/utils/user";
import React, { useEffect } from "react";
import { navigateTo } from "@/utils/router";
import "./index.less";

const Me: React.FC = () => {
  const userInfo = getUserInfo();

  useEffect(() => {
    if (!judgeIsLogin()) {
      navigateTo("/login");
    }
  }, []);

  return (
    <ResultPage
      className="h-full !min-h-full"
      icon={<Avatar src={userInfo.avatar} />}
      title={userInfo.name}
      description={userInfo?.userid?.substring(0, 3) + "****" + userInfo?.userid?.substring(7, 11)}
    >
      <Card className="h-[60vh]">
        <List header="操作">
          <List.Item
            prefix={<SetOutline />}
            onClick={() => {
              console.log("设置");
            }}
          >
            设置
          </List.Item>
          <List.Item
            prefix={<TextDeletionOutline />}
            onClick={() =>
              Dialog.confirm({
                content: "确定要退出吗？",
                onConfirm: logOut,
                closeOnMaskClick: true,
              })
            }
          >
            退出登录
          </List.Item>
        </List>
      </Card>
    </ResultPage>
  );
};

export default Me;
