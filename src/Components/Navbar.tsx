import Link from "next/link"
import React from "react"

type Props = {
  className: string
  ulClassName: string
  linkClassName: string
}

const Navbar = ({ className, ulClassName, linkClassName }: Props) => {
  return (
    <div className={className}>
      <ul className={ulClassName}>
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
