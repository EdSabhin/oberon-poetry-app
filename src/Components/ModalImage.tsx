import Image from "next/image"
import React, { useEffect } from "react"

type Props = {
  src: string
  setShowModalImage?: (value: boolean) => void
}

const ModalImage = ({ src, setShowModalImage }: Props) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden")

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [])

  return (
    <div className="modalPoetList fixed inset-0 overflow-y-auto z-40">
      <div
        className="w-full flex justify-center items-center min-h-screen"
        onClick={() =>
          setShowModalImage !== undefined && setShowModalImage(false)
        }
      >
        <div className="w-max p-20 relative">
          <Image
            className="rounded-2xl"
            width="1000"
            height="1000"
            src={src}
            alt=""
          />
          <button
            className="absolute top-10 right-10 text-3xl text-zinc-900 font-bold"
            onClick={() =>
              setShowModalImage !== undefined && setShowModalImage(false)
            }
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

{
  /* <div
        className={`mt-8 mb-4 ${
          setShowModalImage !== undefined && "p-1 rounded-md cursor-pointer "
        } `}
      >
        <Image
          className=" pb-8 rounded"
          width={imageWidth ?? 500}
          height={imageHeight ?? 500}
          src={image}
          alt=""
          onClick={() =>
            setShowModalImage !== undefined && setShowModalImage(true)
          }
        />
      </div> 
      
           {showModalImage && (
        <ModalImage src={image} setShowModalImage={setShowModalImage} />
      )}

       <a
            href="https://www.flaticon.com/free-icons/black-cat"
            title="black cat icons"
            className={`${OldStandardTT.className} ${
              showModalImage ? "text-white" : "text-indigo-400"
            } hover:text-amber-400 rounded italic transition ease-in-out text-lg `}
            target="__blank"
          >
    */
}

export default ModalImage
