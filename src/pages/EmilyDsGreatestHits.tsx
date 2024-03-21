import { useEffect, useState } from "react"
import { fetchData } from "@/service/fetchData"
import { Poem } from "./ShakespearesDen"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import MainDickinson from "../components/MainDickinson"
import FullPoem from "../components/FullPoem"
import Footer from "../components/Footer"

const EmilyDsGreatestHits = () => {
  const [poems, setPoems] = useState<Poem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<string | null>(null)
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

  const uniqueIdPoems: Poem[] = poems.map((poem) => ({
    ...poem,
    id: `${poem.title}-${poem.author}`,
  }))

  useEffect(() => {
    //  Check if uniqueIdPoems is different from current poems
    //  to avoid infinite loop. Only sets state when they are
    //  different, and keeps latest state of poems.
    const uniqueIsDifferent =
      JSON.stringify(uniqueIdPoems) !== JSON.stringify(poems)
    if (uniqueIsDifferent) {
      setPoems(uniqueIdPoems)
    }
  }, [uniqueIdPoems, poems])

  // Open Sidebar
  const [sidebar, setSidebar] = useState<boolean>(false)
  const handleOpenSidebar = () => {
    setSidebar(true)
  }

  // Scroll to Main before opening FullPoem
  useEffect(() => {
    const mainContainer = document.getElementById("mainContainer")
    mainContainer?.scrollIntoView({ behavior: "smooth" })
  }, [fullPoemView])

  return (
    <div
      className={
        !elegy
          ? "bg-gradient-to-r from-white via-neutral-100 to-indigo-200"
          : "bg-gradient-to-r from-black to-cyan-700"
      }
    >
      <Navbar theme={!elegy ? "sylph" : "elegy"} />
      <Header theme={!elegy ? "sylph" : "elegy"} />
      {sidebar && (
        <Sidebar
          pageId="Dickinson"
          setSidebar={setSidebar}
          poems={poems}
          handlePoemClick={(id) => setFullPoemView(id ?? null)}
          theme={!elegy ? "sylph" : "elegy"}
        />
      )}
      <div id="mainContainer">
        {fullPoemView === null ? (
          <MainDickinson
            loading={loading}
            poems={poems}
            handleOpenSidebar={handleOpenSidebar}
            elegy={elegy}
            setElegy={setElegy}
            fullPoemView={fullPoemView}
            setFullPoemView={setFullPoemView}
            theme={!elegy ? "sylph" : "elegy"}
          />
        ) : (
          <FullPoem
            pageId="Dickinson"
            poems={poems.find((poem) => poem.id === fullPoemView)}
            setFullPoemView={setFullPoemView}
            theme={!elegy ? "sylph" : "elegy"}
          />
        )}
      </div>

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
