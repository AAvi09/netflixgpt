import React from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="absolute w-full h-full  bg-gradient-to-r from-black to-gray-900 z-10 opacity-75"></div>
      <img
        className="absolute top-0 left-0 w-full h-full object-cover  z-0"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        srcSet="
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg 1000w,
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg 1500w,
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg 1800w
              "
        alt="Netflix Background"
      />
      <Header />
      <Link to="/">
        <button className="absolute top-2 right-5 bg-red-600 w-20 h-10 text-white font-medium text-center justify-center cursor-pointer hover:bg-red-500 rounded-sm p-2 py-2 m-2 z-40">
          Sign In
        </button>
      </Link>
      <div className="absolute top-2 right-32 w-24 z-40 rounded-sm bg-zinc-700 font-normal text-center justify-center cursor-pointer p-2 m-2">
        <select>
          <option
            lang="en"
            label="English"
            value="en-IN"
            className="bg-zinc-400"
          >
            English
          </option>
          <option lang="hi" label="हिन्दी" value="hi-IN">
            हिन्दी
          </option>
        </select>
      </div>

      <div className="absolute top-[30%] left-[30%] z-40">
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
        <Link
          to="/finalsignup"
          onClick={() => {
            navigate("/finalsignup");
          }}
        >
          <button className="bg-red-600 rounded-lg w-32 h-10 p-2 m-2 font-medium text-white cursor-pointer hover:bg-red-800">
            Get Started {">"}
          </button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SignUpForm;
