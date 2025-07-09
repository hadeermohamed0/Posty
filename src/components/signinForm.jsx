import React from "react";
import bgImage from "../assets/posty.jpg";
import bg2Image from "../assets/body-bg.jpg";

import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen pr-60"
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
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg  absolute   right-40  ">
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-6">
            Create an Account
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-blue-950 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-blue-950 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-blue-950 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-blue-950 mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-pink-700 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
