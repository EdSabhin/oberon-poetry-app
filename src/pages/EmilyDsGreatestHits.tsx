import { fetchData } from "@/service/fetchData"
import { useEffect, useState } from "react"

import { headerProps } from "../component-props/propsIndex"

import Navbar from "../components/Navbar"
import Header from "@/components/Header"
import Footer from "../components/Footer"

import LoadingImage from "@/components/LoadingImage"
import MusicPlayer from "@/components/MusicPlayer"
import { songData } from "@/service/songData"
import { GiSecretBook } from "react-icons/gi"

type Props = {
  title: string
}

const EmilyDsGreatestHits = (props: Props) => {
  const [titles, setTitles] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true)
  const [elegy, setElegy] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchData("https://poetrydb.org/author/Dickinson").then((data) => {
        setTitles(data)
        setLoading(false)
      })
    }, 3300)
  }, [])

  return (
    <div className={!elegy ? "bg-white" : "bg-teal-950"}>
      <Navbar theme={!elegy ? "sylph" : "elegy"} />
      <Header theme={!elegy ? "sylph" : "elegy"} />
      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage image="/inkwell.png" />
        </div>
      ) : (
        <section className="w-full flex flex-col items-center py-12 px-24">
          <MusicPlayer theme={!elegy ? "sylph" : "elegy"} />
          <div className="w-full grid grid-cols-2 items-center pt-16 pb-24 gap-24">
            {titles.slice(34, 44).map((title: Props, index: number) => {
              return (
                <div key={index} className="flex justify-center">
                  <div className="w-96 h-96 flex justify-center items-center border-b rounded-full shadow-lg shadow-rose-100">
                    <h3 className="w-[60%] flex justify-center items-center text-3xl cursor-pointer">
                      {title.title}
                    </h3>
                  </div>
                  <div className="w-32 h-20 flex mt-8 justify-center items-center border-b rounded-full shadow-md shadow-rose-200 cursor-pointer text-gradient">
                    <GiSecretBook className="w-full h-[55%] text-zinc-700" />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
      <Footer />
    </div>
  )
}

export default EmilyDsGreatestHits

/*<a href="https://www.flaticon.com/free-icons/feather" title="feather icons">Feather icons created by Freepik - Flaticon</a>*/
