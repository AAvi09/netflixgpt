import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <div className=" w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden -z-1">
        <img
          className="  top-0 left-0 w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
          srcSet="
        https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg 1000w,
        https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_medium.jpg 1500w,
        https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg 1800w
      "
          alt="Netflix Background"
        />
      </div>
      <Header />
    </div>
  );
};

export default Login;
