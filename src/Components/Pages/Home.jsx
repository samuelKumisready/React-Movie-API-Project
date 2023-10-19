import React, { useEffect, useState } from "react";

import MovieCard from "../MovieCard";
import HomeSwipe from "../HomeSwipe";
import LoadingSpinner from "../LoadingSpinner";
function Home() {
  const [moviez, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDY4ODQ3NWUzYTI3NjgyYjNhNTk1NWRlODhmZmEyNiIsInN1YiI6IjYxYTVkNmI3OWQ2ZTMzMDAyZTVhNzZkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MLwMr7jqs29kBuIcjS2gpIIayDg0LzuP4v5qJqQA4vQ",
    },
  };
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch(
        (err) => {
          console.error("error", err);
          setIsLoading(false);
        },
        [moviez]
      );
  });
  // console.log(moviez);
  return (
    <div className="Home">
      {/* Carousel */}
      <HomeSwipe movies={moviez} />
      {/* Suggestion */}
      <div className="px-5 overflow-hidden">
        <h1 className="text-2xl font-bold text-blue-800">SUGGESTIONS</h1>
        {isLoading ? <LoadingSpinner /> : <MovieCard moviez={moviez} />}
      </div>
    </div>
  );
}

export default Home;
