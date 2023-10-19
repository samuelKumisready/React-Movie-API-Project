import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./Components/Pages/Movies.jsx";
import TopIMDB from "./Components/Pages/TopIMDB.jsx";
import Tvseries from "./Components/Pages/Tvseries.jsx";
import Home from "./Components/Pages/Home.jsx";
import MovieDetails from "./Components/Pages/MovieDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "topimdb",
        element: <TopIMDB />,
      },
      {
        path: "tvseries",
        element: <Tvseries />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
