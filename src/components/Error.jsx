// import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-container">
      <div className="error-box">
        <h1>kindly use website correctly😠😡👿</h1>
        <h1>nothing went wrong </h1>
        <h1>i am again saying check correctly⚔☠❌</h1>
        <h1>
          {err.status} : {err.statusText}
        </h1>
        <h1>{err.data}</h1>
      </div>
    </div>
  );
};

export default Error;
