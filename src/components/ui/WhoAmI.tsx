'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useGsapAnimations from "@/hooks/useGsapAnimations";
import TextReveal from "./TextReveal";
import { moreAboutMe } from "@/constants/constants";

gsap.registerPlugin(ScrollTrigger);

const WhoAmI = () => {
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
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="section-x-padding pt-xl md:pt-3xl pb-xl md:pb-3xl">
            {/* <TextReveal text="More About Me" className="heading leading-none col-start-1 col-span-4 md:col-span-10 lg:col-span-12" marginRight="mr-2" /> */}
            {
                moreAboutMe.map((me, index) => (
                    <div key={index} className="grid grid-cols-4 md:grid-cols-10 xl:grid-cols-12 gap-x-xs">
                        <div className="mb-md h-0.5 bg-violet w-full col-span-4 md:col-span-10 xl:col-span-12" ref={(el) => { linesRef.current[index] = el }}></div>
                        <TextReveal text={me.number} className="text-heading-3 md:text-heading-2 leading-none" marginRight="mr-1.5" />
                        <TextReveal text={me.title} className="mb-xs text-heading-3 md:text-heading-2 leading-none col-start-2 col-span-2 md:col-start-6 md:col-span-5 xl:col-start-7" marginRight="mr-1.5" />
                        <TextReveal text={me.description} className="mb-md text-style col-start-1 col-span-4 md:col-start-6 md:col-span-5 xl:col-start-7 xl:col-span-3" marginRight="mr-1" />
                    </div>  
                ))
            }
        </div>
    );
}

export default WhoAmI;
