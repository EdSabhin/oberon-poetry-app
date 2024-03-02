import Link from "next/link"
import React from "react"

type Props = {
  className: string
  linkClassName: string
}

const Navbar = ({ className, linkClassName }: Props) => {
  return (
    <div className={className}>
      <ul className="w-full flex justify-around text-3xl">
        <Link href="/" className={linkClassName}>{`Shakespeare's Den`}</Link>
        <Link
          href="/EmilyDsGreatestHits"
          className={linkClassName}
        >{`Emily D's Greatest Hits`}</Link>
        <Link href="/PoetsList" className={linkClassName}>
          Explore More Poets
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
