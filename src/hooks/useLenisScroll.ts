import Lenis from 'lenis'
import { useEffect } from 'react'

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis() 
    
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])
}

export default useLenisScroll
