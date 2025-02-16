'use client'
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Glow1 from '/images/glow/Glow1.png'

const Hero = () => {
    useGsapAnimations();
    return (
        <section>
            <Image />
        </section>
    )
}

export default Hero