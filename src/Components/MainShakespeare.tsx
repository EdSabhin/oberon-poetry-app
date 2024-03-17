import React, { useEffect, useState } from "react"

import mainProps from "@/component-props/mainProps"
import { Poem } from "@/pages/ShakespearesDen"
import { scrollToTop } from "@/service/scrollToTop"
import shufflePoems from "@/service/shufflePoems"
import LoadingImage from "./LoadingImage"
import Button from "./Button"
import MusicPlayer from "./MusicPlayer"
import ThemeButton from "./ThemeButton"
import CardsSection from "./CardsSection"

type Props = {
  poems: Poem[]
  handleOpenSidebar: () => void
  fullPoemView: string | null
  setFullPoemView: (value: string) => void
  loading: boolean
  bloodNight?: boolean
  setBloodNight?: (value: boolean) => void
  theme: string
}

const MainShakespeare = ({
  poems,
  handleOpenSidebar,
  fullPoemView,
  setFullPoemView,
  loading,
  bloodNight,
  setBloodNight,
  theme,
}: Props) => {
  // Shuffle Poems
  const [randomPoems, setRandomPoems] = useState<Poem[]>([])
  const [shuffledPoems, setShuffledPoems] = useState<boolean>(false)

  const randomizePoems = () => {
    const randomizedPoems = shufflePoems(poems).slice(0, 8)
    setRandomPoems(randomizedPoems)
    setShuffledPoems(true)
  }


  // Scroll to Main
  useEffect(() => {
    const mainSection = document.getElementById("mainSection")
    mainSection?.scrollIntoView({ behavior: "smooth" })
  }, [fullPoemView])

  // Theme 
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
    <main id="mainSection" className={mainClass}>
      <div className="w-full flex justify-between mt-8 mb-12">
        <div className="flex flex-col gap-20">
          <h2 className={titleClass}>{title}</h2>
          <div className="flex gap-12">
            <Button
              text="Search Sonnets"
              onClick={handleOpenSidebar}
              className="w-[15rem] h-[3rem] flex justify-center py-3 pl-8 pr-8 gap-5 text-stone-200 hover:text-orange-100 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md rounded-bl-full rounded-tr-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out"
            />
            <Button
              text="Shuffle Poems"
              onClick={() => {
                randomizePoems()
              }}
              className="w-[15rem] h-[3rem] flex justify-center py-3 pl-8 pr-8 gap-5 text-stone-200 hover:text-orange-100 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-900 hover:to-stone-700 shadow-md rounded-bl-full rounded-tr-full shadow-stone-950 hover:translate-x-2 transition duration-500 ease-in-out"
            />
          </div>
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
          <MusicPlayer
            theme={!bloodNight ? "playwright" : "bloodNight"}
          />
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
          pageId="Shakespeare"
          poems={poems}
          setFullPoemView={setFullPoemView}
          randomPoems={randomPoems}
          shuffledPoems={shuffledPoems}
          theme={theme}
        />
      )}
    </main>
  )
}

export default MainShakespeare
