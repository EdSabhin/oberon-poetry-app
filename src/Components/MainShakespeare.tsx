import React from "react"

import mainProps from "@/component-props/mainProps"

import { scrollToTop } from "@/service/scrollToTop"

import LoadingImage from "./LoadingImage"
import Button from "./Button"
import MusicPlayer from "./MusicPlayer"
import ThemeButton from "./ThemeButton"
import CardsSection from "./CardsSection"

type Props = {
  poemsArray: []
  handleOpenSidebar: () => void
  setFullPoemView: (value: number) => void
  loading: boolean
  bloodNight?: boolean
  setBloodNight?: (value: boolean) => void
  theme: string
}

const MainShakespeare = ({
  poemsArray,
  handleOpenSidebar,
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
        <div className="flex flex-col gap-20">
          <h2 className={titleClass}>{title}</h2>
          <Button
            text="Search Sonnets"
            onClick={handleOpenSidebar}
            className="w-[15rem] h-[3rem] flex justify-center py-3 pl-8 pr-8 gap-5 text-stone-200 hover:text-orange-100 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md rounded-bl-full rounded-tr-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col items-center mt-4 gap-10">
          <ThemeButton
            text={theme === "playwright" ? "Blood Night" : "Playwright"}
            onClick={() => {
              setBloodNight && setBloodNight(!bloodNight)
              scrollToTop()
            }}
            theme={theme}
          />
          <MusicPlayer theme={!bloodNight ? "playwright" : "bloodNight"} />
        </div>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage
            image={
              !bloodNight
                ? "/images/quill-playwright.png"
                : "/images/quill-blood-bright.png"
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
