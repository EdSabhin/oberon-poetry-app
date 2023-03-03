import React from "react";
import CardsSection from "./CardsSection";
import Button from "./Button";

type Props = {
  poemsArray: [];
  bgColor: boolean;
  setBgColor: any;
};

const Main = ({ poemsArray, bgColor, setBgColor }: Props) => {
  return (
    <main
      className={`${
        bgColor
          ? "bg-gradient-to-r from-pink-900 to-black"
          : "bg-gradient-to-r from-pink-700 to-pink-200 "
      } w-full flex flex-col items-center pt-6 pb-12 text-white
       `}
    >
      <h2 className="text-5xl py-5  text-yellow-100">
        {"William's Den of Sonnets"}
      </h2>
      <CardsSection poemsArray={poemsArray} />
      <Button
        text={"Darkness / Lightness"}
        onClick={() => setBgColor(!bgColor)}
      />
    </main>
  );
};

export default Main;
