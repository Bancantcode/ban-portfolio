'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { moreAboutMe } from "@/constants/constants";
import useGsapAnimations from "@/hooks/useGsapAnimations";
import TextReveal from "./TextReveal";
import Glow3 from '../../../public/images/glow/Glow3.webp'
import Grid1 from '../../../public/images/glow/Grid2.webp'

import Image from 'next/image';

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
                        start: 'top 70%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="section-x-padding pt-xl md:pt-3xl pb-xl md:pb-3xl">
            <Image src={Glow3} alt="Glow3" className="absolute right-0 top-[80vh]" id="glow__animation3" />
            <Image src={Grid1} alt='Grid Image' className='absolute -left-40 top-[105vh]'/>
            <TextReveal text="My Journey" className="text-heading-2 md:text-heading-1 lg:text-heading-display leading-none uppercase font-medium mb-lg" marginRight="mr-0" />
            {
                moreAboutMe.map((me, index) => (
                    <div key={index} className="grid grid-cols-4 md:grid-cols-10 xl:grid-cols-12 gap-x-xs mb-lg">
                        <div className="mb-md h-0.5 line w-full col-span-4 md:col-span-10 xl:col-span-12" ref={(el) => { linesRef.current[index] = el }}></div>
                        <TextReveal text={me.number} className="heading font-medium leading-none md:col-span-2" marginRight="mr-1.5" />
                        <TextReveal text={me.title} className="mb-xs heading font-medium leading-none col-start-2 col-span-3 md:col-start-6 md:col-span-5 xl:col-start-7" marginRight="mr-1.5" />
                        <TextReveal text={me.description} className="mb-md text-style col-start-1 col-span-4 md:col-start-6 md:col-span-5 xl:col-start-7 xl:col-span-3" marginRight="mr-1" />
                    </div>  
                ))
            }
        </div>
    );
}

export default WhoAmI;
