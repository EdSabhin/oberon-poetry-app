import React from "react"
import { Poem } from "../pages/ShakespearesDen"
import PoemCard from "./PoemCard"

type Props = {
  poemsArray: []
  setFullPoemView: (value: number) => void
}

const CardsSection = ({ poemsArray, setFullPoemView }: Props) => {
  return (
    <section className="w-full flex flex-col items-start my-8 gap-32">
      {poemsArray.map((poem: Poem, index: number) => {
        return (
          <PoemCard
            key={index}
            index={index}
            title={poem.title}
            author={poem.author}
            poem={poem.lines}
            setFullPoemView={setFullPoemView}
          />
        )
      })}
    </section>
  )
}

export default CardsSection
