import React from "react"
import Image from "next/image"

type Props = {
  image: string
}

const LoadingImage = ({ image }: Props) => {
  return (
    <div>
      <Image
        width={50}
        height={50}
        className="my-12 z-20 animate-ping"
        src={image}
        alt=""
      />
    </div>
  )
}

export default LoadingImage
