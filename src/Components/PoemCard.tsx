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
      className="relative md:w-[465px] md:h-[550px] p-8 border-l-8 border-transparent bg-gradient-to-b from-gray-900 to-gray-600 hover:bg-gradient-to-r hover:to-red-300 
    hover:border-amber-200 rounded transition ease-in-out delay-400 hover:-translate-y-4 duration-300 group"
    >
      <h1 className="py-2 text-5xl hover:underline hover:decoration-2 hover:decoration-amber-100 hover:underline-offset-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-900">
        {shortTitle}
      </h1>
      <h2 className="pt-1 pb-10 text-2xl text-yellow-100">{author}</h2>
      {shortPoem.map((poemVerse, index) => {
        return (
          <p
            key={index}
            className="w-max rounded transition-ease-in-out delay-400  hover:scale-105 duration-300 hover:bg-gradient-to-r from-indigo-400 to-red-400 p-1 text-2xl hover:text-amber-300 tracking-wide"
          >
            {poemVerse}
          </p>
        );
      })}
      <div className="flex pt-3 gap-2 items-end">
        <p className="pt-2 text-2xl ">..................</p>
        <Image
          width={50}
          height={50}
          className="mb-2  group-hover:animate-pulse-faster"
          src="/feather-pen.png"
          alt=""
        />
      </div>
      <div className="w-full flex justify-end pt-4">
        <Button text="Full Poem" />
      </div>
      <Image
        width={"100"}
        height={"100"}
        className="absolute top-5 right-7 rounded-full"
        src="https://i.pinimg.com/736x/fa/34/b8/fa34b83a0826dc3a6f701df417b3d409.jpg"
        alt=""
      />
    </div>
  );
};

export default PoemCard;
