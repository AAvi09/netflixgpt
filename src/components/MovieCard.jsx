import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-32 bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img
        alt="movie card"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="w-auto h-52 object-fit"
      />
    </div>
  );
};

export default MovieCard;
