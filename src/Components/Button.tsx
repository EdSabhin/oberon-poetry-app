import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <button className="border-none py-2 px-6 mt-4 font-bold bg-gradient-to-r from-black to-white hover:from-orange-200 hover:to-indigo-500 rounded italic ">
      Read Full Poem
    </button>
  );
};

export default Button;
