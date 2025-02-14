import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggeestion from "./GptMovieSuggeestion";

const GptSearch = () => {
  return (
    <div>
      <div className=" absolute  top-40 bg-black  w-screen -mt-20 h-screen font-bold z-20">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          srcSet="
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg 1000w,
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg 1500w,
                https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg 1800w
              "
          alt="Netflix Background"
        />
        <GptSearchBar />
        <div className="bg-black ">
          <GptMovieSuggeestion />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
