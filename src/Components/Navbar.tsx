import navProps from "@/component-props/navProps"
import Link from "next/link"
import React from "react"
import { GiMoonBats } from "react-icons/gi"

type Props = {
  bloodNight?: boolean
}

const Navbar = ({ bloodNight }: Props) => {
  return (
    <div
      className={`${bloodNight ? navProps.shakespeare.bloodNight.class : navProps.shakespeare.playwright.class}`}
    >
      <ul className="w-full flex justify-around text-3xl">
        <div className="flex gap-4 group">
          <Link
            href="/"
            className={`${bloodNight ? navProps.shakespeare.bloodNight.linkClass : navProps.shakespeare.playwright.linkClass}`}
          >{`Shakespeare's Den`}</Link>
          {bloodNight && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
        </div>

        <div className="flex gap-4 group">
          <Link
            href="/EmilyDsGreatestHits"
            className={`${bloodNight ? navProps.shakespeare.bloodNight.linkClass : navProps.shakespeare.playwright.linkClass}`}
          >{`Emily D's Greatest Hits`}</Link>
          {bloodNight && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
        </div>
        <div className="flex gap-4 group">
          <Link
            href="/"
            className={`${bloodNight ? navProps.shakespeare.bloodNight.linkClass : navProps.shakespeare.playwright.linkClass}`}
          >
            Abode
          </Link>
          {bloodNight && (
            <GiMoonBats className="w-10 h-10 text-pink-900 group-hover:animate-pulse-faster" />
          )}
        </div>
      </ul>
    </div>
  )
}

export default Navbar
