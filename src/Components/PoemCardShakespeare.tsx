import React from "react"
import Image from "next/image"

import mainProps from "@/component-props/mainProps"

import Button from "./Button"
import { GiHeartStake, GiQuill } from "react-icons/gi"

type Props = {
  title: string
  author: string
  poem: string[]
  index: number
  setFullPoemView: (value: number) => void
  theme: string
}

const PoemCardShakespeare = ({
  title,
  author,
  poem,
  index,
  setFullPoemView,
  theme,
}: Props) => {
  const shortPoem = poem.slice(0, 5)
  const shortTitle = title.slice(0, title.indexOf(":"))

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
      } = mainProps.shakespeare.playwright.poemCard)
      break
    case "bloodNight":
      ;({
        class: poemCard,
        poemButton,
        titleClass,
        authorClass,
        verses,
      } = mainProps.shakespeare.bloodNight.poemCard)
      break
  }

  return (
    <div onClick={() => setFullPoemView(index)} className={poemCard}>
      <Button text="Ponder Upon" className={poemButton} />
      <Image
        width={200}
        height={200}
        src={`${theme === "playwright" ? "/images/bones.svg" : "/images/blood-bones.svg"}`}
        alt="bones watching"
        className="absolute top-[20%] left-[140%] fade-in-out"
      />
      <div className="w-full flex justify-between mb-8 slide-in-left">
        <div>
          <h1 className={titleClass}>{shortTitle}</h1>
          <h2 className={authorClass}>{author}</h2>
        </div>
        <Image
          width={"140"}
          height={"140"}
          className="rounded-[5%] rounded-br-[35%] mr-14"
          src={`${theme === "playwright" ? "/images/shakespeare-portrait.png" : "/images/shakespeare-vamp-dark-decor.png"}`}
          alt="Lord Shakespeare"
        />
      </div>
      {shortPoem.map((poemVerse, index) => {
        return (
          <p key={index} className={verses}>
            {poemVerse}
          </p>
        )
      })}
      <div className="w-full flex items-end my-8 gap-4 ">
        <p className="text-2xl ">..................</p>
         {theme === "playwright" && (
          <Image
          width={"55"}
          height={"55"}
          className="mb-[0.4rem] ml-4 group-hover:animate-ping"
          src= "/images/quill-icon-playwright.png"
          alt="gold quill"
        />
        )} 
        {theme === "bloodNight" && (
          <Image
          width={"55"}
          height={"55"}
          className="mb-[0.4rem] ml-4 group-hover:animate-ping"
          src= "/images/quill-icon-blood.png"
          alt="blood quill"
        />
        )}
      </div>
    </div>
  )
}

export default PoemCardShakespeare
