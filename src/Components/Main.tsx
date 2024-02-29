import React from "react"
import CardsSection from "./CardsSection"
import Button from "./Button"
import LoadingImage from "./LoadingImage"
import MusicPlayer from "./MusicPlayer"
import { songData } from "@/service/songData"

type Props = {
  poemsArray: []
  bgColor: boolean
  setBgColor: (value: boolean) => void
  setFullPoemView: (value: number) => void
  loading: boolean
}

const Main = ({
  poemsArray,
  bgColor,
  setBgColor,
  setFullPoemView,
  loading,
}: Props) => {
  return (
    <main
      className={`${
        bgColor
          ? "bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900"
          : "bg-gradient-to-r from-black via-gray-500 to-black"
      } w-full flex flex-col items-start py-8 px-48 text-slate-100
       `}
    >
      <div className="w-full flex justify-between mt-8 mb-12 ">
        <h2 className="text-5xl py-4 pb-1 underline decoration-1 underline-offset-8 decoration-amber-300 decoration-solid text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 from-[10%] to-amber-200">
          {"William's Den of Sonnets"}
        </h2>
        <div className="flex items-center mt-4 gap-10">
          <MusicPlayer songs={songData} />
          <Button
            text={"Blood Night / Playwright"}
            onClick={() => setBgColor(!bgColor)}
          />
        </div>
      </div>

      {loading ? (
        <LoadingImage image="/feather-pen.png" />
      ) : (
        <CardsSection
          poemsArray={poemsArray}
          setFullPoemView={setFullPoemView}
        />
      )}
    </main>
  )
}

export default Main
