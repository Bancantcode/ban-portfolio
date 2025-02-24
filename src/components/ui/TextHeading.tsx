'use client'
import TextReveal from "./TextReveal"
import Image from "next/image";
// import useGsapAnimations from "@/hooks/useGsapAnimations";
import Glow1 from '../../../public/images/glow/Glow1.webp'
import Button from "./Button";
import { cn } from "@/lib/utils";

interface TextHeadingProps {
    text: string;
    description: string;
    className: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ text, description, className }) => {
  // useGsapAnimations();
  return (
    <div className={cn("grid-style section-x-padding pt-xl md:pt-3xl", className)}>
      <Image src={Glow1} alt="Glow1" className="absolute inset-0 -z-10" id="glow__animation1" />
      <TextReveal text={text} className="heading leading-none mb-xl col-start-1 col-span-4 md:col-span-9 lg:col-span-12" marginRight="mr-2" />
      <TextReveal text={description} className="text-style mb-md col-start-1 col-span-4 md:col-start-5 md:col-span-5 lg:col-start-7 lg:col-span-6" marginRight="mr-1" />

      <div className="flex gap-6 col-start-1 col-span-4 md:col-start-5 md:col-span-5 lg:col-start-7 lg:col-span-6">
        <a href="/contact"><Button id="nav-btn" title="Contact" containerClass="" /></a>
        <a href="/services"><Button id="nav-btn" title="Services" containerClass="" /></a>
      </div>
    </div>
  )
}

export default TextHeading