import { fetchData } from "@/service/fetchData"
import { useEffect, useState } from "react"

import { headerProps, navProps } from "../component-props/propsIndex"

import Navbar from "../components/Navbar"
import Header from "@/components/Header"
import Footer from "../components/Footer"

import LoadingImage from "@/components/LoadingImage"
import MusicPlayer from "@/components/MusicPlayer"
import { songData } from "@/service/songData"
import Book from "@/components/icons/Book"



type Props = {
  title: string
}

const EmilyDsGreatestHits = (props: Props) => {
  const [titles, setTitles] = useState<any>()
  const [bgColor, setBgColor] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      fetchData("https://poetrydb.org/author/Emily%20Dickinson/title").then(
        (data) => {
          setTitles(data)
          setLoading(false)
        },
      )
    }, 3300)
  }, [])

  return (
    <div className="">
      <Navbar
        className={navProps.dickinson.className}
        ulClassName={navProps.dickinson.ulClassName}
        linkClassName={navProps.dickinson.linkClassName}
      />
      <Header
        title={headerProps.dickinson.title}
        description={headerProps.dickinson.description}
        headerClassName={headerProps.dickinson.headerClassName}
        h1ClassName={headerProps.dickinson.h1ClassName}
      />
      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage image="/inkwell.png" />
        </div>
      ) : (
        <section className="w-full flex flex-col items-center py-12 px-24">
          <MusicPlayer songs={songData} />
          <div className="w-full grid grid-cols-2 items-center pt-16 pb-24 gap-24">
            {titles.slice(34, 44).map((title: Props, index: number) => {
              return (
                <div key={index} className="flex justify-center">
                  <div className="w-96 h-96 flex justify-center items-center border-b rounded-full shadow-lg shadow-rose-100">
                    <h3 className="w-[60%] flex justify-center items-center text-3xl cursor-pointer">
                      {title.title}
                    </h3>
                  </div>
                  <div className="w-32 h-16 flex mt-8 justify-center items-center border-b rounded-full shadow-md shadow-rose-200 cursor-pointer">
                    <Book />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}
      <Footer
        text={"Emily's Footer Extravaganza"}
        image={
          "https://www.favoritepoem.org/files/2022/10/slate_emily-dickinson-1800x624.png"
        }
      />
    </div>
  )
}

export default EmilyDsGreatestHits
