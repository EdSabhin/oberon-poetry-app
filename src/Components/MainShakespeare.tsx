import React, { useState, useEffect } from "react"

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

  // Scroll to Main after closing FullPoem
  useEffect(() => {
    const mainSection = document.getElementById("mainSection")
    mainSection?.scrollIntoView({ behavior: "smooth" })
  }, [fullPoemView])

  // Theme
  let mainClass
  let title
  let titleClass
  let utilityButton

  switch (theme) {
    case "playwright":
      ;({ mainClass, title, titleClass, utilityButton } =
        mainProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ mainClass, title, titleClass, utilityButton } =
        mainProps.shakespeare.bloodNight)
      break
  }

  return (
    <main id="mainSection" className={mainClass}>
      <div className="w-full flex flex-col md:flex-row justify-between mt-8 mb-12 gap-10">
        <div className="flex flex-col gap-10 md:gap-20">
          <h2 className={titleClass}>{title}</h2>
          <div className="flex md:gap-12">
            <Button
              text="Search Sonnets"
              onClick={handleOpenSidebar}
              className={utilityButton}
            />
            <Button
              text="Shuffle Poems"
              onClick={() => {
                randomizePoems()
              }}
              className={utilityButton}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 gap-10">
          <ThemeButton
            text={theme === "playwright" ? "Blood Night" : "Playwright"}
            onClick={() => {
              setBloodNight && setBloodNight(!bloodNight)
              // scrollToTop()
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
