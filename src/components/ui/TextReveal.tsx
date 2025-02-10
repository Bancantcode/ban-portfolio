"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  italicWords?: string[];
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className, italicWords = [] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".word");

    gsap.fromTo(words, { y: "100%" },
      {
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.005, //adjust stagger
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {text.split(" ").map((word, index) => (
        <div key={index} className="overflow-hidden mr-2">
          <span className={`inline-block word ${italicWords.includes(word) ? 'font-italic text-olive' : ''}`}>{word}</span>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
