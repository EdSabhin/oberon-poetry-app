import React from "react";
import { Old_Standard_TT } from "next/font/google";

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] });

type Props = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${OldStandardTT.className} border-none p-2 px-6 mt-4 font-bold bg-gradient-to-r from-gray-400 to-gray-600 rounded italic hover:ring-2 hover:ring-amber-100 transition ease-in-out delay-100 text-lg text-amber-300 hover:text-amber-100`}
    >
      {text}
    </button>
  );
};

export default Button;
