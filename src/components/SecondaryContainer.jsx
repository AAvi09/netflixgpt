import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="relative w-auto h-auto  text-white p-8 rounded-md shadow-md -mt-6 py-4 z-10 ">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
