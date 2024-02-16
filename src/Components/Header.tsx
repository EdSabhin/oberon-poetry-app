import React from "react"
import { Old_Standard_TT } from "next/font/google"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  title: string
  description: string
  className?: string
}

const Header = ({ title, description, className }: Props) => {
  return (
    <header className={className}>
      <h1 className="text-7xl underline underline-offset-8 decoration-double decoration-1 decoration-amber-300 p-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 to-yellow-900">
        {title}
      </h1>
      <h2 className="text-[1.75rem] pt-4 pb-6 text-start tracking-wide">
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
