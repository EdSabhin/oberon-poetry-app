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
      navClass = navProps.shakespeare.playwright.class
      linkClass = navProps.shakespeare.playwright.linkClass
      break;
    case 'bloodNight':
      navClass = navProps.shakespeare.bloodNight.class
      linkClass = navProps.shakespeare.bloodNight.linkClass
      break;
    case 'sylph':
      navClass = navProps.dickinson.sylph.class
      linkClass = navProps.dickinson.sylph.linkClass
      break;
    case 'elegy':
      navClass = navProps.dickinson.elegy.class
      linkClass = navProps.dickinson.elegy.linkClass
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
