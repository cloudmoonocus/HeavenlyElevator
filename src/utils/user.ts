export function logOut() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

export function getUserInfo() {
  return JSON.parse(localStorage.getItem("userInfo") || "{}");
}

export function judgeIsLogin() {
  return !!localStorage.getItem("token");
}
