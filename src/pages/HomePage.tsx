import { fetchData } from "@/service/fetchData"
import React, { useEffect, useState } from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import FullPoem from "../components/FullPoem"
import Navbar from "../components/Navbar"

export interface Poem {
  title: string
  author: string
  lines: string[]
}

const HomePage = () => {
  const [poems, setPoems] = useState<any>([])
  const [bgColor, setBgColor] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<number | null>(null)

  useEffect(() => {
    setTimeout(() => {
      fetchData("https://poetrydb.org/author,title/Shakespeare;Sonnet").then(
        (data) => {
          setPoems(data)
          setLoading(false)
        },
      )
    }, 3000)
  }, [])
  // Use .then((data)) => {} when fetch is conditioning
  // Otherwise use .then() directly

  const poemsArray = poems.slice(0, 5)

  return (
    <>
      <Navbar />
      <Header
        title={"On Shakespeare"}
        description={`"William Shakespeare's genius lies in his ability to capture the
          complexities of human emotions and motivations, and convey them
          through his characters' words and actions. His works demonstrate an
          unparalleled mastery of language and poetic form, showcasing his
          ability to create vivid imagery and use language to delightfully
          express a wide range of ideas and emotions. Shakespeare's works have
          endured for centuries because of their universal themes and enduring
          relevance, which continue to resonate with audiences today. His legacy
          has had a profound impact on the English language and literature, and
          his plays continue to be celebrated as some of the greatest works of
          art in human history."`}
        className="w-full flex flex-col items-center py-4
      bg-gradient-to-b from-gray-700 to-black text-white border-none"
      />
      {fullPoemView === null ? (
        <Main
          loading={loading}
          poemsArray={poemsArray}
          bgColor={bgColor}
          setBgColor={setBgColor}
          setFullPoemView={setFullPoemView}
        />
      ) : (
        <FullPoem
          poemsArray={poemsArray[fullPoemView]}
          setFullPoemView={setFullPoemView}
        />
      )}
      <Footer
        text={"Here lies Gulielmus Shakspere's Dramatic Footer 👣"}
        image={
          "https://www.azquotes.com/picture-quotes/quote-keep-thy-foot-out-of-brothels-thy-hand-out-of-plackets-thy-pen-from-lender-s-books-and-william-shakespeare-86-20-49.jpg"
        }
      />
    </>
  )
}

export default HomePage
