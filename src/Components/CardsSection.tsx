import React from "react"
import { Poem } from "../pages/ShakespearesDen"
import PoemCardShakespeare from "./PoemCardShakespeare"
import PoemCardDickinson from "./PoemCardDickinson"

type Props = {
  pageId: string
  poems: Poem[]
  setFullPoemView: (value: string) => void
  randomPoems?: Poem[]
  shuffledPoems: boolean
  theme: string
}

const CardsSection = ({
  pageId,
  poems,
  setFullPoemView,
  randomPoems,
  shuffledPoems,
  theme,
}: Props) => {
  let displayPoems: Poem[] = []

  if (pageId === "Shakespeare") {
    displayPoems = poems.slice(0, 8)
  } else if (pageId === "Dickinson") {
    displayPoems = poems.slice(34, 42)
  }

  return (
    <section
      className={`${pageId === "Shakespeare" ? "w-full flex flex-col items-start my-8 gap-32" : "w-full grid grid-cols-2 items-center py-24 gap-36"}`}
    >
      {shuffledPoems &&
        randomPoems?.map((poem: Poem, key: number) => {
          return pageId === "Shakespeare" ? (
            <PoemCardShakespeare
              key={key}
              id={poem.id ?? ""}
              title={poem.title}
              author={poem.author}
              poem={poem.lines}
              setFullPoemView={setFullPoemView}
              theme={theme}
            />
          ) : (
            <PoemCardDickinson
              key={key}
              id={poem.id ?? ""}
              title={poem.title}
              author={poem.author}
              poem={poem.lines}
              setFullPoemView={setFullPoemView}
              theme={theme}
            />
          )
        })}
      {!shuffledPoems &&
        displayPoems.map((poem: Poem, key) => {
          return pageId === "Shakespeare" ? (
            <PoemCardShakespeare
              key={key}
              id={poem.id ?? ""}
              title={poem.title}
              author={poem.author}
              poem={poem.lines}
              setFullPoemView={setFullPoemView}
              theme={theme}
            />
          ) : (
            <PoemCardDickinson
              key={key}
              id={poem.id ?? ""}
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
