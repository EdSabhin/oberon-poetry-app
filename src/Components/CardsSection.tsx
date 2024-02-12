import React from "react";
import { Poem } from "../pages/HomePage";
import PoemCard from "./PoemCard";

type Props = {
  poemsArray: [];
  setFullPoemView: (value: number) => void;
};

const CardsSection = ({ poemsArray, setFullPoemView }: Props) => {
  return (
    <section className="w-full flex flex-wrap justify-center gap-16 p-10 ">
      {poemsArray.map((poem: Poem, index: number) => {
        return (
          <PoemCard
            key={index}
            index={index}
            title={poem.title}
            author={poem.author}
            poem={poem.lines}
            setFullPoemView={setFullPoemView}
          />
        );
      })}
    </section>
  );
};

export default CardsSection;
