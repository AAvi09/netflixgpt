import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggeestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black  text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggeestion;
