import React from "react";
import MovieCard from "./MovieCard";
import { IMG_CDN_URL } from "../utils/constants";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <div>{console.log("No movies available")}</div>;
  }
  console.log(movies);
  return (
    <div>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-200 mb-4">{title}</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <MovieCard posterPath={movies[0]?.poster_path} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
