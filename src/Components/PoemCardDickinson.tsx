import React from "react"
import Image from "next/image"

import mainProps from "@/component-props/mainProps"

import { GiFairyWings } from "react-icons/gi"

type Props = {
  title: string
  author?: string
  poem: string[]
  index: number
  setFullPoemView: (value: number) => void
  theme: string
}

const PoemCardDickinson = ({
  title,
  author,
  index,
  setFullPoemView,
  theme,
}: Props) => {
  const poemTitle = title

  /* Theme */
  let poemCard
  let iconRight
  let iconLeft
  let iconBottom
  let titleClass

  switch (theme) {
    case "sylph":
      ;({
        class: poemCard,
        iconRight,
        iconLeft,
        iconBottom,
        titleClass,
      } = mainProps.dickinson.sylph.poemCard)
      break
    case "elegy":
      ;({
        class: poemCard,
        iconRight,
        iconLeft,
        iconBottom,
        titleClass,
      } = mainProps.dickinson.elegy.poemCard)
      break
  }

  return (
    <div onClick={() => setFullPoemView(index)} className="flex flex-col items-center gap-8">
      <div className={poemCard}>
        <h1 className={titleClass}>{poemTitle}</h1>
        <div className={iconRight}>
          <GiFairyWings className="w-[80%] h-full p-5 text-zinc-700 group-hover:text-indigo-100 slide-in-top" />
        </div>
        <div className={iconLeft}>
          <GiFairyWings className="w-[80%] h-full p-5 text-zinc-700 group-hover:text-indigo-100 slide-in-top" />
        </div>
        <div className={iconBottom}>
          <GiFairyWings className="w-[80%] h-full p-5 text-zinc-700 group-hover:text-indigo-100 slide-in-top" />
        </div>
      </div>
    </div>
  )
}

export default PoemCardDickinson
