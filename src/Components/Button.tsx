import React from "react"
import { Old_Standard_TT } from "next/font/google"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  text: string
  onClick?: () => void
  className?: string
}

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ""} ${OldStandardTT.className} w-[10rem] text-lg p-2 pl-6 pr-8`}
    >
      {text}
    </button>
  )
}

export default Button
