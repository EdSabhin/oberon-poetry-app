import React from "react";
import { Poem } from "./HomePage";
import PoemCard from "./PoemCard";

type Props = {
  poemsArray: [];
};

const CardsSection = ({ poemsArray }: Props) => {
  return (
    <section className="w-full flex flex-wrap justify-center gap-12 p-10">
      {poemsArray.map((poem: Poem, index: number) => {
        return (
          <PoemCard
            key={index}
            title={poem.title}
            author={poem.author}
            poem={poem.lines}
          />
        );
      })}
    </section>
  );
};

export default CardsSection;
