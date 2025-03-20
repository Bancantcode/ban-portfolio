'use client'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { allProjects } from '@/constants/constants';
import Image from 'next/image';
import './allprojects.css'

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

// const Card = ({ name, description, image, index }) => {
const Card = ({ title, copy, index }) => {
    return (
        <div className="card" id={`card-${index + 1}`}>
            <div className="card-inner">
                <div className="card-content">
                    <h1>{title}</h1>
                    <p>{copy}</p>
                </div>
                <div className="card-img">
                    <Image
                        src={`/assets/card${index + 1}.webp`}
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
    const cards = [
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
        {
            title: "Brand Foundation",
            copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima dolor aspernatur labore inventore quae dolores a deserunt porro beatae."
        },
    ]

    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".card");

        ScrollTrigger.create({
            trigger: cards[0],
            start: "top 35%",
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
                    start: "top 35%",
                    endTrigger: ".outro",
                    end: "top 65%",
                    pin: true,
                    pinSpacing: false,
                });

                gsap.to(cardInner, {
                    y: `-${(cards.length - index) * 14}vh`,
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 35%",
                        endTrigger: ".outro",
                        end: "top 65%",
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
            <section className="hero">
                <Image src="/images/hero.webp" alt="asdas" width={300} height={300} />
            </section>
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