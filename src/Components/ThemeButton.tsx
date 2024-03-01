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
      className={`${className ? className : ""} ${OldStandardTT.className} sm:text-blood-animation w-[15rem] text-lg p-3 pl-6 bg-gradient-to-r from-slate-800 to-stone-800 hover:bg-gradient-to-r hover:from-gray-900 hover:via-rose-950 shadow-md shadow-stone-950 rounded-br-full hover:translate-x-2 transition ease-in-out delay-400 duration-500 group`}
    >
      <div className="flex justify-start items-center gap-4">
        {bloodNight !== undefined && !bloodNight && (
          <GiMoonBats className="w-8 h-8 text-blood-animation  group-hover:animate-pulse-faster" />
        )}
        {bloodNight !== undefined && bloodNight && (
          <GiScrollUnfurled className="w-8 h-8 text-color-animation group-hover:animate-pulse-faster" />
        )}
        <span className="">{text}</span>
      </div>
    </button>
  )
}

export default Button
