import React from "react"

import mainProps from "@/component-props/mainProps"

import { scrollToTop } from "@/service/scrollToTop"

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
  theme: string
}

const Main = ({
  poemsArray,
  setFullPoemView,
  loading,
  bloodNight,
  setBloodNight,
  theme
}: Props) => {
  let mainClass;
  let title;
  let titleClass;

  switch ( theme ) {
    case 'playwright':
      ({mainClass, title, titleClass} = mainProps.shakespeare.playwright)
      break;
    case 'bloodNight':
      ({mainClass, title, titleClass} = mainProps.shakespeare.bloodNight)
      break;
    case 'sylph':
      ({mainClass, title, titleClass} = mainProps.dickinson.sylph)
      break;
    case 'elegy':
      ({mainClass, title, titleClass} = mainProps.dickinson.elegy)
      break;
  }
  return (
    <main
      className={mainClass}
    >
      <div className="w-full flex justify-between mt-8 mb-12">
        <h2
          className={titleClass}
        >
          {title}
        </h2>
        <div className="flex flex-col items-center mt-4 gap-10">
          {/* <MusicPlayer theme= {!bloodNight ? "playwright" : "bloodNight"} /> */}
          <ThemeButton
            text={bloodNight ? "Playwright" : "Blood Night"}
            onClick={() => {
              setBloodNight(!bloodNight)
              scrollToTop()
            }}
            theme={!bloodNight ? "playwright" : "bloodNight"}
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
            theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      )}
    </main>
  )
}

export default Main
