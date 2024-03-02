import Link from "next/link"
import React from "react"
import { GiMoonBats } from "react-icons/gi"

type Props = {
  className: string
  linkClassName: string
  bloodNight?: boolean
}

const Navbar = ({ className, linkClassName, bloodNight }: Props) => {
  return (
    <div className={className}>
      <ul className="w-full flex justify-around text-3xl">
        <div className="flex gap-4 group">
          <Link href="/" className={linkClassName}>{`Shakespeare's Den`}</Link>
          {bloodNight && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
        </div>

        <div className="flex gap-4 group">
          <Link
            href="/EmilyDsGreatestHits"
            className={linkClassName}
          >{`Emily D's Greatest Hits`}</Link>
          {bloodNight && (
            <GiMoonBats className="w-10 h-10 group-hover:animate-pulse-faster" />
          )}
        </div>
        <div className="flex gap-4 group">
          <Link href="/" className={linkClassName}>
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
