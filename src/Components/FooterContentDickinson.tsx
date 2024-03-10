import React from "react"
import footerProps from "@/component-props/footerProps"

import { Old_Standard_TT } from "next/font/google"
import { scrollToTop } from "@/service/scrollToTop"

type Props = {
  elegy: boolean
  setElegy: (value: boolean) => void
  titleOne: string
  titleTwo: string
  theme: string
}

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

const FooterContentDickinson = ({
  elegy,
  setElegy,
  titleOne,
  titleTwo,
  theme,
}: Props) => {
  let titleClass
  let quoteClass
  let quoteVerseClass

  switch (theme) {
    case "sylph":
      ;({ titleClass, quoteClass, quoteVerseClass } =
        footerProps.dickinson.sylph)
      break
    case "elegy":
      ;({ titleClass, quoteClass, quoteVerseClass } =
        footerProps.dickinson.elegy)
      break
  }

  return (
    <div className="flex flex-col items-end gap-10">
      <h4 className={`${titleClass}`}>
        {titleOne} {titleTwo}
      </h4>

      <div className="flex flex-col mr-12">
        <p className={`${quoteClass}`}>
          &quot;Oh Future! thou secreted peace, <br />
          Or subterranean woe --, <br />
          Is there no wandering route of grace, <br />
          That leads away from thee --, <br />
          No circuit sage of all the course, <br />
          Descried by cunning Men, <br />
          To balk thee of thy sacred Prey --,
          <br />
          <span
            onClick={() => {
              setElegy(!elegy);
              scrollToTop()
            }}
            className={`${quoteVerseClass}`}
          >
            Advancing to thy Den --&quot;
          </span>
        </p>
      </div>
    </div>
  )
}

export default FooterContentDickinson
