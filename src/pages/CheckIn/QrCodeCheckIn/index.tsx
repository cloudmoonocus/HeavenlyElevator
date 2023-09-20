import { qrcodeCheckInApi } from "@/services/checkIn";
import Html5QrcodePlugin from "./Html5QrcodePlugin";
import { useState, useEffect } from "react";
import { Result, Button, DotLoading } from "antd-mobile";
import { backToHome, navigateTo } from "@/utils/router";
import { judgeIsLogin } from "@/utils/user";

const QrCodeCheckIn: React.FC = () => {
  const [isScanSuccess, setIsScanSuccess] = useState<boolean>(false); // 是否扫码成功
  const [isCheckInSuccess, setIsCheckInSuccess] = useState<boolean>(false); // 是否签到成功
  const [isGetCheckInResult, setIsGetCheckInResult] = useState<boolean>(false); // 是否获取到签到结果
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    if (!judgeIsLogin()) {
      navigateTo("/login");
    }
  }, []);

  const onScanSuccess = async (decodedText: string) => {
    setIsScanSuccess(true);

    const res: any = await qrcodeCheckInApi({ qrcodeurl: decodedText });
    setIsGetCheckInResult(true);
    setIsCheckInSuccess(res.success);
    if (!res.success) setErrorMessage(res.error);
  };

  return (
    <>
      {isGetCheckInResult ? (
        <>
          {isCheckInSuccess ? (
            <Result
              className="h-full !bg-transparent !pt-[20vh]"
              status="success"
              title="已成功签到"
              description={
                <Button color="primary" size="small" className="!mt-5" onClick={() => backToHome()}>
                  返回首页
                </Button>
              }
            />
          ) : (
            <Result
              className="h-full !bg-transparent !pt-[20vh]"
              status="error"
              title="签到失败"
              description={
                <div className="flex flex-col items-center">
                  <span>失败原因：{errorMessage || "未知"}</span>
                  <Button color="danger" size="small" className="!mt-5" onClick={() => window.location.reload()}>
                    重新扫码
                  </Button>
                </div>
              }
            />
          )}
        </>
      ) : (
        <>
          {isScanSuccess ? (
            <Result
              title={
                <>
                  <span>签到中</span>
                  <DotLoading />
                </>
              }
              className="h-full !bg-transparent !pt-[20vh]"
              status="waiting"
            />
          ) : (
            <Html5QrcodePlugin fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onScanSuccess} />
          )}
        </>
      )}
    </>
  );
};

export default QrCodeCheckIn;
