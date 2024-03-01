import React from "react"
import Image from "next/image"

type Props = {
  image: string
}

const LoadingImage = ({ image }: Props) => {
  return (
    <>
      <Image
        width={50}
        height={50}
        className="mt-12 mb-24 animate-ping"
        src={image}
        alt=""
      />
    </>
  )
}

export default LoadingImage
