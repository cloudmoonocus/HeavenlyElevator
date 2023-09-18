import { backToPrevious } from "@/utils/util";
import { Button, createErrorBlock } from "antd-mobile";
import React from "react";

const ErrorBlock = createErrorBlock({
  empty: "https://gw.alipayobjects.com/zos/bmw-prod/7a2970f8-9247-4196-b3b3-2d0218c18b59.svg",
});

const NotFound: React.FC = () => {
  return (
    <ErrorBlock
      fullPage
      status="empty"
      title="该页面不存在"
      description={
        <Button size="small" color="primary" onClick={backToPrevious}>
          返回
        </Button>
      }
    />
  );
};

export default NotFound;
