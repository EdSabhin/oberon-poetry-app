import React from "react"
import Image from "next/image"

import mainProps from "@/component-props/mainProps"

import Button from "./Button"
import { GiFairyWings, GiSecretBook } from "react-icons/gi"

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
  let poemButton
  let titleClass

  switch (theme) {
    case "sylph":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
      } = mainProps.dickinson.sylph.poemCard)
      break
    case "elegy":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
      } = mainProps.dickinson.elegy.poemCard)
      break
  }

  return (
    <div onClick={() => setFullPoemView(index)} className="flex flex-col items-center gap-8">
      <div className={poemCard}>
        <h1 className={titleClass}>{poemTitle}</h1>
        <div className="w-24 h-24 absolute top-10 right-[-1%] flex justify-center items-center rounded-full group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300">
          <GiFairyWings className="w-[80%] h-full p-5 text-zinc-700 group-hover:text-indigo-100" />
        </div>
        <div className="w-24 h-24 absolute top-10 left-[-1%] flex justify-center items-center rounded-full group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300">
          <GiFairyWings className="w-[80%] h-full p-5 text-zinc-700 group-hover:text-indigo-100" />
        </div>
        <div className="w-24 h-24 absolute bottom-[-11%] flex justify-center items-center rounded-full group-hover:bg-gradient-to-b group-hover:from-black group-hover:to-indigo-200 group-shadow-md group-shadow-rose-200 cursor-pointer duration-300">
          <GiFairyWings className="w-[80%] h-full p-5 text-zinc-700 group-hover:text-indigo-100" />
        </div>
      </div>
    </div>
  )
}

export default PoemCardDickinson
