import React from "react"
import { Public_Sans } from "next/font/google"

const PublicSans = Public_Sans({ weight: "100", subsets: ["latin"] })

type Props = {
  text: string
  onClick?: () => void
  className?: string
}

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ""} ${PublicSans.className} border-none p-2 pl-6 pr-8 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-br hover:from-stone-700 hover:to-stone-400 text-lg text-amber-100 hover:text-slate-200 shadow-md shadow-stone-950 rounded-br-full`}
    >
      {text}
    </button>
  )
}

export default Button
