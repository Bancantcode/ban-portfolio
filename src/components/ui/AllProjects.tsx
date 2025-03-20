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

const Card = ({ title, copy, image, index }) => {
    return (
        <div className="card" id={`card-${index + 1}`}>
            <div className="card-inner">
                <div className="card-content">
                    <TextReveal text={title} className="mb-xl heading leading-none" marginRight="mr-1.5" />
                    <TextReveal text={copy} className="mb-lg text-style xl:w-4/5" marginRight="mr-1" />
                </div>
                <div className="card-img">
                    <Image
                        src={image}
                        alt={title}
                        width={300}
                        height={200} 
                        className=""
                    />
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
        <div className="app" ref={container}>
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