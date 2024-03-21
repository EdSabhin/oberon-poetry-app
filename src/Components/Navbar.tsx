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
      <ul className="w-full flex max-md:flex-col justify-around items-center gap-5 text-[1.6rem] md:text-[2rem] lg:text-3xl 2xl:text-[2.6rem]">
        <div className="flex gap-4 group">
          <Link href="/" className={linkClass}>{`Shakespeare's Den`}</Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
          {theme === "elegy" && (
            <GiCurledLeaf className="w-10 h-10 text-emerald-200 group-hover:animate-pulse-faster transform scale-x-[-1]" />
          )}
        </div>

        <div className="flex gap-4 group">
          <Link
            href="/EmilyDsGreatestHits"
            className={linkClass}
          >{`Emily D's Greatest Hits`}</Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
          {theme === "elegy" && (
            <GiCurledLeaf className="w-10 h-10 text-emerald-200 group-hover:animate-pulse-faster transform scale-x-[-1]" />
          )}
        </div>
        <div className="flex gap-4 group">
          <Link href="/" className={linkClass}>
            Abode
          </Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster text-rose-950" />
          )}
          {theme === "elegy" && (
            <GiCurledLeaf className="w-10 h-10 text-emerald-200 group-hover:animate-pulse-faster transform scale-x-[-1]" />
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
