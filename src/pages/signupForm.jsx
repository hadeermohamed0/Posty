import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/posty.jpg";
import bg2Image from "../assets/body-bg.jpg";
import { useSignup } from "../hooks/useSignup";

const SignUpForm = () => {
  const { register, handleSubmit, errors, onSubmit } = useSignup();

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
        className="w-[900px] h-[500px]  flex justify-end items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg absolute right-40 space-y-4"
        >
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-6">
            Create an Account
          </h2>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-blue-950 mb-1">
              Name
            </label>
            <input
              {...register("name")}
              placeholder="Enter your full name"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-blue-950 mb-1">
              Email
            </label>
            <input
              placeholder="Enter Your Email"
              {...register("email")}
              type="email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-blue-950 mb-1">
              Password
            </label>
            <input
              placeholder="Enter Your Password"
              {...register("password")}
              type="password"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded-lg transition"
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
  );
};

export default SignUpForm;
