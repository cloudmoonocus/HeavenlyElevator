import { Toast } from "antd-mobile";
import { FormEvent, useEffect, useState } from "react";
import { loginApi } from "@/services/userInfo";
import { backToHome } from "@/utils/router";
import { getStorage, setStorage } from "@/utils/webStorage";
import { EXPIRE_TIME } from "@/services";

const Login: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const token = getStorage("token");
    if (token) backToHome();
  }, []);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Toast.show({
      icon: "loading",
      duration: EXPIRE_TIME,
    });

    const res: any = await loginApi({ userid: userName, password });
    Toast.clear();
    if (res.success) {
      Toast.show({
        icon: "success",
        content: "登录成功",
      });
      setStorage("token", res.token);
      setStorage("userInfo", res.data);
      backToHome();
      return;
    }
    Toast.show({
      icon: "fail",
      content: res.error,
    });
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col items-center sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="w-auto" src="../../favicon.png" alt="学习通" />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          登录你的学习通账户
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
          <div>
            <label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
              账号
            </label>
            <div className="mt-2">
              <input
                id="userName"
                name="userName"
                type="text"
                autoComplete="userName"
                required
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                密码
              </label>
              <div className="text-sm">
                <span
                  className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  onClick={() =>
                    Toast.show({
                      content: "忘记密码请到学习通平台重置密码",
                    })
                  }
                >
                  忘记密码?
                </span>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              登录
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          <span>温馨提示：</span>
          <span className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">需要学习通的账号密码</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
