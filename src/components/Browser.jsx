import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browser = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
        {user && user.photoURL ? (
          <img
            alt="usericon"
            className="w-12 h-12 absolute top-2 right-32 z-10"
            src={user.photoURL}
          />
        ) : (
          <div className="w-12 h-12 absolute top-2 right-32 z-10 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-sm text-gray-600">No Photo</span>
          </div>
        )}
        <button
          onClick={handleSignOut}
          className="absolute top-2 right-5 bg-red-600 w-20 h-10 text-white font-medium text-center justify-center cursor-pointer hover:bg-red-500 rounded-sm p-2 py-2 m-2 z-40"
        >
          Sign Out
        </button>

        <Header />
      </div>
    </div>
  );
};

export default Browser;
