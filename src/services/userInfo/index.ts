import request from "..";

// 登录
export function loginApi(data: { userid: string; password: string }) {
  return request({
    url: "/auth/login",
    method: "post",
    data,
  });
}
