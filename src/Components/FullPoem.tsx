import React from "react";
import Button from "./Button";

type PoemsArray = {
  title: string;
  author: string;
  lines: string[];
};

type Props = {
  poemsArray: PoemsArray;
  setFullPoemView: (value: null) => void;
};

const FullPoem = ({ poemsArray, setFullPoemView }: Props) => {
  const shortTitle = poemsArray.title.slice(0, poemsArray.title.indexOf(":"));
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 py-4 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900">
      <div className="w-1/2 flex flex-col items-start justify-center text-5xl">
        <h1 className="p-2 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900 underline decoration-amber-100 hover:underline-offset-4">
          {shortTitle}
        </h1>
        <Button onClick={() => setFullPoemView(null)} text="Go Back" />
      </div>
      <div className="w-1/2 mb-7 flex flex-col items-center justify-center text-2xl">
        {poemsArray.lines.map((verse: string, index: number) => {
          return (
            <p
              className="w-max rounded text-white transition-ease-in-out delay-400  hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-red-400 hover:to-indigo-600 p-1 text-2xl hover:text-amber-200 tracking-wide"
              key={index}
            >
              {verse}
            </p>
          );
        })}
        <div className="w-full flex justify-end pr-20 pt-6">
          <h2 className="pt-1 pb-2 text-2xl text-yellow-200">
            {poemsArray.author}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FullPoem;
