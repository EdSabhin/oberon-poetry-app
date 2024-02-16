import Link from "next/link"
import React from "react"

type Props = {
  className: string
  ulClassName: string
}

const Navbar = ({ className, ulClassName }: Props) => {
  return (
    <div className={className}>
      <ul className={ulClassName}>
        <Link href="/">{`Shakespeare's Den`}</Link>
        <Link href="/EmilyDsGreatestHits">{`Emily D's Greatest Hits`}</Link>
        <Link href="/PoetsList">Explore More Poets</Link>
      </ul>
    </div>
  )
}

export default Navbar
