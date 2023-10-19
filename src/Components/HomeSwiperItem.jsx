import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import Button from "./Button";
const HomeSwiperItem = ({
  movies,
  index,
  currentIndex,
  nextSlide,
  prevSlide,
}) => {
  return (
    <div
      className={`overflow-hidden transition-all transform duration-300 ${
        index === currentIndex
          ? "translate-x-0"
          : index === currentIndex - 1
          ? "translate-x-[-100%]"
          : "translate-x-[100%]"
      }`}
    >
      {index === currentIndex ? (
        <div className=" flex w-full mb-4 h-[480px] relative">
          <img
            className="w-full h-[480px] object-cover object-center"
            src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
            alt={movies.title}
          />
          <div className="absolute inset-0 w-full h-full bg-black/60"></div>
          <div className="absolute w-full h-full px-4 font-semibold text-white shadow-md top-64">
            <h1 className="mb-3">{movies.title}</h1>
            <div className="flex mb-3 space-x-2">
              <h1 className="px-3 text-white bg-yellow-500 rounded-lg w-min">
                HD
              </h1>
              <h1>
                <span>Ratings:</span> {movies.vote_average}
              </h1>
              <h1>
                <span>Language:</span> {movies.original_language}
              </h1>
            </div>
            <p className="w-[75%] mb-3">{movies.overview}</p>
            <button className="flex items-center px-2 py-1 space-x-1 text-lg text-white bg-blue-600 rounded">
              <AiFillPlayCircle /> <h3>watch now</h3>
            </button>
          </div>
          <div className="fixed text-white right-10 top-72">
            <Button
              children={<RiArrowLeftSFill size={30} />}
              handleOnclick={prevSlide}
            />
            <Button
              children={<RiArrowRightSFill size={30} />}
              handleOnclick={nextSlide}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomeSwiperItem;
