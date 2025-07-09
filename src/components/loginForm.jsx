import React from "react";
import bgImage from "../assets/posty.jpg";
import bg2Image from "../assets/body-bg.jpg";

const LoginForm = () => {
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen  pr-60"
        style={{
          backgroundImage: `url(${bg2Image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="w-[900px] h-[500px]  flex justify-end items-center  "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full max-w-md p-8 pt-20 pb-20 bg-white rounded-2xl shadow-lg  absolute   right-40 ">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Log In
            </h2>
            <form className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              <div className="flex justify-between items-center text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-amber-500" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-amber-500 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
