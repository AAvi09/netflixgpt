import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidEmail } from "../utils/validate";

import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import Footer from "./Footer";

// import Browser from "./Browser";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showHeader, setShowHeader] = useState(true); // State to control Header rendering
  const handleSignIn = () => {
    const message = checkValidEmail(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log(email.current.value);
    console.log(password.current.value);

    if (message) return;

    //sign in logic

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };
  const email = useRef(null);
  const password = useRef(null);
  return (
    <div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover sm:w-screen   z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        srcSet="
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg 1000w,
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg 1500w,
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg 1800w
              "
        alt="Netflix Background"
      />
      {showHeader && <Header />}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute  top-2 left-[35%] w-96  object-scale-down scale-90 shadow-lg bg-[rgba(0,0,0,0.85)]   "
      >
        <header>
          <h1 className="text-white font-bold text-3xl relative left-5 p-5 m-2">
            Sign In
          </h1>
        </header>
        <input
          ref={email}
          type="email"
          placeholder="Email or Contact Number"
          className=" relative left-9 top-0 p-2 m-2 w-72 text-white rounded-sm hover:cursor-text border-white bg-zinc-900 opacity-70"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="relative left-9 p-2 m-2 w-72 text-white rounded-sm border-white bg-zinc-900 opacity-70"
        />
        <p className="text-red-800 font-medium relative left-11 z-10">
          {errorMessage ? `⚔${errorMessage}` : "🚀"}
        </p>
        <div className="relative bg-red-800   text-white text-sm w-72 h-10 left-9 justify-center text-center hover:cursor-pointer hover:bg-red-950 rounded-sm opacity-100 p-2 m-2">
          <button type="submit" onClick={handleSignIn}>
            {" "}
            Sign In
          </button>
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
            onClick={() => {
              setShowHeader(false);
            }}
          >
            Sign Up now
          </Link>
        </div>
        <h4 className="relative left-0 p-2 m-2 text-zinc-400 font-thin scale-75">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        </h4>
      </form>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
