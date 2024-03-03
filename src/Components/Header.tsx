import React from "react"
import Image from "next/image"
import { Old_Standard_TT } from "next/font/google"
import headerProps from "@/component-props/headerProps"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  bloodNight?: boolean
}

const Header = ({ bloodNight }: Props) => {
  return (
    <header
      className={`${bloodNight ? headerProps.shakespeare.bloodNight.class : headerProps.shakespeare.playwright.class}`}
    >
      <h1
        className={`${bloodNight ? headerProps.shakespeare.bloodNight.h1Class : headerProps.shakespeare.playwright.h1Class}`}
      >{`${bloodNight ? headerProps.shakespeare.bloodNight.title : headerProps.shakespeare.playwright.title}`}</h1>
      <h2 className="text-[1.75rem] pt-4 pb-6 pr-4 text-start tracking-wide">
        {`${bloodNight ? headerProps.shakespeare.bloodNight.description : headerProps.shakespeare.playwright.description}`}
      </h2>
      <div className="w-full flex justify-end items-end pb-10 gap-2">
        <h3 className={`${OldStandardTT.className} text-2xl text-start`}>
          Gee Pee Tee, of House Chat
        </h3>
        <Image
          width={80}
          height={80}
          src={`${bloodNight ? headerProps.shakespeare.bloodNight.icon : headerProps.shakespeare.playwright.icon}`}
          alt="black cat"
          className="transform scale-x-[-1]"
        />
      </div>
    </header>
  )
}

export default Header
