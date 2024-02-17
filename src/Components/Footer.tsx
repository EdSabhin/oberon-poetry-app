import Image from "next/image"
import { Old_Standard_TT } from "next/font/google"
import ModalImage from "./ModalImage"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  image: string
  text: string
  imageWidth?: number
  imageHeight?: number
  showModalImage?: boolean
  setShowModalImage?: (value: boolean) => void
}

const Footer = ({
  image,
  text,
  imageWidth,
  imageHeight,
  showModalImage,
  setShowModalImage,
}: Props) => {
  return (
    <footer
      className="w-full flex flex-col items-center py-6
      bg-gradient-to-t from-gray-700 to-black text-white border-none tracking-wider"
    >
      <div className="p-4 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-400">
        {text}
      </div>
      <div
        className={`mt-8 mb-4 ${
          setShowModalImage !== undefined && "p-1 rounded-md cursor-pointer "
        } `}
      >
        <Image
          className=" pb-8 hover:border-4 hover:border-zinc-100 transition duration-500 ease-in-out hover:transition-all hover:duration-500 hover:ease-in-out rounded"
          width={imageWidth ?? 500}
          height={imageHeight ?? 500}
          src={image}
          alt=""
          onClick={() =>
            setShowModalImage !== undefined && setShowModalImage(true)
          }
        />
      </div>
      <div className="flex flex-col gap-2">
        <a
          href="https://www.flaticon.com/free-icons/feather"
          title="feather icons"
          className={`${OldStandardTT.className} ${
            showModalImage ? "text-white" : "text-indigo-400"
          } border-none py-2 px-6 font-bold  hover:text-amber-400 rounded italic transition ease-in-out text-lg `}
          target="__blank"
        >
          Feather icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/quill"
          title="quill icons"
          className={`${OldStandardTT.className} ${
            showModalImage ? "text-white" : "text-indigo-400"
          } border-none py-2 px-6 font-bold  hover:text-amber-400 rounded italic transition ease-in-out text-lg `}
          target="__blank"
        >
          Quill icons created by Design Circle - Flaticon
        </a>
      </div>

      {showModalImage && (
        <ModalImage src={image} setShowModalImage={setShowModalImage} />
      )}
    </footer>
  )
}

export default Footer
