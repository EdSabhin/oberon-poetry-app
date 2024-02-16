import React from "react"
import Image from "next/image"

type Props = {
  image: string
}

const LoadingImage = ({ image }: Props) => {
  return (
    <div>
      <Image
        width={75}
        height={75}
        className="my-12 z-20 animate-spin-slow"
        src={image}
        alt=""
      />
    </div>
  )
}

export default LoadingImage
