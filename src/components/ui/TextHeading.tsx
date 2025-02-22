'use client'
import TextReveal from "./TextReveal"
import Image from "next/image";
// import useGsapAnimations from "@/hooks/useGsapAnimations";
import Glow1 from '../../../public/images/glow/Glow1.webp'
import Button from "./Button";

interface TextHeadingProps {
    text: string;
    description: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ text, description }) => {
  // useGsapAnimations();
  return (
    <section className="grid-style section-x-padding py-xl md:py-3xl">
      <Image src={Glow1} alt="Glow1" className="absolute inset-0 -z-10" id="glow__animation1" />
      <TextReveal text={text} className="heading leading-none col-start-1 col-span-12 mb-xl" marginRight="mr-2" />
      <TextReveal text={description} className="text-style md:text-base mb-md leading-tight col-start-1 col-span-12 md:col-start-6 md:col-span-5 lg:col-start-7 lg:col-span-6 xl:col-start-8" marginRight="mr-1" />

      <div className="flex gap-10 col-start-8 col-span-5">
        <a href="/contact"><Button id="nav-btn" title="Contact" containerClass="" /></a>
        <a href="/services"><Button id="nav-btn" title="Services" containerClass="" /></a>
      </div>
    </section>
  )
}

export default TextHeading