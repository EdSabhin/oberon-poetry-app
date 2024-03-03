import React from "react"

import mainProps from "@/component-props/mainProps"
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
          ? mainProps.shakespeare.bloodNight.class
          : mainProps.shakespeare.playwright.class
      } `}
    >
      <div className="w-full flex justify-between mt-8 mb-12 ">
        <h2 className={`${bloodNight ? mainProps.shakespeare.bloodNight.titleClass : mainProps.shakespeare.playwright.titleClass}`}>
          {`${bloodNight ? mainProps.shakespeare.bloodNight.title : mainProps.shakespeare.playwright.title}`}
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
