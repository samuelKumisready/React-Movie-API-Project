import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <ThreeCircles
        height="100"
        width="100"
        color="#004CFF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default LoadingSpinner;
