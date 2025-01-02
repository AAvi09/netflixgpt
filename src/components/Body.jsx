import React, { useEffect } from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import FinalSignUpForm from "./FinalSignUpForm";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
    {
      path: "/in",
      element: <SignUpForm />,
    },
    {
      path: "/finalsignup",
      element: <FinalSignUpForm />,
    },
    {
      errorElement: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
