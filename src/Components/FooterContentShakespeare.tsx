import React from "react"
import footerProps from "@/component-props/footerProps"

import { Old_Standard_TT } from "next/font/google"
import { scrollToTop } from "@/service/scrollToTop"

type Props = {
  bloodNight?: boolean
  setBloodNight: (value: boolean) => void
  titleOne: string
  titleTwo: string
  theme: string
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const FooterContentShakespeare = ({
  bloodNight,
  setBloodNight,
  titleOne,
  titleTwo,
  theme,
}: Props) => {
  let titleClass
  let quoteClass
  let quoteVerseClass
  let quoteWorkClass

  switch (theme) {
    case "playwright":
      ;({ titleClass, quoteClass, quoteVerseClass, quoteWorkClass } =
        footerProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ titleClass, quoteClass, quoteVerseClass, quoteWorkClass } =
        footerProps.shakespeare.bloodNight)
      break
  }

  return (
    <div className="flex flex-col items-center md:items-end gap-10">
      <h4 className={`${titleClass}`}>
        {titleOne} {titleTwo}
      </h4>

      <div className="flex flex-col items-center md:items-start md:mr-12">
        <p className={`${quoteClass}`}>
          &quot;Let not the creaking of shoes nor
        </p>
        <p className={`${quoteClass}`}>The rustling of silks betray </p>
        <p className={`${quoteClass}`}>Thy poor heart to woman.</p>
        <p className={`${quoteClass}`}>Keep thy foot out of brothels,</p>
        <p className={`${quoteClass}`}>Thy hand out of plackets,</p>
        <p className={`${quoteClass}`}>Thy pen from lenders&apos; books,</p>
        <p
          onClick={() => {
            setBloodNight(!bloodNight)
            scrollToTop()
          }}
          className={`${quoteVerseClass}`}
        >
          And defy the foul fiend.&quot;
        </p>
        <div className="flex flex-col my-10 md:ml-52">
          <p className={`${OldStandardTT.className} ${quoteWorkClass}`}>
            <span className="text-xl italic">King Lear,</span>{" "}
          </p>
          <p className={`${OldStandardTT.className} ${quoteWorkClass}`}>
            Act 3, Scene 4.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FooterContentShakespeare
