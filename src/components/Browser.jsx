import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browser = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log(
          "%cuser ho gaya he signed out",
          "color: blue; font-size: 16px; background-color: yellow; padding: 4px; border-radius: 4px;"
        );
      })
      .catch((error) => {
        // An error happened.
        navigate("error");
      });
  };

  return (
    <div className="bg-white w-screen h-screen relative">
      <div className="absolute w-screen h-24 shadow-lg bg-zinc-800">
        <button
          onClick={handleSignOut}
          className="absolute top-2 right-5 bg-red-600 w-20 h-10 text-white font-medium text-center justify-center cursor-pointer hover:bg-red-500 rounded-sm p-2 py-2 m-2 z-40"
        >
          Sign Out
        </button>

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
    </div>
  );
};

export default Browser;
