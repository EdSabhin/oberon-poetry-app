import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full p-8 bg-gradient-to-t from-gray-900 via-indigo-400 to-gray-900">
      <ul className="w-full flex justify-center gap-14 text-3xl text-amber-300">
        <Link href="/">{`Shakespeare's Top 5`}</Link>
        <Link href="/DickinsonTitles">{`Emily's Greatest Hits`}</Link>
        <Link href="/PoetsList">Explore More Poets</Link>
      </ul>
    </div>
  );
};

export default Navbar;
