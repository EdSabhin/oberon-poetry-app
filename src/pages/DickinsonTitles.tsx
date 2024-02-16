import { fetchData } from "@/service/fetch"
import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "@/components/Header"
import LoadingImage from "@/components/LoadingImage"
import MusicPlayer from "@/components/MusicPlayer"
import { songData } from "@/service/songData"

type Props = {
  title: string
}

const DickinsonTitles = (props: Props) => {
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
    }, 3000)
  }, [])

  // Use .then((data)) => {} when fetch is conditioning
  // Otherwise use .then() directly
  return (
    <div>
      <Navbar />
      <Header
        title="Emily D's Greatest Hits"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus non omnis tempore iure numquam incidunt voluptatem a repellat, dolores corporis quasi. Quisquam id sed numquam voluptates inventore maxime accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum possimus placeat nulla incidunt, iste sint perferendis quaerat corporis dolor molestias, unde, odio tenetur eveniet ipsam? Quo modi repellat esse?"
      />
      {loading ? (
        <div className="w-full flex justify-center items-center ">
          <LoadingImage image="/feather-pen.png" />
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
                  <div className="w-32 h-16 flex mt-8 justify-center items-center border-b rounded-full shadow-lg shadow-rose-200">
                    <h3 className="text-rose-900 text-3xl cursor-pointer">▷</h3>
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

export default DickinsonTitles
