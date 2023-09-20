import { Toast } from "antd-mobile";
import axios from "axios";
import { logOut } from "@/utils/user";
import { getStorage } from "@/utils/webStorage";

export const EXPIRE_TIME = 10 * 1000; // 10s

const request = axios.create({
  withCredentials: true,
  baseURL: "https://chao.easycloud.eu.org",
  timeout: EXPIRE_TIME,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  const token = getStorage("token");
  if (config && config.headers) {
    if (token) config.headers.Authorization = token;
  }
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      Toast.show({
        content: "登录过期，请重新登录",
        position: "bottom",
      });
      logOut();
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
