'use client'
// import Image from "next/image"
// import useGsapAnimations from "@/hooks/useGsapAnimations"
// import Glow2 from '../../../public/images/glow/Glow2.webp'
import TextReveal from "./TextReveal"
import ProjectGrid from "./ProjectGrid"
import Button from "./Button"

const HomeSelectedWork = () => {
    // useGsapAnimations();
    return (
        <div className="section-x-padding pt-xl md:pt-3xl pb-xl md:pb-3xl">
            {/* <Image src={Glow2} alt="Glow2" className="absolute top-[350vh] inset-0" id="glow__animation2"/> */}
            <TextReveal text="See — My Projects" className="text-heading-1 lg:text-heading-display lg:w-4/5 leading-none uppercase font-medium mb-lg" marginRight="mr-2 lg:mr-5" />
            <div className="grid-style2 mb-xl xl:mb-3xl">
                <TextReveal className="text-base-small md:text-base leading-tight mb-2xs col-span-4 md:col-start-4 md:col-span-2 lg:col-start-3 xl:col-start-3 xl:col-span-2 2xl:col-start-3 2xl:col-span-1" text="[PROJECTS]" marginRight="mr-1" />
                <TextReveal className="text-base-small mb-md opacity-60 md:text-base leading-tight xl:text-base-large col-span-4 md:col-span-5 lg:col-span-4 xl:col-start-5 xl:col-span-4 2xl:col-start-4 2xl:col-span-3" text="Struggling with websites that fail to showcase your brand or fuel growth? I design high-quality web experiences that engage your audience and let you focus on expanding your business." marginRight="mr-1" />
                <div className="col-span-4 md:col-start-6 md:col-span-5 lg:col-start-5 lg:col-span-4 xl:col-span-4 2xl:col-start-4 2xl:col-span-3">
                    <a href="/services"><Button id="nav-btn" title="→ View Projects" containerClass="" /></a>
                </div>
            </div>

            <ProjectGrid />
        </div>
    )
}

export default HomeSelectedWork