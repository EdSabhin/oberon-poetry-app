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
        className={`${bloodNight ? navProps.shakespeare.bloodNight.className : navProps.shakespeare.playwright.className}`}
        linkClassName={`${bloodNight ? navProps.shakespeare.bloodNight.linkClassName : navProps.shakespeare.playwright.linkClassName}`}
      />
      <Header
        title={headerProps.base.shakepeareTitle}
        description={headerProps.base.shakespeareDescription}
        headerClassName={`${bloodNight ? headerProps.shakespeare.bloodNight.headerClassName : headerProps.shakespeare.playwright.headerClassName }`}
        h1ClassName={`${bloodNight ? headerProps.shakespeare.bloodNight.h1ClassName : headerProps.shakespeare.playwright.h1ClassName }`}
        headerIcon={`${bloodNight ? headerProps.shakespeare.bloodNight.headerIcon : headerProps.shakespeare.playwright.headerIcon }`}
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
        text={
          "Here lies Gulielmus filius Johannes Shakspere. William, son of John."
        }
      />
    </>
  )
}

export default ShakespearesDen
