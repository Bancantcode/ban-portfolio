'use client'
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Glow1 from '../../../public/images/glow/Glow1.webp'

const Hero = () => {
    useGsapAnimations();
    return (
        <section>
            <Image src={Glow1} alt="Glow1" className="absolute inset-0 -z-10" id="glow__animation1" />
        </section>
    )
}

export default Hero