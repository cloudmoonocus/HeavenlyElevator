import { getStorage, removeStorage } from "./webStorage";

export function logOut() {
  removeStorage("token");
  removeStorage("userInfo");
  window.location.href = "/login";
}

export function getUserInfo() {
  return JSON.parse(getStorage("userInfo") || "{}");
}

export function judgeIsLogin() {
  return !!getStorage("token");
}
