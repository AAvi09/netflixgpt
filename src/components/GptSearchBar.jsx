import React from "react";

const GptSearchBar = () => {
  return (
    <div className="p-4 m-4 bg-black rounded-xl">
      <form className="bg-gradient-to-b from-red-500 to-red-900 rounded-2xl justify-center text-center">
        <input
          placeholder="I can suggest you what to watch"
          type="text"
          className="bg-zinc-800 text-white font-medium p-4 m-4 w-80 rounded-lg hover:scale-110 transition-transform ease-in-out"
        />
        <button className="p-4 m-4 py-4 w-32 hover:scale-110 hover:bg-black transition-transform ease-in-out shadow-md bg-gradient-to-r from-black to-zinc-800 rounded-md text-white text-xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
