import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { checkValidEmail } from "../utils/validate";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/createSlice";
import Header from "./Header";

const FinalSignUpForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
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
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/145574821?v=4",
        })
          .then(() => {
            // Profile updated!
            // ...
            const { uid, emailId, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                emailId: emailId,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message);
          });
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

        <Header />
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
          ref={name}
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
