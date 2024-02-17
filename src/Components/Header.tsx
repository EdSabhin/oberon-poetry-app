import React from "react"
import { Old_Standard_TT } from "next/font/google"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  title: string
  description: string
  headerClassName: string
  h1ClassName: string
}

const Header = ({
  title,
  description,
  headerClassName,
  h1ClassName,
}: Props) => {
  return (
    <header className={headerClassName}>
      <h1 className={h1ClassName}>{title}</h1>
      <h2 className="text-[1.75rem] pt-4 pb-6 px-4 text-start tracking-wide">
        {description}
      </h2>
      <div className="w-full flex justify-end pr-40 pb-10">
        <h3 className={`${OldStandardTT.className} text-2xl text-start`}>
          Gee Pee Tee, of House Chat
        </h3>
      </div>
    </header>
  )
}

export default Header
