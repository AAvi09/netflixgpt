import React, { useRef } from "react";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
// import generateResponse from "../utils/geminiConfig"; // Assuming you have the function for API call
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const movies = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.searchLang.language);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    // const query = searchText.current.value;
    const genAI = new GoogleGenerativeAI(
      "AIzaSyDeuytJFyGwQZH2f_2a3ZH_EzbEZaTJYe4"
    );

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt =
      "Act as a Movie recommendation system suggest some movies query : " +
      searchText.current.value +
      ". only give me names of 5 movies , comma separated like the example result given ahead. Example Don,Andaaz apna apna,bawarchi,anand,sholey.";

    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    const geminiMovies = result.response.text().split(", ");
    console.log(geminiMovies[0]);
    const promiseArray = geminiMovies.map((movie) => searchMovies(movie));
    const tmdbMovies = await Promise.all(promiseArray);
    console.log(tmdbMovies);
    dispatch(
      addGptMovieResults({ movieNames: geminiMovies, movieResults: tmdbMovies })
    );
  };

  return (
    <div className="p-4 m-4 bg-black rounded-xl">
      <form
        className="bg-gradient-to-b from-red-500 to-red-900 rounded-2xl justify-center text-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-auto bg-black h-auto  text-white">
          <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
        <input
          ref={searchText}
          placeholder={lang[langKey].gptSearch}
          type="text"
          className="bg-zinc-800 text-white font-medium p-4 m-4 w-80 rounded-lg hover:scale-110 transition-transform ease-in-out"
        />
        <button
          className="p-4 m-4 py-4 w-32 hover:scale-110 hover:bg-black transition-transform ease-in-out shadow-md bg-gradient-to-r from-black to-zinc-800 rounded-md text-white text-xl"
          onClick={handleSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
