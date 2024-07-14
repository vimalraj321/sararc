import Image from 'next/image'
import React from 'react'
type Props = {
  image: string,
  name: string
}

export const SerivesCard = ({ image, name }: Props) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image src={image} alt={"image1"} width={550} height={550} className="w-[350px] h-[250px] object-cover rounded-xl aspect-square bg-center" />
      </div>
      <div className="w-full mt-5">
        <h3 className="text-lg text-center font-semibold tracking-wide">{name}</h3>
      </div>
    </div>
  )
}

