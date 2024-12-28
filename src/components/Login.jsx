import React from "react";
import Header from "./Header";

import { Link } from "react-router-dom";
// import Browser from "./Browser";

const Login = () => {
  return (
    <div className="absolute w-full h-full  bg-gradient-to-r from-black to-gray-900 z-10 ">
      <Header />
      <form className="absolute  top-2 left-[35%] w-96 object-scale-down bg-black bg-[rgba(0,0,0,0.85)] ">
        <header>
          <h1 className="text-white font-bold text-3xl relative left-5 p-5 m-2">
            Sign In
          </h1>
        </header>
        <input
          type="email"
          placeholder="Email or Contact Number"
          className=" relative left-9 top-0 p-2 m-2 w-72 rounded-sm hover:cursor-text border-white bg-zinc-900 opacity-70"
        />
        <input
          type="text"
          placeholder="Password"
          className="relative left-9 p-2 m-2 w-72 rounded-sm border-white bg-zinc-900 opacity-70"
        />
        <div className="relative bg-red-800   text-white text-sm w-72 h-10 left-9 justify-center text-center hover:cursor-pointer hover:bg-red-950 rounded-sm opacity-100 p-2 m-2">
          <button type="submit"> Sign In</button>
        </div>
        <div className="relative text-gray-500 font-semibold p-2 m-2 left-40">
          <h1>OR</h1>
        </div>
        <div className="relative w-72 h-9 p-2 m-2 left-9 hover:cursor-pointer rounded-sm bg-zinc-700 text-white font-semibold text-center justify-center opacity-75">
          <button>Use a Sign-In Code</button>
        </div>
        <h1 className="relative p-2 m-2 justify-center text-center text-white font-normal hover:underline hover:text-zinc-400 cursor-pointer">
          Forgot Password?
        </h1>
        <div className="flex relative left-11 gap-2">
          <input type="checkbox" className="bg-white " />
          <label htmlFor="rememberMe" className="text-white font-medium">
            Remember Me
          </label>
        </div>
        <div className="flex relative left-7 p-2 m-2">
          <h1 className="text-zinc-400">New to Netflix?</h1>
          <Link
            to="/in"
            className="text-white font-semibold hover:underline cursor-pointer"
          >
            Sign Up now
          </Link>
        </div>
        <h4 className="relative left-7 p-2 m-2 text-zinc-400 font-thin">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        </h4>
      </form>
    </div>
  );
};

export default Login;
