import React, { useState } from "react";
import CardsSection from "./CardsSection";
import Button from "./Button";
import LoadingImage from "./LoadingImage";

type Props = {
  poemsArray: [];
  bgColor: boolean;
  setBgColor: (value: boolean) => void;
  loading: boolean;
};

const Main = ({ poemsArray, bgColor, setBgColor, loading }: Props) => {
  console.log(loading);

  return (
    <main
      className={`${
        bgColor
          ? "bg-gradient-to-r from-gray-900 to-black"
          : "bg-gradient-to-r from-gray-900 to-gray-400 "
      } w-full flex flex-col  pt-6 pb-12 text-white items-center
       `}
    >
      <h2 className="text-5xl p-4 pb-1 underline decoration-1 underline-offset-6 decoration-amber-300 decoration-solid text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-yellow-400">
        {"William's Den of Sonnets"}
      </h2>
      {loading ? (
        <LoadingImage image="/feather-pen.png" />
      ) : (
        <CardsSection poemsArray={poemsArray} />
      )}
      <Button
        text={"Darkness / Lightness"}
        onClick={() => setBgColor(!bgColor)}
      />
    </main>
  );
};

export default Main;
