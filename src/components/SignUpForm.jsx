import React from "react";
import Header from "./Header";

const SignUpForm = () => {
  return (
    <div>
      <Header />

      <div className="absolute top-[30%] left-[30%]">
        <h1 className="text-white text-center text-[50px] font-extrabold">
          Unlimited movies,
        </h1>
        <h1 className="text-white text-center text-[50px] font-extrabold">
          TV shows and more
        </h1>
        <h3 className="text-white font-bold text-center justify-center p-2 m-2">
          Starts at ₹149. Cancel at any time.
        </h3>
        <p className="text-white font-normal text-center justify-center">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input
          type="email"
          placeholder="Enter your email address "
          className="rounded-sm bg-black w-72 h-10 p-2 m-2 border-white text-white opacity-75 "
        />
        <button className="bg-red-600 rounded-lg w-32 h-10 p-2 m-2 font-medium text-white cursor-pointer hover:bg-red-800">
          Get Started {">"}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
