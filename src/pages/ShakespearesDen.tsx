import { useEffect, useState } from "react"
import { fetchData } from "@/service/fetchData"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import MainShakespeare from "@/components/MainShakespeare"
import FullPoem from "../components/FullPoem"
import Footer from "../components/Footer"
import Sidebar from "@/components/Sidebar"

export interface Poem {
  id?: string
  title: string
  author: string
  lines: string[]
  linecount: string
}

const ShakespearesDen = () => {
  const [poems, setPoems] = useState<Poem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<string | null>(null)
  const [bloodNight, setBloodNight] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchDataAsync()
    }, 3300)
  }, [])

  const fetchDataAsync = async () => {
    try {
      const data: Poem[] = await fetchData(
        "https://poetrydb.org/author,title/Shakespeare;Sonnet",
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
    <div className={!bloodNight ? "bg-stone-900" : "bg-rose-950"}>
      <Navbar theme={!bloodNight ? "playwright" : "bloodNight"} />
      {sidebar && (
        <Sidebar
          setSidebar={setSidebar}
          poems={poems}
          handlePoemClick={(id) => setFullPoemView(id ?? null)}
        />
      )}
      <Header theme={!bloodNight ? "playwright" : "bloodNight"} />
      <div id="mainContainer">
        {fullPoemView === null ? (
        <MainShakespeare
          loading={loading}
          poems={poems}
          handleOpenSidebar={handleOpenSidebar}
          bloodNight={bloodNight}
          setBloodNight={setBloodNight}
          fullPoemView={fullPoemView}
          setFullPoemView={setFullPoemView}      
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      ) : (
        <FullPoem
          pageId="Shakespeare"
          poems={poems.find((poem) => poem.id === fullPoemView)}
          setFullPoemView={setFullPoemView}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      )}
      </div>      
      <Footer
        id="Shakespeare"
        bloodNight={bloodNight}
        setBloodNight={setBloodNight}
        elegy={false}
        setElegy={() => ""}
        theme={!bloodNight ? "playwright" : "bloodNight"}
      />
    </div>
  )
}

export default ShakespearesDen
