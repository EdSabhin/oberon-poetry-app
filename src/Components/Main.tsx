import React from "react"

import mainProps from "@/component-props/mainProps"

import { scrollToTop } from "@/service/scrollToTop"

import LoadingImage from "./LoadingImage"
import MusicPlayer from "./MusicPlayer"
import ThemeButton from "./ThemeButton"
import CardsSection from "./CardsSection"

type Props = {
  id: number
  poemsArray: []
  setFullPoemView: (value: number) => void
  loading: boolean
  bloodNight?: boolean
  setBloodNight?: (value: boolean) => void
  elegy?: boolean
  setElegy?: (value: boolean) => void
  theme: string
}

const Main = ({
  id,
  poemsArray,
  setFullPoemView,
  loading,
  bloodNight,
  setBloodNight,
  elegy,
  setElegy,
  theme,
}: Props) => {
  /* Theme */
  let mainClass
  let title
  let titleClass

  switch (theme) {
    case "playwright":
      ;({ mainClass, title, titleClass } = mainProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ mainClass, title, titleClass } = mainProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ mainClass, title, titleClass } = mainProps.dickinson.sylph)
      break
    case "elegy":
      ;({ mainClass, title, titleClass } = mainProps.dickinson.elegy)
      break
  }

  // Theme Button Text
  let themeButtonTextShakespeare
  let themeButtonTextDickinson

  if (bloodNight) {
    themeButtonTextShakespeare = "Playwright"
  } else {
    themeButtonTextShakespeare = "Blood Night"
  }

  if (elegy) {
    themeButtonTextDickinson = "Sylph"
  } else {
    themeButtonTextDickinson = "Elegy"
  }

  return (
    <main className={mainClass}>
      <div className="w-full flex justify-between mt-8 mb-12">
        <h2 className={titleClass}>{title}</h2>
        <div className="flex flex-col items-center mt-4 gap-10">
          <ThemeButton
            text={
              id === 1 ? themeButtonTextShakespeare : themeButtonTextDickinson
            }
            onClick={() => {
              if (setBloodNight) {
                setBloodNight(!bloodNight)
              } else if (setElegy) {
                setElegy(!elegy)
              }
              scrollToTop()
            }}
            theme={theme}
          />
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage
            image={
              !bloodNight
                ? "/images/quill-icon-gray.png"
                : "/images/quill-icon-black.png"
            }
          />
        </div>
      ) : (
        <CardsSection
          id={""}
          poemsArray={poemsArray}
          setFullPoemView={setFullPoemView}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      )}
    </main>
  )
}

export default Main
