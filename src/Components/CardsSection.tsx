import React from "react"
import { Poem } from "../pages/ShakespearesDen"
import PoemCard from "./PoemCardShakespeare"
import PoemCardShakespeare from "./PoemCardShakespeare"
import PoemCardDickinson from "./PoemCardDickinson"

type Props = {
  id: string
  poems: []
  setFullPoemView: (value: number) => void
  theme: string
}

const CardsSection = ({ id, poems, setFullPoemView, theme }: Props) => {
  return (
    <section
      className={`${id === "Shakespeare" ? "w-full flex flex-col items-start my-8 gap-32" : "w-full grid grid-cols-2 items-center py-24 gap-36"}`}
    >
      {poems.map((poem: Poem, index: number) => {
        return id === "Shakespeare" ? (
          <PoemCardShakespeare
            key={index}
            index={index}
            title={poem.title}
            author={poem.author}
            poem={poem.lines}
            setFullPoemView={setFullPoemView}
            theme={theme}
          />
        ) : (
          <PoemCardDickinson
            key={index}
            index={index}
            title={poem.title}
            author={poem.author}
            poem={poem.lines}
            setFullPoemView={setFullPoemView}
            theme={theme}
          />
        )
      })}
    </section>
  )
}

export default CardsSection
