'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './allprojects.css'
import { cards } from '@/constants/constants';
import TextReveal from './TextReveal';
import Button from './Button';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Card = ({ title, copy, roles, video, href, repository, index }) => {
    return (
        <div className="card relative" id={`card-${index + 1}`}>
            <div className="card-inner relative will-change-transform w-full h-full flex gap-sm section-x-padding py-lg">
                <div className="card-content flex-[2] flex flex-col justify-between">
                    <div>
                        <TextReveal text={title} className="heading leading-none mb-sm lg:mb-xs" marginRight="mr-1.5" />
                        <TextReveal text={copy} className="mb-lg text-style md:w-4/5 xl:w-3/5" marginRight="mr-1" />
                        <TextReveal text={Object.values(roles).join(', ')} className="text-heading-4" marginRight="mr-1" />
                    </div>
                    <div className='flex gap-md'>
                        <Link href={repository} target="_blank" className="">
                            <Button id="nav-btn" title="View Repository" containerClass="" />
                        </Link>
                        <Link href={href} target="_blank" className="">
                            <Button id="nav-btn" title="View Site" containerClass="" />
                        </Link>
                    </div>
                </div>

                <div className="card-img flex-1 aspect-video">
                    <video width="320" height="240" preload="none" autoPlay loop muted className="">
                        <source src={video} type="video/mp4" />
                            <track src={video} kind="captions" srcLang="en" label="English" default />
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
                    <Card key={index} {...card} index={index} />
                ))}
            </section>
            <section className="outro">
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, provident!</h1>
            </section>
        </div>
    )
}

export default AllProjects