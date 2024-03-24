import navbarProps from "@/component-props/navbarProps"

import Link from "next/link"
import React from "react"
import { GiMoonBats, GiCurledLeaf } from "react-icons/gi"

type Props = {
  theme: string
}

const Navbar = ({ theme }: Props) => {
  /* Theme */
  let navClass
  let linkClass

  switch (theme) {
    case "playwright":
      ;({ navClass, linkClass } = navbarProps.shakespeare.playwright)
      break
    case "bloodNight":
      ;({ navClass, linkClass } = navbarProps.shakespeare.bloodNight)
      break
    case "sylph":
      ;({ navClass, linkClass } = navbarProps.dickinson.sylph)
      break
    case "elegy":
      ;({ navClass, linkClass } = navbarProps.dickinson.elegy)
      break
  }

  return (
    <div className={navClass}>
      <ul className="w-full flex flex-col md:flex-row md:justify-around items-center gap-8 text-[1.6rem] md:text-[2rem] lg:text-3xl 2xl:text-[2.2rem]">
        <div className="flex items-start justify-center group">
          <Link href="/" className={linkClass}>
            Abode
          </Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="w-[3.2rem] h-[2.4rem] [group-hover:animate-pulse-faster text-rose-800" />
          )}
          {theme === "elegy" && (
            <GiCurledLeaf className=" w-12 h-10 text-emerald-200 group-hover:animate-pulse-faster transform scale-x-[-1]" />
          )}
        </div>

        <div className="flex justify-center group">
          <Link href="/ShakespearesDen" className={linkClass}>{`Shakespeare's Respite`}</Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="hidden md:block w-10 h-10 ml-3 group-hover:animate-pulse-faster text-rose-800" />
          )}
          {theme === "elegy" && (
            <GiCurledLeaf className="hidden md:block w-10 h-10 ml-2 text-emerald-200 group-hover:animate-pulse-faster transform scale-x-[-1]" />
          )}
        </div>

        <div className="flex justify-center group">
          <Link
            href="/EmilyDsGreatestHits"
            className={linkClass}
          >{`Emily D's Greatest Hits`}</Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="hidden md:block w-10 h-10 ml-3 group-hover:animate-pulse-faster text-rose-800" />
          )}
          {theme === "elegy" && (
            <GiCurledLeaf className="hidden md:block w-10 h-10 ml-2 text-emerald-200 group-hover:animate-pulse-faster transform scale-x-[-1]" />
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
