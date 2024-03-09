import React from "react"

import mainProps from "@/component-props/mainProps"

import { Poem } from "../pages/ShakespearesDen"
import Button from "./Button"

type Props = {
  id?: string
  poemsArray: Poem
  setFullPoemView: (value: null) => void
  theme: string
}

const FullPoem = ({ id, poemsArray, setFullPoemView, theme }: Props) => {
  const shakespeareTitle = poemsArray.title.slice(
    0,
    poemsArray.title.indexOf(":"),
  )
  const dickinsonTitle = poemsArray.title

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
    case "sylph":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
        authorClass,
        verses,
      } = mainProps.dickinson.sylph.fullPoem)
      break
    case "elegy":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
        authorClass,
        verses,
      } = mainProps.dickinson.elegy.fullPoem)
      break
  }

  return (
    <main className={poemCard}>
      <div className="w-1/2 flex flex-col items-center justify-center text-5xl">
        <div className="flex mt-8">
          <h1 className={titleClass}>
            {id === "Shakespeare" ? shakespeareTitle : dickinsonTitle}
          </h1>
          <Button
            onClick={() => setFullPoemView(null)}
            text={
              id === "Shakespeare" ? "Retrace Thy Steps" : "Return, O Wanderer"
            }
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
