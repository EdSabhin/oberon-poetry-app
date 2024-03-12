import React from "react"

import mainProps from "@/component-props/mainProps"

import { Old_Standard_TT } from "next/font/google"
import { GiCurledLeaf, GiFairyWings, GiScrollUnfurled } from "react-icons/gi"
import { GiMoonBats } from "react-icons/gi"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  text: string
  onClick?: () => void
  theme: string
}

const Button = ({ text, onClick, theme }: Props) => {
  /* Theme */
  let themeButton

  switch (theme) {
    case "playwright":
      ;({ themeButton } = mainProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ themeButton } = mainProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ themeButton } = mainProps.dickinson.sylph)
      break
    case "elegy":
      ;({ themeButton } = mainProps.dickinson.elegy)
      break
  }

  return (
    <button
      onClick={onClick}
      className={`${themeButton} ${OldStandardTT.className}`}
    >
      <div className="flex justify-start items-center gap-4">
        {theme === "playwright" && (
          <GiMoonBats className="w-8 h-8 text-blood-animation  group-hover:animate-pulse-faster" />
        )}
        {theme === "bloodNight" && (
          <GiScrollUnfurled className="w-8 h-8 text-color-animation group-hover:animate-pulse-faster" />
        )}
        {theme === "sylph" && (
          <GiCurledLeaf className="w-8 h-8 text-aqua-animation group-hover:animate-pulse-faster transform scale-x-[-1]" />
        )}
        {theme === "elegy" && (
          <GiFairyWings className="w-8 h-8 text-sylph-animation group-hover:animate-pulse-faster" />
        )}
        <span className="">{text}</span>
      </div>
    </button>
  )
}

export default Button
