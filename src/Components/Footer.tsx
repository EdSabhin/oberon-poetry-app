import Image from "next/image"
import { Old_Standard_TT } from "next/font/google"
import ModalImage from "./ModalImage"
import { GiCoffin, GiHastyGrave } from "react-icons/gi"
import footerProps from "@/component-props/footerProps"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  text: string
  showModalImage?: boolean
  setShowModalImage?: (value: boolean) => void
  theme: string
}

const Footer = ({ text, showModalImage, setShowModalImage, theme }: Props) => {
  /*Theme*/
  let footerClass
  let footerContainer
  let titleClass
  let quote
  let quoteVerse
  let quoteWork
  let attributions
  let owner
  let category
  let links

  switch (theme) {
    case "playwright":
      ;({
        footerClass,
        footerContainer,
        titleClass,
        quote,
        quoteVerse,
        quoteWork,
        attributions,
        owner,
        category,
        links,
      } = footerProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({
        footerClass,
        footerContainer,
        titleClass,
        quote,
        quoteVerse,
        quoteWork,
        attributions,
        owner,
        category,
        links,
      } = footerProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({
        footerClass,
        footerContainer,
        titleClass,
        quote,
        quoteVerse,
        quoteWork,
        attributions,
        owner,
        category,
        links,
      } = footerProps.dickinson.sylph)
      break
    case "elegy":
      ;({
        footerClass,
        footerContainer,
        titleClass,
        quote,
        quoteVerse,
        quoteWork,
        attributions,
        owner,
        category,
        links,
      } = footerProps.dickinson.elegy)
      break
  }

  return (
    <footer
      className= {`${footerClass}`}
    >
      <div className={`${footerContainer}`}>
        <div className="flex flex-col gap-6">
          <h4 className={`${titleClass}`}>
            {text}
          </h4>
          <div className="flex flex-col items-start pl-14">
            <p className={`${quote}`}>
              &quot;Let not the creaking of shoes nor <br />
              The rustling of silks betray <br />
              Thy poor heart to woman. <br />
              Keep thy foot out of brothels, <br />
              Thy hand out of plackets, <br />
              Thy pen from lenders&apos; books,
              <br />
              <span className={`${quoteVerse}`}>
                And defy the foul fiend.&quot;
              </span>
            </p>
            <p
              className={`${OldStandardTT.className} ${quoteWork}`}
            >
              <span className="text-xl italic">King Lear</span>, Act 3, Scene 4.
            </p>
          </div>
        </div>

        <div className="flex flex-col pt-5 gap-2 ">
          <h3
            className={`${OldStandardTT.className} ${attributions}`}
          >
            <span className="italic">Attributions</span>
          </h3>
          <a
            href=""
            className={`${OldStandardTT.className} ${owner}`}
          >
            Ed Sabhin Project Gallery
          </a>
          <h4
            className={`${OldStandardTT.className} ${category}`}
          >
            Music - <span>John Dowland</span>
          </h4>
          <a
            href="https://www.youtube.com/watch?v=CcWbbMKZ3KM"
            title="feather icons"
            className={`${OldStandardTT.className} ${links}`}
          >
            1. The Frog Galliard
          </a>
          <a
            href="https://www.youtube.com/watch?v=u3clX2CJqzs"
            title="Flow My Tears"
            className={`${OldStandardTT.className} ${links}`}
          >
            2. Flow My Tears (Lachrimae)
          </a>
          <a
            href="https://www.youtube.com/watch?v=LB9USv8VYvA"
            title="Can She Excuse My Wrongs"
            className={`${OldStandardTT.className} ${links} mb-6`}
          >
            3. Can She Excuse My Wrongs
          </a>

          <h4
            className={`${OldStandardTT.className} ${category}`}
          >
            Visuals
          </h4>
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
          >
            Inkwell icons created by Design Circle - Flaticon
          </a>
          <a
            href="https://www.flaticon.com/free-icons/black-cat"
            title="black cat icons"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg `}
          >
            Cat icons created by juicy_fish - Flaticon
          </a>
          <a
            href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1299297"
            title="black cat icons"
            className={`${OldStandardTT.className} text-indigo-200
            hover:text-orange-200 rounded italic transition ease-in-out text-lg `}
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
