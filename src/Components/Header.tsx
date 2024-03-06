import React from "react"
import Image from "next/image"

import headerProps from "@/component-props/headerProps"

import { Old_Standard_TT } from "next/font/google"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  theme: string
}

const Header = ({ theme }: Props) => {
  /*Theme*/
  let title
  let description
  let headerClass
  let authorClass
  let icon

  switch (theme) {
    case "playwright":
      ;({ title, description, headerClass, authorClass, icon } =
        headerProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ title, description, headerClass, authorClass, icon } =
        headerProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ title, description, headerClass, authorClass, icon } =
        headerProps.dickinson.sylph)
      break
    case "elegy":
      ;({ title, description, headerClass, authorClass, icon } =
        headerProps.dickinson.elegy)
      break
  }

  return (
    <header className={headerClass}>
      <h1 className={authorClass}>{title}</h1>
      <h2 className="text-[1.75rem] pt-4 pb-6 pr-4 text-start tracking-wide">
        {description}
      </h2>
      <div className="w-full flex justify-end items-end pb-10 gap-2">
        <h3 className={`${OldStandardTT.className} text-2xl text-start`}>
          Gee Pee Tee, of House Chat
        </h3>
        {icon && (
          <Image
            width={80}
            height={80}
            src={icon}
            alt="black cat"
            className="transform scale-x-[-1]"
          />
        )}
      </div>
    </header>
  )
}

export default Header
