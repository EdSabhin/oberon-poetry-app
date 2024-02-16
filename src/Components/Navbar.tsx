import Link from "next/link"
import React from "react"

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="w-full p-8 bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900">
      <ul className="w-full flex justify-center gap-14 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-yellow-300">
        <Link href="/">{`Shakespeare's Den`}</Link>
        <Link href="/DickinsonTitles">{`Emily D's Greatest Hits`}</Link>
        <Link href="/PoetsList">Explore More Poets</Link>
      </ul>
    </div>
  )
}

export default Navbar
