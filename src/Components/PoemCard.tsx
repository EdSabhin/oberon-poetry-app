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
    <div className="w-max p-8 border border-red-500 relative rounded">
      <h1 className="py-1 text-4xl text-orange-300">{shortTitle}</h1>
      <h2 className="pt-1 pb-10 text-xl text-yellow-100">{author}</h2>
      {shortPoem.map((poemVerse, index) => {
        return (
          <p key={index} className="italic">
            {poemVerse}
          </p>
        );
      })}
      <div className="w-full flex justify-end pt-4">
        <Button />
      </div>
      <Image
        width={100}
        height={100}
        className="absolute top-6 right-6 rounded-full"
        src="https://i.pinimg.com/736x/fa/34/b8/fa34b83a0826dc3a6f701df417b3d409.jpg"
        alt=""
      />
    </div>
  );
};

export default PoemCard;
