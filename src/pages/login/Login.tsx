import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useState } from "react";
import Notification from "../../components/Notification";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [notificationData, setNotificationData] = useState<any>({
    show: false,
    title: "Successfull Login",
    description: "",
    icon: "success",
  });

  const handleSubmit = async (values: Values) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        { ...values }
      );
      if (data) {
        setNotificationData({
          show: true,
          title: "Successfull Login",
          description: "",
          icon: "success",
        });
        localStorage.setItem("userData", JSON.stringify(data));
        setUser({
          ...data,
        });
        navigate("/home");
      }
    } catch (error) {
      setNotificationData({
        show: true,
        title: "Error Login",
        description: "Password or email incorrect",
        icon: "error",
      });
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Notification
        notificationData={notificationData}
        setNotificationData={() => {
          setNotificationData((prev: any) => {
            return {
              ...prev,
              show: false,
            };
          });
        }}
      />
      <div className="flex min-h-full h-screen flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="https://e6b6n7w7.stackpathcdn.com/wp-content/uploads/2022/08/holafly-logo.svg"
                alt="Holafly icon"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form className="space-y-6" onSubmit={formik.handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-rose-600 focus:ring-rose-600 accent-rose-600"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover z-10"
            src="https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3328&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;

interface Values {
  email: string;
  password: string;
}
