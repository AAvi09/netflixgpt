import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

const Browser = () => {
  //fetch data from TMDB API and update store
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showGptSearchView = useSelector((store) => store.gpt.showGptSearch);
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
    <div className=" w-screen  bg-black relative">
      <div className="absolute w-screen h-20 shadow-lg bg-gradient-to-l from-zinc-800 to-black">
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
      </div>
      <Header />
      {showGptSearchView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
