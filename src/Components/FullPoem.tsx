import React, { useEffect } from "react"

import mainProps from "@/component-props/mainProps"

import { Poem } from "../pages/ShakespearesDen"
import Button from "./Button"

type Props = {
  poemsArray: Poem
  setFullPoemView: (value: null) => void
  theme: string
}

const FullPoem = ({ poemsArray, setFullPoemView, theme }: Props) => {
  const shortTitle = poemsArray.title.slice(0, poemsArray.title.indexOf(":"))
  
  /* Theme */
  let poemCard
  let poemButton
  let titleClass
  let authorClass
  let verses: string

  switch (theme) {
    case "playwright":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
        authorClass,
        verses,
      } = mainProps.shakespeare.playwright.fullPoem)
      break
    case "bloodNight":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
        authorClass,
        verses,
      } = mainProps.shakespeare.bloodNight.fullPoem)
      break
  }

  return (
    <main className={poemCard}>
      <div className="w-1/2 flex flex-col items-center justify-center text-5xl">
        <div className="flex mt-8">
          <h1 className={titleClass}>{shortTitle}</h1>
          <Button
            onClick={() => setFullPoemView(null)}
            text="Retrace Thy Steps"
            className={poemButton}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center text-2xl">
        {poemsArray.lines.map((verse: string, index: number) => {
          return (
            <p className={verses} key={index}>
              {verse}
            </p>
          )
        })}
        <div className="w-full flex justify-end pr-12 p-6">
          <h2 className={authorClass}>{poemsArray.author}</h2>
        </div>
      </div>
    </main>
  )
}

export default FullPoem
