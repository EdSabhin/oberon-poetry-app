import React from "react"

import mainProps from "@/component-props/mainProps"

import { Old_Standard_TT } from "next/font/google"
import { GiScrollUnfurled } from "react-icons/gi"
import { GiMoonBats } from "react-icons/gi"


const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  text: string
  onClick?: () => void
  bloodNight?: boolean
}

const Button = ({ text, onClick, bloodNight}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${bloodNight ? mainProps.shakespeare.bloodNight.themeButton : mainProps.shakespeare.playwright.themeButton} ${OldStandardTT.className}`}
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
