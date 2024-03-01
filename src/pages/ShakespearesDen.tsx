import { fetchData } from "@/service/fetchData"
import { useEffect, useState } from "react"

import { headerProps, navProps } from "../component-props/propsIndex"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Main from "../components/Main"
import FullPoem from "../components/FullPoem"
import Footer from "../components/Footer"
export interface Poem {
  title: string
  author: string
  lines: string[]
}

const ShakespearesDen = () => {
  const [poems, setPoems] = useState<any>([])
  const [bloodNight, setBloodNight] = useState<boolean>(false)
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
    }, 3300)
  }, [])

  const poemsArray = poems.slice(0, 6)

  return (
    <>
      <Navbar
        className={navProps.shakespeare.className}
        ulClassName={navProps.shakespeare.ulClassName}
        linkClassName={navProps.shakespeare.linkClassName}
      />
      <Header
        title={headerProps.shakespeare.title}
        description={headerProps.shakespeare.description}
        headerClassName={headerProps.shakespeare.headerClassName}
        h1ClassName={headerProps.shakespeare.h1ClassName}
        headerIcon={headerProps.shakespeare.headerIcon}
      />
      {fullPoemView === null ? (
        <Main
          loading={loading}
          poemsArray={poemsArray}
          bloodNight={bloodNight}
          setBloodNight={setBloodNight}
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

export default ShakespearesDen
