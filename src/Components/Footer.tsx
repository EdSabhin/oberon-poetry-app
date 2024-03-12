import footerProps from "@/component-props/footerProps"

import { Old_Standard_TT } from "next/font/google"

import FooterContentShakespeare from "./FooterContentShakespeare"
import { GiCoffin, GiHastyGrave, GiSandsOfTime } from "react-icons/gi"
import FooterContentDickinson from "./FooterContentDickinson"
import { SiApachecassandra } from "react-icons/si"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  id: string
  bloodNight: boolean
  setBloodNight: (value: boolean) => void
  elegy: boolean
  setElegy: (value: boolean) => void
  theme: string
}

const Footer = ({
  id,
  bloodNight,
  setBloodNight,
  elegy,
  setElegy,
  theme,
}: Props) => {
  /*Theme*/
  let footerClass
  let footerContainer
  let attributions
  let owner
  let category
  let links

  switch (theme) {
    case "playwright":
      ;({ footerClass, footerContainer, attributions, owner, category, links } =
        footerProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ footerClass, footerContainer, attributions, owner, category, links } =
        footerProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ footerClass, footerContainer, attributions, owner, category, links } =
        footerProps.dickinson.sylph)
      break
    case "elegy":
      ;({ footerClass, footerContainer, attributions, owner, category, links } =
        footerProps.dickinson.elegy)
      break
  }

  return (
    <footer className={`${footerClass}`}>
      <div className={`${footerContainer}`}>
        <div className="w-[25%] flex flex-col pt-5 gap-2 ">
          <h3 className={`${OldStandardTT.className} ${attributions}`}>
            <span className="italic">Attributions</span>
          </h3>
          <a href="" className={`${OldStandardTT.className} ${owner}`}>
            Ed Sabhin Project Gallery
          </a>
          <h4 className={`${OldStandardTT.className} ${category}`}>
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

          <h4 className={`${OldStandardTT.className} ${category}`}>Visuals</h4>
          <a
            href="https://www.flaticon.com/free-icons/black-cat"
            title="cat icons"
            className={`${OldStandardTT.className} ${links}`}
          >
            Cat icons created by juicy_fish - Flaticon
          </a>
          {id === "Shakespeare" ? (
            <a
              href="https://www.flaticon.com/free-icons/feather"
              title="quill icons"
              className={`${OldStandardTT.className} ${links}`}
            >
              Quill icons created by Smashicons - Flaticon
            </a>
          ) : (
            <a
              href="https://www.flaticon.com/free-icons/quill"
              title="inkwell icons"
              className={`${OldStandardTT.className} ${links} `}
            >
              Inkwell icons created by Design Circle - Flaticon
            </a>
          )}
          {id === "Shakespeare" && 
          <a href="https://www.flaticon.com/free-icons/kill" title="staked heart icons"  className={`${OldStandardTT.className} ${links} `}>Heart icon created by edt.im - Flaticon</a>}
          {id === "Shakespeare" ? (
            <a
              href="https://pixabay.com/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=1299297"
              title="skulls art"
              className={`${OldStandardTT.className} ${links}`}
            >
              Fading skulls by OpenClipart-Vectors - Pixabay
            </a>
          ) : (
            <a
              href="https://pixabay.com/users/gdj-1086657/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=5244885"
              title="moon art"
              className={`${OldStandardTT.className} ${links}`}
            >
              Crescent Moon by Gordon Johnson - Pixabay
            </a>
          )}

          {theme === "playwright" && (
            <GiHastyGrave className="absolute bottom-[0%] right-[0%] w-24 h-24 text-indigo-300 fade-in-out-soft" />
          )}
          {theme === "bloodNight" && (
            <GiCoffin className="absolute bottom-[0%] right-[0%] w-24 h-24 text-rose-800 fade-in-out-soft" />
          )}
          {theme === "sylph" && (
            <GiSandsOfTime className="absolute bottom-[0%] right-[0%] w-24 h-24 text-teal-300 fade-in-out-soft" />
          )}
          {theme === "elegy" && (
            <SiApachecassandra className="absolute bottom-[0%] right-[0%] w-24 h-24 text-cyan-100 fade-in-out-soft" />
          )}
        </div>
        {id === "Shakespeare" ? (
          <FooterContentShakespeare
            bloodNight={bloodNight}
            setBloodNight={setBloodNight}
            titleOne={"Here lies Gulielmus filius Johannes Shakspere."}
            titleTwo={"William, son of John."}
            theme={theme}
          />
        ) : (
          <FooterContentDickinson
            elegy={elegy}
            setElegy={setElegy}
            titleOne="Beware of waters still, of all absconding lures --"
            titleTwo="Lest thou be plucked by That which obscures."
            theme={theme}
          />
        )}
      </div>
    </footer>
  )
}

export default Footer
