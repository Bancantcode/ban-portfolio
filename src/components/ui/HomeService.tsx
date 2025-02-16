'use client'
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Glow3 from '../../../public/images/glow/Glow3.webp'

const HomeService = () => {
    useGsapAnimations();
    return (
        <section>
            <Image src={Glow3} alt="Glow3" className="absolute right-0 top-[80vh]" id="glow__animation3" />
        </section>
    )
}

export default HomeService