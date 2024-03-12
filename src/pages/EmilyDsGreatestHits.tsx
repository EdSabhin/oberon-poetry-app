import { useEffect, useState } from "react"
import { fetchData } from "@/service/fetchData"
import { Poem } from "./ShakespearesDen"

import Navbar from "../components/Navbar"
import Header from "@/components/Header"
import MainDickinson from "@/components/MainDickinson"
import FullPoem from "@/components/FullPoem"
import Footer from "../components/Footer"

const EmilyDsGreatestHits = () => {
  const [poems, setPoems] = useState<Poem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<number | null>(null)
  const [elegy, setElegy] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchDataAsync()
    }, 3300)
  }, [])

  const fetchDataAsync = async () => {
    try {
      const data: Poem[] = await fetchData(
        "https://poetrydb.org/author/Dickinson",
      )
      setPoems(data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching poems:", error)
      setLoading(false)
    }
  }

  const poemsArray: Poem[] = poems.slice(34, 42)

  return (
    <div className={!elegy ? "bg-white" : "bg-cyan-950"}>
      <Navbar theme={!elegy ? "sylph" : "elegy"} />
      <Header theme={!elegy ? "sylph" : "elegy"} />
      {fullPoemView === null ? (
        <MainDickinson
          loading={loading}
          poemsArray={poemsArray}
          elegy={elegy}
          setElegy={setElegy}
          setFullPoemView={setFullPoemView}
          theme={!elegy ? "sylph" : "elegy"}
        />
      ) : (
        <FullPoem
          id="Dickinson"
          poemsArray={poemsArray[fullPoemView]}
          setFullPoemView={setFullPoemView}
          theme={!elegy ? "sylph" : "elegy"}
        />
      )}
      <Footer
        id="Dickinson"
        bloodNight={false}
        setBloodNight={() => ""}
        elegy={elegy}
        setElegy={setElegy}
        theme={!elegy ? "sylph" : "elegy"}
      />
    </div>
  )
}

export default EmilyDsGreatestHits

/*<a href="https://www.flaticon.com/free-icons/feather" title="feather icons">Feather icons created by Freepik - Flaticon</a>*/
