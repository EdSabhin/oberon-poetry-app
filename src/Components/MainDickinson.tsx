import React from "react"

import mainProps from "@/component-props/mainProps"

import { scrollToTop } from "@/service/scrollToTop"

import LoadingImage from "./LoadingImage"
import MusicPlayer from "./MusicPlayer"
import ThemeButton from "./ThemeButton"
import CardsSection from "./CardsSection"

type Props = {
  poemsArray: []
  setFullPoemView: (value: number) => void
  loading: boolean
  bloodNight?: boolean
  setBloodNight?: (value: boolean) => void
  elegy?: boolean
  setElegy?: (value: boolean) => void
  theme: string
}

const MainDickinson = ({
  poemsArray,
  setFullPoemView,
  loading,
  elegy,
  setElegy,
  theme,
}: Props) => {
  /* Theme */
  let mainClass
  let title
  let titleClass

  switch (theme) {
    case "sylph":
      ;({ mainClass, title, titleClass } = mainProps.dickinson.sylph)
      break
    case "elegy":
      ;({ mainClass, title, titleClass } = mainProps.dickinson.elegy)
      break
  }

  return (
    <main className={mainClass}>
      <div className="w-full flex justify-between mt-8 mb-12">
        <h2 className={titleClass}>{title}</h2>
        <div className="flex items-center mt-4 gap-10">
          {/* <MusicPlayer theme={!elegy ? "sylph" : "elegy"} /> */}
          <ThemeButton
            text={theme === "sylph" ? "Elegy" : "Sylph"}
            onClick={() => {
              setElegy && setElegy(!elegy)
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
              !elegy ? "/images/inkwell.png" : "/images/quill-icon-black.png"
            }
          />
        </div>
      ) : (
        <CardsSection
          id="Dickinson"
          poemsArray={poemsArray}
          setFullPoemView={setFullPoemView}
          theme={theme}
        />
      )}
    </main>
  )
}

export default MainDickinson
