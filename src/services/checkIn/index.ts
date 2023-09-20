import request from "..";

// 登录
export function qrcodeCheckInApi(data: { qrcodeurl: string }) {
  return request({
    url: "/api/sign/qrsignforgroup",
    method: "post",
    data,
  });
}
