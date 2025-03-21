'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import './allprojects.css'
import { cards } from '@/constants/constants';
import TextReveal from './TextReveal';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, image, roles, index }) => {
    return (
        <div className="card relative" id={`card-${index + 1}`}>
            <div className="card-inner relative will-change-transform w-full h-full flex gap-sm section-x-padding py-lg xl:py-xl">
                <div className="card-content flex-[2] flex flex-col justify-between">
                    <div>
                        <TextReveal text={title} className="heading leading-none mb-sm lg:mb-xs" marginRight="mr-1.5" />
                        <TextReveal text={copy} className="text-style md:w-4/5 xl:w-3/5 2xl:w-1/2" marginRight="mr-1" />
                    </div>
                    <TextReveal text={Object.values(roles).join(', ')} className="text-style" marginRight="mr-1" />
                </div>
                <div className="card-img flex-1 aspect-video overflow-hidden">
                    {/* <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={300} 
                        className="rounded-lg h-full"
                    /> */}
                    <video width="320" height="240" preload="none" autoPlay loop muted>
                        <source src="/videos/video.mp4" type="video/mp4" />
                            <track
                                src="/videos/video.mp4"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

const AllProjects = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card");

        ScrollTrigger.create({
            trigger: cards[0],
            start: "top 30%",
            endTrigger: cards[cards.length - 1],
            end: "top 30%",
            pin: ".intro",
            pinSpacing: false,
        });

        cards.forEach((card, index) => {
            const isLastCard = index === cards.length - 1;
            const cardInner = card.querySelector(".card-inner");

            if(!isLastCard) {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 30%",
                    endTrigger: ".outro",
                    end: "top 50%",
                    pin: true,
                    pinSpacing: false,
                });

                gsap.to(cardInner, {
                    y: `-${(cards.length - index) * 14}vh`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 30%",
                        endTrigger: ".outro",
                        end: "top 50%",
                        scrub: true,
                    }
                })
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        }
    }, { scope: container });

    return (
        // <div className="app" ref={container}> 
        <div className="app" >
            <section className="intro">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus nam laboriosam quisquam assumenda voluptates!</h1>
            </section>
            <section className="cards">
                {cards.map((card, index) => (
                    <Card key={index} {...card} image={card.image} index={index} />
                ))}
            </section>
            <section className="outro">
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, provident!</h1>
            </section>
        </div>
    )
}

export default AllProjects