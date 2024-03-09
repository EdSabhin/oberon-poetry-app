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
  theme: string
}

const MainShakespeare = ({
  poemsArray,
  setFullPoemView,
  loading,
  bloodNight,
  setBloodNight,
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
  }

  return (
    <main className={mainClass}>
      <div className="w-full flex justify-between mt-8 mb-12">
        <h2 className={titleClass}>{title}</h2>
        <div className="flex flex-col items-center mt-4 gap-10">
          <MusicPlayer theme={!bloodNight ? "playwright" : "bloodNight"} />
          <ThemeButton
            text={theme === "playwright" ? "Playwright" : "Blood Night"}
            onClick={() => {
              setBloodNight && setBloodNight(!bloodNight)
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
          id="Shakespeare"
          poemsArray={poemsArray}
          setFullPoemView={setFullPoemView}
          theme={theme}
        />
      )}
    </main>
  )
}

export default MainShakespeare
