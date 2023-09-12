import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
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
    username: "",
    email: "",
    passowrd: "",
    password_confirmation: "",
  });

  const { username, email, password, password_confirmation } = inputValue;

  const handleOnChange = (e) => {
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
        "http://localhost:8000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        console.log(message);
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
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };

  return (
    <div className="bg-white relative lg:py-20">
      <div
        className="flex flex-col items-center justify-center pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
      >
        <div className="flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
          <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
            <div
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
            >
              <p className="w-full lg:text-4xl font-medium text-center leading-snug font-serif text-xl">
                Sign up for an account
              </p>
              <form
                onSubmit={handleSubmit}
                className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8"
              >
                <div>
                  <div className="relative">
                    <p
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    >
                      Username
                    </p>
                    <input
                      placeholder="John"
                      type="text"
                      name="username"
                      value={username}
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-6 ml-0 text-base block bg-white border-gray-300 rounded-md"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="relative">
                    <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                      Email
                    </p>
                    <input
                      placeholder="123@ex.com"
                      type="email"
                      name="email"
                      value={email}
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-6 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="relative">
                    <p
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    >
                      Password
                    </p>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password"
                      value={password}
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-6 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="relative">
                    <p
                      className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium  text-gray-600
                  absolute"
                    >
                      Confirm Password
                    </p>
                    <input
                      placeholder="Password"
                      type="password"
                      name="password_confirmation"
                      value={password_confirmation}
                      className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-6 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className="relative">
                    <button
                      type="submit"
                      className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-[#33415C] hover:bg-[#0C356A]
                  rounded-lg transition duration-200  ease"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="px-5 w-full">
                  <div className="lg:grid lg:grid-cols-2 grid gap-2 grid-cols-1 grid-rows-2 lg:gap-1">
                    <button
                      type="button"
                      className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center items-center"
                    >
                      <FcGoogle className="mr-3" />
                      Google
                    </button>
                    <button
                      type="button"
                      className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex justify-center items-center"
                    >
                      <FaGithub className="mr-3" />
                      Github
                    </button>
                  </div>
                </div>
                <div className="lg:flex flex flex-col">
                  <p className="text-gray-500 ">Already have an account?</p>
                  <Link
                    to="/login"
                    className="text-[#0C356A] lg:absolute lg:right-10"
                  >
                    Sign in
                  </Link>
                </div>
              </form>
            </div>

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
      </div>
    </div>
  );
};

export default SignUp;
