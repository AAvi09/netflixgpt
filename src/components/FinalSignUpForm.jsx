import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { checkValidEmail } from "../utils/validate";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const FinalSignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignUp = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = checkValidEmail(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //Sign Up logic
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };
  return (
    <div className="bg-white w-screen h-screen relative">
      <div className="absolute w-screen h-24 shadow-lg bg-white">
        <Link to="/">
          <button className="absolute top-2 right-5 bg-red-600 w-20 h-10 text-white font-medium text-center justify-center cursor-pointer hover:bg-red-500 rounded-sm p-2 py-2 m-2 z-40">
            Sign In
          </button>
        </Link>

        <div className="absolute top-2 left-32 z-10">
          <Link to="/">
            <img
              className="w-40 h-auto  text-red-950 fill-red-950"
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="Netflix Logo"
            />
          </Link>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-64 shadow-2xl h-auto bg-white top-[20%] left-[40%]"
      >
        <div className="  w-56 p-2 m-2">
          <img
            src="	https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
            alt="usersignup"
          />
        </div>
        <h1 className="relative text-black font-bold text-center justify-center p-2 m-2 text-[20px] ">
          Finish setting up your account
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Full Name"
          className="border-zinc-700 text-black bg-white relative w-56 p-2 m-2 justify-center"
        />
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="border-zinc-700 text-black bg-white relative w-56 p-2 m-2 justify-center"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="border-zinc-700 text-black bg-white relative w-56 p-2 m-2 justify-center"
        />
        <p className="relative text-red-900 font-medium left-2 ">
          {errorMessage}
        </p>
        <button
          onClick={handleSignUp}
          className="bg-red-800 w-56 rounded-sm text-white text-center justify-center p-2 m-2  relative "
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default FinalSignUpForm;
