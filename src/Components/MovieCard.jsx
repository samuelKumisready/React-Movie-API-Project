import React from "react";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const MovieCard = ({ moviez }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-10 sm:grid-cols-3 md:grid-cols-4">
      {moviez.map((movies) => (
        <Link key={movies.id} to={`/movies/${movies.id}`} state={movies}>
          <div className="relative group">
            <img
              className="rounded-md "
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.original_title}
            />
            <h1 className="absolute w-full text-lg font-bold text-center text-white bg-gray-900 bg-opacity-25 bottom-2 ">
              {movies.title}
            </h1>
            <div className="absolute left-0 px-2 font-semibold text-white bg-yellow-500 top-5">
              HD
            </div>
            <div className="hidden transition-opacity duration-300 ease-in-out group-hover:block">
              <div className="opacity-70 absolute inset-0 w-full h-full bg-gradient-to-b from-transparent from-55% via-blue-600  to-blue-800"></div>
              <div className="absolute top-[45%] left-[45%] text-white shadow-sm cursor-pointer  ">
                <AiFillPlayCircle size={45} />
              </div>
            </div>
            <div className="hidden group-hover:block">
              <div className="absolute z-20 w-64 px-5 rounded top-5 -right-[260px] py-5 bg-slate-700">
                <h1 className="mb-2 text-xl font-semibold text-orange-500">
                  {movies.title}
                </h1>
                <div className="flex items-center mb-2 space-x-2 font-semibold">
                  <h1 className="px-3 text-white bg-blue-600 rounded-lg shrink-0">
                    HD
                  </h1>
                  <h1 className="text-blue-600 ">{movies.release_date}</h1>
                  <div className="flex text-blue-600">
                    <AiFillStar size={25} />
                    {movies.vote_average}
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-400 mb-2"></div>
                <p className="mb-3 text-sm text-white">
                  {movies.overview.slice(0, 280)}
                </p>
                <button className="flex items-center justify-center w-full px-2 py-1 space-x-1 text-lg text-white bg-blue-600 rounded">
                  <AiFillPlayCircle /> <h3>watch now</h3>
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieCard;
