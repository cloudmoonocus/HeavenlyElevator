import { UserInfo } from "@/types";
import { getStorage, removeStorage } from "./webStorage";

export function logOut() {
  removeStorage("token");
  removeStorage("userInfo");
  window.location.href = "/login";
}

export function getUserInfo(): UserInfo {
  return getStorage("userInfo") || {};
}

export function judgeIsLogin() {
  return !!getStorage("token");
}
