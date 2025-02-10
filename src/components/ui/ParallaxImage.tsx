'use client'
import Image from "next/image";
import { useRef, useEffect } from "react"
import { useLenis } from "lenis/react";

const lerp = (start: number, end: number, factor: number): number => start + (end - start) * factor;

interface ParallaxImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, width, height }) => {
    const imageRaf = useRef<HTMLImageElement | null>(null);
    const bounds = useRef<{ top: number; bottom: number } | null>(null);
    const currentTranslateY = useRef<number>(0);
    const targetTranslateY = useRef<number>(0);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const updateBounds = () => {
            if(imageRaf.current) {
                const rect = imageRaf.current.getBoundingClientRect();
                bounds.current = {
                    top: rect.top + window.scrollY,
                    bottom: rect.bottom + window.scrollY,
                };
            }
        };

        updateBounds();
        window.addEventListener("resize", updateBounds);

        const animate = () => {
            if(imageRaf.current) {
                currentTranslateY.current = lerp(
                    currentTranslateY.current,
                    targetTranslateY.current,
                    0.1
                );

                if(Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
                    imageRaf.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
                }
            }
            rafId.current = requestAnimationFrame(animate);
        };

        animate();

        return() => {
            window.removeEventListener("resize", updateBounds);
            if(rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        }
    }, [])

    useLenis(({ scroll }) => {
        if(!bounds.current) return;
        const relativeScroll = scroll - bounds.current.top;
        targetTranslateY.current = relativeScroll * 0.2;
    })

    return (
        <div style={{ overflow: "hidden" }}>
            <Image 
                priority={true}
                ref={imageRaf}
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{                
                    willChange:"transform",
                    transform: "translateY(0) scale(1.25)",
                }} 
            />
        </div>
    )
}

export default ParallaxImage