import React, { useEffect } from "react"

import mainProps from "@/component-props/mainProps"

import { Poem } from "../pages/ShakespearesDen"
import Button from "./Button"

type FullPoemProps = {
  pageId: string
  poems?: Poem
  fullPoemView: string | null
  setFullPoemView: (value: string | null) => void
  theme: string
}

const FullPoem = ({
  pageId,
  poems,
  fullPoemView,
  setFullPoemView,
  theme,
}: FullPoemProps) => {
  const shakespeareTitle = poems?.title.slice(0, poems.title.indexOf(":"))
  const dickinsonTitle = poems?.title

  useEffect(() => {
    setTimeout(() => {
      const fullPoem = document.getElementById("Shakespeare")
      fullPoem?.scrollIntoView({ behavior: "smooth" })
    }, 700)
  }, [fullPoemView])

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
    <main id={pageId} className={poemCard}>
      <div className="w-1/2 flex flex-col items-center justify-center text-5xl">
        <div className="flex mt-8">
          <h1 className={titleClass}>
            {pageId === "Shakespeare" ? shakespeareTitle : dickinsonTitle}
          </h1>
          <Button
            onClick={() => setFullPoemView(null)}
            text={
              pageId === "Shakespeare" ? "Retrace Thy Steps" : "Return, O Wanderer"
            }
            className={poemButton}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center text-2xl">
        {poems?.lines.map((verse: string, index: number) => {
          return (
            <p className={verses} key={index}>
              {verse}
            </p>
          )
        })}
        <div className="w-full flex justify-end pr-12 p-6">
          <h2 className={authorClass}>{poems?.author}</h2>
        </div>
      </div>
    </main>
  )
}

export default FullPoem
