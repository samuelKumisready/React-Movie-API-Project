import React, { useEffect, useState } from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HomeSwiperItem from "./HomeSwiperItem";

const HomeSwipe = ({ movies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (movies.length !== 0) {
      setCurrentIndex((currentIndex + 1) % movies.length);
    }
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? movies.length - 1 : currentIndex - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Move to the next movie every 5 seconds
    }, 10000); // 5000 milliseconds = 5 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(interval);
    };
  }, [currentIndex]);
  return (
    <div>
      {movies.map((movie, index) => (
        <HomeSwiperItem
          key={index}
          movies={movie}
          currentIndex={currentIndex}
          index={index}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      ))}
    </div>
  );
};

export default HomeSwipe;
