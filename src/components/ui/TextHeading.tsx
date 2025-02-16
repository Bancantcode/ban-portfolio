'use client'
import TextReveal from "./TextReveal"
import Image from "next/image";
import useGsapAnimations from "@/hooks/useGsapAnimations";
import Glow1 from '../../../public/images/glow/Glow1.webp'

interface TextHeadingProps {
    text: string;
    description: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ text, description }) => {
  useGsapAnimations();
  return (
    <div className="grid-style section-x-padding py-xl md:py-3xl">
      <Image src={Glow1} alt="Glow1" className="absolute inset-0 -z-10" id="glow__animation1" loading="lazy" />
      <TextReveal text={text} className="text-heading-3 lg:text-heading-1 leading-none col-start-1 col-span-12 mb-xl" marginRight="mr-2"/>
      <TextReveal text={description} className="text-base col-start-1 col-span-4 lg:col-start-9 lg:col-span-5" marginRight="mr-1" />
    </div>
  )
}

export default TextHeading