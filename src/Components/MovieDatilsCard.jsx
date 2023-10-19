import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
const MovieDatilsCard = ({ movie }) => {
  return (
    <div className="movieDetailsCard">
      <div className="relative mb-5 max-w-7xl w-full object-center h-[550px]">
        <img
          className="object-cover w-full h-full"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-gradient-to-t from-black to-transparent">
          <div className="absolute top-[40%] cursor-pointer hover:text-blue-600 active:text-blue-400 text-blue-500 duration-300 transistion transform">
            <AiFillPlayCircle size={60} />
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex mx-2 mb-5 space-x-5">
        <div>
          <img
            className="w-40 rounded-md h-52"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="w-64 ">
          <h1 className="text-3xl font-bold text-blue-800">{movie.title}</h1>
          <div>
            {console.log(movie)}
            <div>HD</div> <div> {movie.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDatilsCard;
