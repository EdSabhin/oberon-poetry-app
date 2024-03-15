import React from "react"
import { Poem } from "../pages/ShakespearesDen"
import PoemCardShakespeare from "./PoemCardShakespeare"
import PoemCardDickinson from "./PoemCardDickinson"

type Props = {
  id: string
  poems: Poem[]
  setFullPoemView: (value: number) => void
  randomPoems?: Poem[] 
  randomizedPoems: boolean
  theme: string
}

const CardsSection = ({ id, poems, setFullPoemView, randomPoems, randomizedPoems, theme }: Props) => {
  let displayPoems = poems.slice(0, 8)

  return (
    <section
      className={`${id === "Shakespeare" ? "w-full flex flex-col items-start my-8 gap-32" : "w-full grid grid-cols-2 items-center py-24 gap-36"}`}
    >
      {randomPoems && randomPoems.map((poem: Poem, index: number) => {
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
      {!randomizedPoems && displayPoems.map((poem: Poem, index: number) => {
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
