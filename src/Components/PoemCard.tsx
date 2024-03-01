import Image from "next/image"
import React from "react"
import Button from "./Button"

type Props = {
  title: string
  author: string
  poem: string[]
  index: number
  setFullPoemView: (value: number) => void
}

const PoemCard = ({ title, author, poem, index, setFullPoemView }: Props) => {
  const shortPoem = poem.slice(0, 5)
  const shortTitle = title.slice(0, title.indexOf(":"))

  return (
    <div className="w-[77%] relative p-10 r-12 border-l-8 border-transparent bg-gradient-to-b from-gray-900 to-gray-600  hover:bg-gradient-to-bl hover:from-indigo-900 hover:via-indigo-400 hover:to-indigo-900 hover:border-amber-200 rounded-[3%] rounded-br-[35%] shadow-md shadow-stone-950 transition ease-in-out delay-400 hover:-translate-y-4 duration-300 group">
      <Button
        text="Ponder Upon"
        onClick={() => setFullPoemView(index)}
        className="absolute top-[6.4%] right-[-16.7%] group-hover:bg-gradient-to-br group-hover:from-stone-700 group-hover:to-stone-400 group-hover:text-slate-200"
      />
      <Image width={200} height={300} src={"/images/bones.svg"} alt="bones" className="absolute top-[20%] left-[135%] animate-pulse" />
      <div className="w-full flex justify-between mb-8">
        <div>
          <h1 className="py-2 text-6xl underline group-hover:decoration-2 group-hover:decoration-amber-100 group-hover:underline-offset-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900">
            {shortTitle}
          </h1>
          <h2 className="pt-2 text-3xl text-yellow-100">{author}</h2>
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
            className="text-color-animation w-max rounded text-[1.6rem] text-slate-200 hover:text-amber-200 transition-ease-in-out delay-400  hover:scale-105 duration-300 hover: p-1 tracking-wide"
          >
            {poemVerse}
          </p>
        )
      })}
      <div className="w-full flex items-end my-8 gap-4 ">
        <p className=" text-2xl ">..................</p>
        <Image
          width={50}
          height={50}
          className="mb-2 group-hover:animate-pulse-faster"
          src="/images/feather-pen.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default PoemCard
