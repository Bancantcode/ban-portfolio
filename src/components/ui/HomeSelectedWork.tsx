'use client'
// import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
// import Glow2 from '../../../public/images/glow/Glow2.webp'
import TextReveal from "./TextReveal"

const HomeSelectedWork = () => {
    useGsapAnimations();
    return (
        <div className="section-x-padding pt-xl md:pt-3xl pb-xl md:pb-3xl">
            {/* <Image src={Glow2} alt="Glow2" className="absolute top-[350vh] inset-0" id="glow__animation2"/> */}
            <TextReveal text="See My Projects" className="text-heading-1 lg:text-heading-display lg:w-4/5 leading-none uppercase font-medium mb-lg" marginRight="mr-2 lg:mr-5" />
        </div>
    )
}

export default HomeSelectedWork