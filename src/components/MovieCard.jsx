import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(IMG_CDN_URL + posterPath);
  return (
    <div className="w-44 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img
        alt="movie card"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="w-full h-60 object-cover"
      />
    </div>
  );
};

export default MovieCard;
