import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="border-none p-2 px-6 mt-4 font-bold bg-gradient-to-r from-red-800 to-pink-500 hover:from-pink-500 hover:to-gray-400 rounded italic ring-2 ring-amber-50 "
    >
      {text}
    </button>
  );
};

export default Button;
