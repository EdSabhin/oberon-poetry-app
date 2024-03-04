import navProps from "@/component-props/navProps"

import Link from "next/link"
import React from "react"
import { GiMoonBats, GiVineLeaf } from "react-icons/gi"

type Props = {
  theme: string
}

const Navbar = ({ theme }: Props) => {
  let navClass;
  let linkClass;

  switch ( theme ) {
    case 'playwright':
      ({navClass, linkClass} = navProps.shakespeare.playwright)
      break;
    case 'bloodNight':
      ({navClass, linkClass} = navProps.shakespeare.bloodNight)
      break;
    case 'sylph':
      ({navClass, linkClass} = navProps.dickinson.sylph)
      break;
    case 'elegy':
      ({navClass, linkClass} = navProps.dickinson.elegy)
      break;
  }

  return (
    <div
      className={navClass}
    >
      <ul className="w-full flex justify-around text-3xl">
        <div className="flex gap-4 group">
          <Link
            href="/"
            className={linkClass}
          >{`Shakespeare's Den`}</Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
          {theme === "elegy" && (
            <GiVineLeaf className="w-10 h-10 text-teal-600 group-hover:animate-pulse-faster" />
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
            <GiVineLeaf className="w-10 h-10 text-teal-600 group-hover:animate-pulse-faster" />
          )}
        </div>
        <div className="flex gap-4 group">
          <Link
            href="/"
            className={linkClass}
          >
            Abode
          </Link>
          {theme === "bloodNight" && (
            <GiMoonBats className="w-10 h-10 text-pink-900 group-hover:animate-pulse-faster" />
          )}
          {theme === "elegy" && (
            <GiVineLeaf className="w-10 h-10 text-teal-600 group-hover:animate-pulse-faster" />
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
