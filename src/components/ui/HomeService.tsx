'use client'
// import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
// import Glow3 from '../../../public/images/glow/Glow3.webp'
import { servicesInfo } from '../../constants/constants'
import TextReveal from "./TextReveal"
import { useRef, useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxImage from "./ParallaxImage"
gsap.registerPlugin(ScrollTrigger);

const HomeService = () => {
    useGsapAnimations();
    const linesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        linesRef.current.forEach((line) => {
            if (!line) return;
            gsap.fromTo(line, { scaleX: 0, transformOrigin: 'left center' },
                {
                    scaleX: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="section-x-padding pt-xl md:pt-3xl pb-xl md:pb-3xl">
            {/* <Image src={Glow3} alt="Glow3" className="absolute right-0 top-[80vh]" id="glow__animation3" /> */}
            <TextReveal text="How Can I Help You" className="text-heading-2 md:text-heading-1 lg:text-heading-display leading-none uppercase font-medium mb-lg" marginRight="" />
            {
                servicesInfo.map((service, index) => (
                    <div key={index} className="grid grid-cols-4 md:grid-cols-10 xl:grid-cols-12 gap-x-xs mb-lg">
                        <div className="mb-md h-0.5 line w-full col-span-4 md:col-span-10 xl:col-span-12" ref={(el) => { linesRef.current[index] = el }}></div>
                        <TextReveal text={service.number} className="heading font-medium leading-none md:col-span-2" marginRight="mr-1.5" />  
                                              
                        <div className="col-start-2 col-span-3 md:col-start-4 md:col-span-7 lg:col-start-3 lg:col-span-6 xl:col-start-3 xl:col-span-4">
                            <TextReveal text={service.name} className="mb-xs heading font-medium leading-none" marginRight="mr-1.5" />
                            <TextReveal text={service.description} className="mb-lg text-style xl:w-4/5" marginRight="mr-1" />
                        </div>

                        <div className="mb-md overflow-hidden h-72 md:h-96 lg:h-[30rem] flex justify-center items-center text-style col-start-1 col-span-4 md:col-start-4 md:col-span-7 lg:col-start-3 xl:col-start-9 xl:col-span-4">
                            <ParallaxImage 
                                src={service.image}
                                alt={service.alt}
                                width={service.height}
                                height={service.width}
                                className=""
                            />
                        </div>
                    </div>  
                ))
            }
        </div>
    )
}

export default HomeService