import React from "react"
import { Public_Sans } from "next/font/google"

const PublicSans = Public_Sans({ weight: "100", subsets: ["latin"] })

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${className ? className : ''} ${PublicSans.className} border-none p-2 px-6 hover:text-slate-800 bg-gradient-to-r from-slate-700 to-indigo-950 hover:bg-gradient-to-br hover:from-amber-500 hover:to-slate-300 rounded italic hover:ring-[0.18rem] hover:ring-stone-700 transition ease-in-out delay-100 text-lg text-amber-200 `}

    >
      {text}
    </button>
  )
}

export default Button
