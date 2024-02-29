import React, { useEffect } from "react"
import Button from "./Button"
import { Poem } from "../pages/ShakespearesDen"

type Props = {
  poemsArray: Poem
  setFullPoemView: (value: null) => void
}

const FullPoem = ({ poemsArray, setFullPoemView }: Props) => {
  const shortTitle = poemsArray.title.slice(0, poemsArray.title.indexOf(":"))
  useEffect(() => {
    const element = document.getElementById("FullPoem")
    element?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div
      id="FullPoem"
      className="w-full flex flex-col justify-center items-center gap-4 py-4 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 relative"
    >
      <div className="w-1/2 pt-4 flex flex-col items-center justify-center text-5xl">
        <h1 className="p-4 text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-900 underline decoration-red-200 underline-offset-8">
          {shortTitle}
        </h1>
      </div>
      <div className="absolute top-10 right-80">
        {" "}
        <Button
          onClick={() => setFullPoemView(null)}
          text="Retrace Thy Steps"
        />
      </div>
      <div className="w-1/2 mb-7 flex flex-col items-center justify-center text-2xl">
        {poemsArray.lines.map((verse: string, index: number) => {
          return (
            <p
              className="w-max rounded text-white transition-ease-in-out delay-400  hover:scale-105 duration-300 hover:bg-gradient-to-r hover:from-indigo-600 hover:via-red-400 hover:to-indigo-600 p-1 text-2xl hover:text-amber-200 tracking-wide"
              key={index}
            >
              {verse}
            </p>
          )
        })}
        <div className="w-full flex justify-end pr-20 p-8">
          <h2 className="pt-1 pb-2 text-2xl text-yellow-200">
            {poemsArray.author}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default FullPoem
