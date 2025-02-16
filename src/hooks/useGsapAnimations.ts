'use client'
import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimations = () => {
  useEffect(() => {
    //check if the screen width is greater than 768px (considered as mobile size)
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      //if on mobile, kill all ScrollTrigger instances and GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.globalTimeline.clear();
      return;
    }

    //GSAP ANIMATIONS
    gsap.fromTo('#scroll-effect', { y: "100%" },
      {
        y: "0%",
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.005, //adjust stagger
        scrollTrigger: {
          trigger: '#scroll-effect',
          start: "top 85%",
          end: "top 50%",
          scrub: false,
        },
      }
    );

    // GLOW ANIMATIONS
    gsap.to('#glow__animation1', {
      scrollTrigger: {
        trigger: '#glow__animation1',
        toggleActions: 'restart pause reverse pause',
        scrub: 1,
        markers: false,
        start: 'top -10%',
        end: 'bottom 10%',
      },
      x: -340,
      opacity: 0,
      ease: 'none',
      duration: 3,
    });

    gsap.fromTo('#glow__animation2', { opacity: 0 }, //from
      { // to
        opacity: 4,
        scrollTrigger: {
          trigger: '#glow__animation2',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top 50%',
          end: 'bottom 10%',
        },
        y: -240,
        ease: 'none',
        duration: 3,
      }
    );

    gsap.fromTo('#glow__animation3', { opacity: 0.3 }, //from
      {
        opacity: 4,
        scrollTrigger: {
          trigger: '#glow__animation3',
          toggleActions: 'restart pause reverse pause',
          scrub: 1,
          markers: false,
          start: 'top -20%',
          end: 'bottom 10%',
        },
        y: 240,
        ease: 'none',
        duration: 3,
      }
    );
    

    
  }, []);
}

export default useGsapAnimations