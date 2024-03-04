import React from "react"
import Image from "next/image"

import headerProps from "@/component-props/headerProps"

import { Old_Standard_TT } from "next/font/google"


const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  theme:string
}

const Header = ({ theme }: Props) => {
  let title;
  let description;
  let headerClass;
  let h1Class;
  let icon;

  switch ( theme ) {
    case 'playwright':
      title = headerProps.shakespeare.playwright.title
      description = headerProps.shakespeare.playwright.description
      headerClass = headerProps.shakespeare.playwright.class
      h1Class = headerProps.shakespeare.playwright.h1Class
      icon = headerProps.shakespeare.playwright.icon
      break;
    case 'bloodNight':
      title = headerProps.shakespeare.bloodNight.title
      description = headerProps.shakespeare.bloodNight.description
      headerClass = headerProps.shakespeare.bloodNight.class
      h1Class = headerProps.shakespeare.bloodNight.h1Class
      icon = headerProps.shakespeare.bloodNight.icon
      break;
    case 'sylph':
      title = headerProps.dickinson.sylph.title
      description = headerProps.dickinson.sylph.description
      headerClass = headerProps.dickinson.sylph.class
      h1Class = headerProps.dickinson.sylph.h1Class
      icon = headerProps.dickinson.sylph.icon
      break;
    case 'elegy':
      title = headerProps.dickinson.elegy.title
      description = headerProps.dickinson.elegy.description
      headerClass = headerProps.dickinson.elegy.class
      h1Class = headerProps.dickinson.elegy.h1Class
      icon = headerProps.dickinson.elegy.icon
      break;
  }
  return (
    <header
      className={headerClass}
    >
      <h1
        className={h1Class}
      >{title}</h1>
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
