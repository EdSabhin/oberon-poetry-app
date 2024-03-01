import Image from "next/image"
import { Old_Standard_TT } from "next/font/google"
import ModalImage from "./ModalImage"
import { GiHastyGrave } from "react-icons/gi"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  image?: string
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
      className="w-full flex items-start relative py-8 px-48
      bg-gradient-to-l from-blue-950 via-slate-700 to-gray-900 text-white border-none tracking-wider"
    >
      <div className="flex flex-col gap-6"> 
            <h4 className="leading-[4rem] py-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 from-[10%] to-amber-200">
          {text} 
        </h4>   
        <p className="text-2xl tracking-wider leading-[3rem]">
          &quot;Let not the creaking of shoes nor <br />
          The rustling of silks betray <br />
          Betray thy poor heart to woman. <br />
          Keep thy foot out of brothels, <br />
          Thy hand out of plackets, <br />
          Thy pen from lenders&apos; books,<br />
          And defy the foul fiend.&quot;
        </p>
        <p className={`${OldStandardTT.className} ${"text-rose-800"}`}><span className="text-xl italic ml-40">King Lear</span>, Act 3, Scene 4.</p>
      </div>

      <div className="h-full flex flex-col gap-2 mt-8">
        <p
          className={`${OldStandardTT.className} ${"text-amber-400"}`}><span className="text-xl italic ">Attributions</span>
        </p>
        <a
          href="https://www.flaticon.com/free-icons/feather"
          title="feather icons"
          className={`${OldStandardTT.className} ${
            showModalImage ? "text-white" : "text-indigo-400"
          } hover:text-amber-500 rounded italic transition ease-in-out text-lg `}
         
        >
          Feather icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/quill"
          title="quill icons"
          className={`${OldStandardTT.className} ${
            showModalImage ? "text-white" : "text-indigo-400"
          } hover:text-amber-500 rounded italic transition ease-in-out text-lg `}
          target="__blank"
        >
          Quill icons created by Design Circle - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/black-cat"
          title="black cat icons"
          className={`${OldStandardTT.className} ${
            showModalImage ? "text-white" : "text-indigo-400"
          } hover:text-amber-500 rounded italic transition ease-in-out text-lg `}
          target="__blank"
        >
          Cat icons created by juicy_fish - Flaticon
        </a>
        {/* gold -skull:Image by a href=httpspixabay.comusersgdj-1086657utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1782019Gordon Johnsona from a href=httpspixabay.comutm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1782019Pixabaya */}
         <GiHastyGrave className="absolute bottom-[50%] right-[50%] opacity-30 w-24 h-24 text-blood-animation" /> 
      </div>
    </footer>
  )
}

export default Footer
