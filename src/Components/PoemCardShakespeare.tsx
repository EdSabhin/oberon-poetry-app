import React from "react"
import Image from "next/image"

import mainProps from "@/component-props/mainProps"

import Button from "./Button"

type Props = {
  title: string
  author: string
  poem: string[]
  id: string
  setFullPoemView: (value: string) => void
  theme: string
}

const PoemCardShakespeare = ({
  title,
  author,
  poem,
  id,
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
    <div onClick={() => setFullPoemView(id)} className={poemCard}>
      <Button text="Ponder Upon" className={poemButton} />
      <Image
        width={200}
        height={200}
        src={`${theme === "playwright" ? "/images/bones.svg" : "/images/blood-bones.svg"}`}
        alt="bones watching"
        className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute left-[33%] md:top-[20%] md:left-[140%] fade-in-out bottom-[-15.5%]"
      />
      <div className="w-full flex flex-col items-center gap-6 md:flex-row md:justify-between mb-8 slide-in-left">
        <div>
          <h1 className={titleClass}>{shortTitle}</h1>
          <h2 className={authorClass}>{author}</h2>
        </div>
        <Image
          width={"140"}
          height={"140"}
          className="w-[115px] h-[115px] md:w-[140px] md:h-[140px] rounded-[5%] rounded-br-[35%] md:mr-14"
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
      <div className="w-full flex items-end my-8 gap-4">
        <p className="text-2xl">..................</p>
        {theme === "playwright" && (
          <Image
            width={"55"}
            height={"55"}
            className="mb-[0.4rem] ml-4 group-hover:animate-ping"
            src="/images/quill-playwright.png"
            alt="gold quill"
          />
        )}
        {theme === "bloodNight" && (
          <Image
            width={"55"}
            height={"55"}
            className="mb-[0.4rem] ml-4 group-hover:animate-ping"
            src="/images/quill-blood.png"
            alt="blood quill"
          />
        )}
      </div>
    </div>
  )
}

export default PoemCardShakespeare
