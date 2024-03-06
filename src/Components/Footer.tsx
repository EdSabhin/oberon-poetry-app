import Image from "next/image"
import { Old_Standard_TT } from "next/font/google"
import ModalImage from "./ModalImage"
import { GiCoffin, GiHastyGrave } from "react-icons/gi"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  text: string
  showModalImage?: boolean
  setShowModalImage?: (value: boolean) => void
  theme: string
}

const Footer = ({ text, showModalImage, setShowModalImage, theme }: Props) => {
  /*Theme*/

  return (
    <footer
      className="w-full flex items-start relative pt-8 pb-20 px-48
      bg-gradient-to-r from-gray-950 via-slate-800 to-gray-950 text-white border-none tracking-wider"
    >
      <div className="flex px-10 gap-24 border-x border-orange-300 border-opacity-10">
        <div className="flex flex-col gap-6">
          <h4 className="leading-[4rem] text-4xl text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-300 from-[10%] to-amber-200">
            {text}
          </h4>
          <div className="flex flex-col items-start pl-14">
             <p className="text-2xl text-slate-300 tracking-wider leading-[3rem]">
            &quot;Let not the creaking of shoes nor <br />
            The rustling of silks betray <br />
            Thy poor heart to woman. <br />
            Keep thy foot out of brothels, <br />
            Thy hand out of plackets, <br />
            Thy pen from lenders&apos; books,
            <br />
            <span className="text-rose-animation text-rose-300">
              And defy the foul fiend.&quot;
            </span>
          </p>
          <p className={`${OldStandardTT.className} ${"mt-6 ml-40 text-rose-900"}`}>
            <span className="text-xl italic">King Lear</span>, Act 3,
            Scene 4.
          </p>
          </div>
         
        </div>

        <div className="h-full flex flex-col pt-5 gap-2">
          <h3 className={`${OldStandardTT.className} mb-2 text-xl text-stone-400`}>
            <span className="pr-2 text-orange-200 italic underline underline-offset-4 decoration-1 decoration-orange-300">Attributions</span>        
          </h3>
          <a href="" className={`${OldStandardTT.className} mb-3 text-xl text-indigo-300 hover:text-rose-400`}>Ed Sabhin Project Gallery</a>
          <h4 className={`${OldStandardTT.className} w-max px-3 text-amber-100 border-x border-orange-400`}>Music - <span>John Dowland</span></h4>
          <a
            href="https://www.youtube.com/watch?v=CcWbbMKZ3KM"
            title="feather icons"
            className={`${OldStandardTT.className} text-indigo-200
             hover:text-orange-200 rounded italic transition ease-in-out text-lg`}
          >
            1. The Frog Galliard
          </a>
          <a
            href="https://www.youtube.com/watch?v=u3clX2CJqzs"
            title="Flow My Tears"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg`}
          >
            2. Flow My Tears (Lachrimae)
          </a>
          <a
            href="https://www.youtube.com/watch?v=LB9USv8VYvA"
            title="Can She Excuse My Wrongs"
            className={`${OldStandardTT.className} text-indigo-200
            mb-6 hover:text-orange-200 rounded italic transition ease-in-out text-lg`}
          >
            3. Can She Excuse My Wrongs
          </a>
          
          <h4 className={`${OldStandardTT.className} ${"w-max px-3 text-amber-100 border-x border-orange-400"}`}>Visuals</h4>
          <a
            href="https://www.flaticon.com/free-icons/feather"
            title="feather icons"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg`}
          >
            Quill icons created by Smashicons - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/quill"
            title="quill icons"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg`}
            target="__blank"
          >
            Inkwell icons created by Design Circle - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/black-cat"
            title="black cat icons"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg `}
            target="__blank"
          >
            Cat icons created by juicy_fish - Flaticon
          </a>
          <a
            href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1299297"
            title="black cat icons"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg `}
            target="__blank"
          >
            Fading skulls by OpenClipart-Vectors - Pixabay
          </a>
          {theme === "playwright" && (
            <GiHastyGrave className="absolute bottom-[0%] right-[0%] w-24 h-24 text-indigo-300 fade-in-out-soft" />
          )}
          {theme === "bloodNight" && (
            <GiCoffin className="absolute bottom-[0%] right-[0%] w-24 h-24 text-rose-800 fade-in-out-soft" />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
