import React from "react";

const Button = ({ handleOnclick, children }) => {
  return (
    <button
      onClick={handleOnclick}
      className=" block h-[50px] bg-slate-300 bg-opacity-30 mb-5 rounded-md px-2"
    >
      {children}
    </button>
  );
};

export default Button;
