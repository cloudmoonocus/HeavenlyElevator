import { navigateTo } from "@/utils/router";
import { judgeIsLogin } from "@/utils/user";
import React, { useEffect } from "react";

const Resource: React.FC = () => {
  useEffect(() => {
    if (!judgeIsLogin()) {
      navigateTo("/login");
    }
  }, []);

  return (
    <div>
      <h1>Resource</h1>
    </div>
  );
};

export default Resource;
