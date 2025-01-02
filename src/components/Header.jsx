import React from "react";
import { Link, Navigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/createSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
        navigate("/browser");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
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
    </div>
  );
};

export default Header;
