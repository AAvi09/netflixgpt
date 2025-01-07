import React from "react";
import { Link, Navigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toggleGptSearchView } from "../utils/gptSlice";
import { LANG_PREFERENCE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, emailId, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            emailId: emailId,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        // Redirect to browser page only if the user is already logged in
        // Redirect to browser page only if the user is already logged in

        navigate("/browser");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        // Get the current pathname
        const currentPath = window.location.pathname;

        // Allow access to specific pages for logged-out users
        if (currentPath === "/in" || currentPath === "/finalsignup") {
          // Stay on the allowed paths
          return;
        } else {
          navigate("/"); // Redirect to login page if not logged in
        }
      }
    });
    return () => {
      unsubscribe();
      console.log(
        "%cheader ho gaya unmount",
        "color: blue; font-size: 16px; background-color: red; padding: 4px; border-radius: 4px;"
      );
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="relative w-full h-screen overflow-hidden  ">
      {/* Netflix Logo */}
      <div className="absolute top-2 left-32 z-10">
        <Link to="/">
          <img
            className="w-40 h-auto  text-red-950 fill-red-950"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix Logo"
          />
        </Link>
      </div>
      <div className="absolute top-2 right-80 w-24 z-40 rounded-sm bg-black font-normal text-center justify-center cursor-pointer p-2 m-2">
        <select className="bg-black text-white" onChange={handleLanguageChange}>
          {LANG_PREFERENCE.map((lang) => (
            <option key={lang.lang} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div className="absolute top-2 right-48 z-10">
        <button
          onClick={handleGptSearchClick}
          className="bg-gradient-to-r from-purple-800 to bg-zinc-950 hover:scale-110 hover:bg-purple-600 transition-transform ease-in-out p-2 m-2 text-white rounded-md"
        >
          GPT Search
        </button>
      </div>
    </div>
  );
};

export default Header;
