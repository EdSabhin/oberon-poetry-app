import { useEffect, useState } from "react"
import { fetchData } from "@/service/fetchData"

import Navbar from "../components/Navbar"
import Header from "@/components/Header"
import MainDickinson from "@/components/MainDickinson"
import FullPoem from "@/components/FullPoem"
import Footer from "../components/Footer"

const EmilyDsGreatestHits = () => {
  const [poems, setPoems] = useState<[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<number | null>(null)
  const [elegy, setElegy] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchData("https://poetrydb.org/author/dickinson;").then((data) => {
        setPoems(data)
        setLoading(false)
      })
    }, 3300)
  }, [])

  const poemsArray = poems.slice(34, 42)

  return (
    <div className={!elegy ? "bg-white" : "bg-teal-950"}>
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
        id = "Dickinson"
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
