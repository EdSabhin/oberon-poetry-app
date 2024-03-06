import { useEffect, useState } from "react"
import { fetchData } from "@/service/fetchData"

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
    <div className={!bloodNight ? "bg-stone-900" : "bg-rose-950"}>
      <Navbar theme={!bloodNight ? "playwright" : "bloodNight"}/>
      <Header theme={!bloodNight ? "playwright" : "bloodNight"}/>
      {fullPoemView === null ? (
        <Main
          loading={loading}
          poemsArray={poemsArray}
          bloodNight={bloodNight}
          setBloodNight={setBloodNight}
          setFullPoemView={setFullPoemView}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      ) : (
        <FullPoem
          poemsArray={poemsArray[fullPoemView]}
            setFullPoemView={setFullPoemView}
            theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      )}
      <Footer
        text={
          "Here lies Gulielmus filius Johannes Shakspere.\n William, son of John."
        }
        bloodNight={bloodNight}
      />
    </div>
  )
}

export default ShakespearesDen
