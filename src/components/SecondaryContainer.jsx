import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="relative w-full h-auto bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white p-8 rounded-md shadow-md mt-64">
      <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
