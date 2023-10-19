import React from "react";
import { useLocation } from "react-router-dom";
import MovieDatilsCard from "../MovieDatilsCard";

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state;
  console.log(location);
  return (
    <div className="movieDetails">
      {movie ? <MovieDatilsCard movie={movie} /> : <div></div>}
    </div>
  );
};

export default MovieDetails;
