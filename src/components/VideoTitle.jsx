import React from "react";

const VideoTitle = ({ title, overview, poster }) => {
  return (
    <div className="w-screen aspect-video top-20 absolute z-10 bg-gradient-to-r from-black pt-[10%] h-auto">
      <div className="-mt-10">
        <h1 className="font-bold text-6xl text-white p-4 m-4">{title}</h1>
        <p className="text-normal scale-[80%] w-[35%] text-white p-2 ">
          {overview}
        </p>
        <div className=" space-x-6 px-4 m-2">
          <button className="bg-gradient-to-r from-slate-800 rounded-sm text-white text-bold w-24 h-10 hover:bg-opacity-60">
            ▶️Play
          </button>
          <button className="bg-gradient-to-r from-gray-800 rounded-sm text-white text-bold w-24 h-10 mx-2 hover:bg-opacity-60">
            more info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
