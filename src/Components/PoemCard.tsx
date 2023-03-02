import Image from "next/image";
import React from "react";
import Button from "./Button";

type Props = {
  title: string;
  author: string;
  poem: string[];
};

const PoemCard = ({ title, author, poem }: Props) => {
  const shortPoem = poem.slice(0, 5);
  const shortTitle = title.slice(0, title.indexOf(":"));

  return (
    <div
      className="relative w-max p-8 border-r-4 border-orange-300 hover:bg-gradient-to-r from-red-500 to-gray-400
      bg-gradient-to-b hover:from bg-red-500 hover:to-red-300 
    hover:border-indigo-300 rounded transition ease-in-out delay-150 hover:-translate-y-4 duration-300"
    >
      <h1 className="py-1 text-4xl text-indigo-300">{shortTitle}</h1>
      <h2 className="pt-1 pb-10 text-xl text-yellow-100">{author}</h2>
      {shortPoem.map((poemVerse, index) => {
        return (
          <p
            key={index}
            className="italic hover:bg-gradient-to-r from-indigo-300 to-indigo-700"
          >
            {poemVerse}
          </p>
        );
      })}
      <p className="pt-3">.................. ✏ </p>
      <div className="w-full flex justify-end pt-4">
        <Button />
      </div>
      <Image
        width={100}
        height={100}
        className="absolute top-5 right-7 rounded-full"
        src="https://i.pinimg.com/736x/fa/34/b8/fa34b83a0826dc3a6f701df417b3d409.jpg"
        alt=""
      />
    </div>
  );
};

export default PoemCard;
