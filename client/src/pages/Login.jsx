import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token) {
        navigate("/dashboard");
      }
    };
    verifyCookie();
  }, [cookies, navigate]);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8000",
        { ...inputValue },
        { withCredentials: true }
      );

      console.log(data);

      const { success, message } = data;
      if (success) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={handleChange}
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="transition duration-200 bg-[#33415C] hover:bg-[#0C356A] text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-1">
                <button
                  type="button"
                  className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center items-center"
                >
                  <FcGoogle className="mr-3" />
                  Google
                </button>
                <button
                  type="button"
                  className="transition duration-200 border border-gray-200 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center items-center"
                >
                  <FaApple className="mr-3" />
                  Apple
                </button>
              </div>
            </div>
            <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block align-text-top"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <p className="text-gray-500 mx-5">Don't have an account?</p>
                </div>
                <div className="text-center sm:text-right  whitespace-nowrap">
                  <Link
                    to="/signup"
                    className="text-[#0C356A] lg:relative mx-5"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="py-5">
          <div className="grid grid-cols-2 gap-1">
            <div className="text-center sm:text-left whitespace-nowrap">
              <Link to="/">
                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span className="inline-block ml-1">Back to Home</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
