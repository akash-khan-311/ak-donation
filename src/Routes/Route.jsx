import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Dontation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/donation", element: <Donation /> },
      {path: '/statistics', element:<Statistics/>}
    ],
  },
]);

export default Router;
