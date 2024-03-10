import { useEffect, useState } from "react"
import { fetchData } from "@/service/fetchData"

import Navbar from "../components/Navbar"
import Header from "../components/Header"
import MainShakespeare from "@/components/MainShakespeare"
import FullPoem from "../components/FullPoem"
import Footer from "../components/Footer"

export interface Poem {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
}


const ShakespearesDen = () => {
  const [poems, setPoems] = useState<Poem[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [fullPoemView, setFullPoemView] = useState<number | null>(null)
  const [bloodNight, setBloodNight] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchDataAsync();
    }, 3300);
  }, []);

  const fetchDataAsync = async () => {
    try {
      const data: Poem[] = await fetchData("https://poetrydb.org/author,title/Shakespeare;Sonnet");
      setPoems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching poems:", error);
      setLoading(false); 
    }
  };

  const poemsArray:Poem[] = poems.slice(0, 7)

  return (
    <div className={!bloodNight ? "bg-stone-900" : "bg-rose-950"}>
      <Navbar theme={!bloodNight ? "playwright" : "bloodNight"} />
      <Header theme={!bloodNight ? "playwright" : "bloodNight"} />
      {fullPoemView === null ? (
        <MainShakespeare
          loading={loading}
          poemsArray={poemsArray}
          bloodNight={bloodNight}
          setBloodNight={setBloodNight}
          setFullPoemView={setFullPoemView}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      ) : (
        <FullPoem
          id="Shakespeare"
          poemsArray={poemsArray[fullPoemView]}
          setFullPoemView={setFullPoemView}
          theme={!bloodNight ? "playwright" : "bloodNight"}
        />
      )}
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
