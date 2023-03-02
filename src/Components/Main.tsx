import React from "react";
import CardsSection from "./CardsSection";

type Props = {
  poemsArray: [];
};

const Main = ({ poemsArray }: Props) => {
  return (
    <main
      className="w-full flex flex-col items-center py-6
      bg-gradient-to-r from-yellow-800 to-green-200 text-white"
    >
      <h2 className="text-5xl py-4">{"William's Den of Sonnets"}</h2>
      <CardsSection poemsArray={poemsArray} />
    </main>
  );
};

export default Main;
