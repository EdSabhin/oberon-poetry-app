import React from "react"
import footerProps from "@/component-props/footerProps"

import { Old_Standard_TT } from "next/font/google"
import { scrollToTop } from "@/service/scrollToTop"

type Props = {
  bloodNight: boolean
  setBloodNight: (value: boolean) => void
  titleOne: string
  titleTwo: string
  theme: string 
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const FooterContentShakespeare = ({bloodNight, setBloodNight, titleOne, titleTwo, theme }: Props) => {
  let titleClass
  let quote
  let quoteVerse
  let quoteWork

  switch (theme) {
    case "playwright":
      ;({ titleClass, quote, quoteVerse, quoteWork } =
        footerProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ titleClass, quote, quoteVerse, quoteWork } =
        footerProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ titleClass, quote, quoteVerse, quoteWork } =
        footerProps.dickinson.sylph)
      break
    case "elegy":
      ;({ titleClass, quote, quoteVerse, quoteWork } =
        footerProps.dickinson.elegy)
      break
  }

  return (
    <div className="flex flex-col items-end gap-10">
      <h4 className={`${titleClass}`}>
        {titleOne} {titleTwo}
      </h4>

      <div className="flex flex-col mr-12">
        <p className={`${quote}`}>
          &quot;Let not the creaking of shoes nor <br />
          The rustling of silks betray <br />
          Thy poor heart to woman. <br />
          Keep thy foot out of brothels, <br />
          Thy hand out of plackets, <br />
          Thy pen from lenders&apos; books,
          <br />
          <span onClick={() => {
              setBloodNight(!bloodNight)
              scrollToTop()
            }} className={`${quoteVerse}`}>
            And defy the foul fiend.&quot;
          </span>
        </p>
        <p className={`${OldStandardTT.className} ${quoteWork}`}>
          <span className="text-xl italic">King Lear</span>, Act 3, Scene 4.
        </p>
      </div>
    </div>
  )
}

export default FooterContentShakespeare
