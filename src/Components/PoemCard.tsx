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

const PoemCard = ({ title, author, poem, index, setFullPoemView, theme }: Props) => {
  const shortPoem = poem.slice(0, 5)
  const shortTitle = title.slice(0, title.indexOf(":"))

  let poemCard;
  let poemButton;
  let titleClass;
  let authorClass;
  let verses: string;

  switch (theme) {
    case "playwright":
      ({ class: poemCard, poemButton, titleClass, authorClass, verses } = mainProps.shakespeare.playwright.poemCard)
      break;
    case "bloodNight":
      ({ class: poemCard, poemButton, titleClass, authorClass, verses } = mainProps.shakespeare.bloodNight.poemCard)
      break;
  }

  return (
    <div className={poemCard}>
      <Button
        text="Ponder Upon"
        onClick={() => setFullPoemView(index)}
        className={poemButton}
      />
      <Image
        width={200}
        height={200}
        src={"/images/bones.svg"}
        alt="bones watching"
        className="absolute top-[20%] left-[135%] fade-in-out"
      />
      <div className="w-full flex justify-between mb-8 slide-in-left">
        <div>
          <h1 className={titleClass}>
            {shortTitle}
          </h1>
          <h2 className={authorClass}>{author}</h2>
        </div>
        <Image
          width={"140"}
          height={"140"}
          className="rounded-[5%] rounded-br-[35%] mr-14"
          src="/images/shakespeare-b.gif"
          alt=""
        />
      </div>
      {shortPoem.map((poemVerse, index) => {
        return (
          <p
            key={index}
            className={verses}
          >
            {poemVerse}
          </p>
        )
      })}
      <div className="w-full flex items-end my-8 gap-4 ">
        <p className="text-2xl ">..................</p>
        {theme === "playwright" && 
        <GiQuill className="w-12 h-12 mb-2 text-orange-100 group-hover:text-orange-200"/>}
        {theme === "bloodNight" && 
        <GiHeartStake className="w-12 h-12 mb-2 text-stone-800 group-hover:text-rose-950" />}
      </div>
    </div>
  )
}

export default PoemCard
