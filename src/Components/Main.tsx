import React, { useState } from "react";
import CardsSection from "./CardsSection";
import Button from "./Button";
import LoadingImage from "./LoadingImage";

type Props = {
  poemsArray: [];
  bgColor: boolean;
  setBgColor: (value: boolean) => void;
  setFullPoemView: (value: number) => void;
  loading: boolean;
};

const Main = ({
  poemsArray,
  bgColor,
  setBgColor,
  setFullPoemView,
  loading,
}: Props) => {
  console.log(loading);

  return (
    <main
      className={`${
        bgColor
          ? "bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900"
          : "bg-gradient-to-r from-black via-gray-500 to-black"
      } w-full flex flex-col  pt-6 pb-12 text-white items-center
       `}
    >
      <div className="w-100 flex flex-row m-8 ">
        {" "}
        <h2 className="text-5xl p-4 pb-1 pr-20 underline decoration-1 underline-offset-6 decoration-amber-300 decoration-solid text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-yellow-400">
          {"William's Den of Sonnets"}
        </h2>
        <Button
          text={"Blood Night / Playwright"}
          onClick={() => setBgColor(!bgColor)}
        />
      </div>

      {loading ? (
        <LoadingImage image="/feather-pen.png" />
      ) : (
        <CardsSection poemsArray={poemsArray} setFullPoemView={setFullPoemView} />
      )}
    </main>
  );
};

export default Main;
