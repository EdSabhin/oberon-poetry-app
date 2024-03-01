import React from "react"
import Image from "next/image"
import { Old_Standard_TT } from "next/font/google"

const OldStandardTT = Old_Standard_TT({ weight: "400", subsets: ["latin"] })

type Props = {
  title: string
  description: string
  headerClassName: string
  h1ClassName: string
  headerIcon: string
}

const Header = ({
  title,
  description,
  headerClassName,
  h1ClassName,
  headerIcon,
}: Props) => {
  return (
    <header className={headerClassName}>
      <h1 className={h1ClassName}>{title}</h1>
      <h2 className="text-[1.75rem] pt-4 pb-6 pr-4 text-start tracking-wide">
        {description}
      </h2>
      <div className=" w-full flex justify-end items-end pb-10 gap-2">
        <h3 className={`${OldStandardTT.className} text-2xl text-start`}>
          Gee Pee Tee, of House Chat
        </h3>
        <Image
          width={80}
          height={80}
          src={headerIcon}
          alt="black cat"
          className="transform scale-x-[-1] animate-pulse"
        />
      </div>
    </header>
  )
}

export default Header
