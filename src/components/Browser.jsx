import React from "react";
import wick from "../assets/images/wick.jpg";
import wickCloseup from "../assets/images/wick closeup.jpg";

const Browser = () => {
  return (
    <div className="relative w-60">
      <img src={wick} />
      {/* <img src={wickCloseup} className="absolute"/> */}
      <div className="absolute w-44 top-0">
        <img src={wickCloseup} />
      </div>
    </div>
  );
};

export default Browser;
