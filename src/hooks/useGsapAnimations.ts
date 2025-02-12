import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap-trial/ScrollTrigger"

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

    

    
  }, []);
}

export default useGsapAnimations