import React, { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Header from "@/Components/Header"
import LoadingImage from "@/Components/LoadingImage"
import { fetchData } from "@/service/fetchData"

type Props = {}

const PoetsList = (props: Props) => {
  const [authors, setAuthors] = useState<any>()
  const [bgColor, setBgColor] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [showModalImage, setShowModalImage] = useState<boolean>(false)

  useEffect(() => {
    setTimeout(() => {
      fetchData("https://poetrydb.org/author").then((data) => {
        setAuthors(data)
        setLoading(false)
      })
    }, 3000)
  }, [])

  // Use .then((data)) => {} when fetch is conditioning
  // Otherwise use .then() directly
  return (
    <>
      <Navbar />
      <Header
        title="English Poets Repository"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus non omnis tempore iure numquam incidunt voluptatem a repellat, dolores corporis quasi. Quisquam id sed numquam voluptates inventore maxime accusamus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum possimus placeat nulla incidunt, iste sint perferendis quaerat corporis dolor molestias, unde, odio tenetur eveniet ipsam? Quo modi repellat esse?"
      />
      {loading ? (
        <div className="w-full flex justify-center">
          <LoadingImage image="/feather-pen.png" />
        </div>
      ) : (
        <section className="w-full grid grid-cols-3 gap-x-4 gap-y-10 px-36 pt-16 pb-20">
          {authors.authors.map((author: string, index: number) => {
            return (
              <div
                key={index}
                className="w-full flex items-center justify-center"
              >
                <h3 className="text-3xl">{author}</h3>
              </div>
            )
          })}
        </section>
      )}

      <Footer
        text={"English Poetry Tree"}
        image={
          "https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/03/1*SxA6EATgMS5sWd-e59hBqQ.jpeg"
        }
        imageWidth={600}
        imageHeight={600}
        showModalImage={showModalImage}
        setShowModalImage={setShowModalImage}
      />
    </>
  )
}
export default PoetsList
