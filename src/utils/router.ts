import { history } from "umi";

export function backToHome(isFresh = false) {
  if (isFresh) {
    window.location.href = "/";
  } else {
    history.replace("/home");
  }
}

export function backToPrevious() {
  history.back();
}

export function navigateTo(path: string, pushOrReplace = true, state?: any) {
  if (pushOrReplace) {
    history.push(path, state);
  } else {
    history.replace(path, state);
  }
}
