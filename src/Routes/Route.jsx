import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Dontation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Campaigns from "../components/Campaigns/Campaigns";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/data.json") },
      { path: "/donation", element: <Donation /> },
      { path: "/statistics", element: <Statistics /> },
      {
        path: "/campaign/:id",
        element: <Campaigns />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default Router;
