'use client'
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Glow2 from '../../../public/images/glow/Glow2.webp'

const HomeSelectedWork = () => {
    useGsapAnimations();
    return (
        <section>
            <Image src={Glow2} alt="Glow2" className="absolute top-[350vh] inset-0" id="glow__animation2"/>
        </section>
    )
}

export default HomeSelectedWork