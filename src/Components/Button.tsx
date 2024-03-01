import React from "react"
import { Old_Standard_TT } from "next/font/google"
import { GiScrollUnfurled } from "react-icons/gi"
import { GiMoonBats } from "react-icons/gi"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  text: string
  onClick?: () => void
  bloodNight?: boolean
  className?: string
}

const Button = ({ text, onClick, bloodNight, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ""} ${OldStandardTT.className} w-[10rem] text-color-animation text-lg border-none p-2 pl-6 pr-8 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-700 hover:to-stone-400 hover:text-slate-200 shadow-md shadow-stone-950 rounded-br-full transition ease-in-out delay-400 duration-300`}
    >
      {text}
    </button>
  )
}

export default Button
