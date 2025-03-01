'use client'
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Glow1 from '../../../public/images/glow/Glow1.webp'
import HeroImage from '../../../public/images/hero.webp'

const Hero = () => {
    useGsapAnimations();
    return (
        <div className="">
            <Image src={Glow1} alt="Glow1" className="absolute inset-0 -z-10" id="glow__animation1" />
            <Image src={HeroImage} alt="Hero" className="h-screen w-full object-cover relative opacity-5" />
        </div>
    )
}

export default Hero