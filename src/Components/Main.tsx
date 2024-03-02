import React from "react"

import { scrollToTop } from "@/service/scrollToTop"
import { songData } from "@/service/songData"

import CardsSection from "./CardsSection"
import ThemeButton from "./ThemeButton"
import LoadingImage from "./LoadingImage"
import MusicPlayer from "./MusicPlayer"




type Props = {
  poemsArray: []
  setFullPoemView: (value: number) => void
  loading: boolean
  bloodNight: boolean
  setBloodNight: (value: boolean) => void
}

const Main = ({
  poemsArray,
  setFullPoemView,
  loading,
  bloodNight,
  setBloodNight,
}: Props) => {
  return (
    <main
      className={`${
        bloodNight
          ? "bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900"
          : "bg-gradient-to-r from-black via-gray-500 to-black"
      } w-full flex flex-col items-start pt-8 pb-20 px-48 text-slate-100
       `}
    >
      <div className="w-full flex justify-between mt-8 mb-12 ">
        <h2 className="text-6xl py-4 pb-1 underline decoration-1 underline-offset-8 decoration-amber-300 decoration-solid text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 from-[10%] to-amber-200">
          {"Oberon's Den of Sonnets"}
        </h2>
        <div className="flex flex-col items-center mt-4 gap-10">
          <MusicPlayer songs={songData} />
          <ThemeButton
            text={bloodNight ? "Playwright" : "Blood Night"}
            onClick={() => {
              setBloodNight(!bloodNight)
              scrollToTop()
            }}
            bloodNight={bloodNight}
            className={
              !bloodNight
                ? ""
                : "bg-gradient-to-r from-gray-900 via-rose-900 to-gray-900"
            }
          />
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage image="/feather-pen.png" />
        </div>
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
