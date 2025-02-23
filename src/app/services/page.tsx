// 'use client'
// import useLenisScroll from "@/hooks/useLenisScroll"
import TextHeading from "@/components/ui/TextHeading"
import Button from "@/components/ui/Button"

const ServicesPage = () => {
  // useLenisScroll();
  return (
    <main>
      <section>
        <TextHeading 
          text="Services — I create innovative web designs in Figma and bring them to life with expert frontend development. Through clean and efficient code, I build high-performance websites tailored to your business needs. My focus is on crafting engaging, user-friendly experiences that captivate audiences and drive growth." 
          description="I specialize in transforming ideas into engaging, high-converting, and user-friendly digital experiences. With a keen eye for design and a strong foundation in frontend development, I craft visually stunning and seamlessly functional websites that enhance your brand’s online presence. My approach blends creativity with technical precision, ensuring an intuitive user experience that drives results. Let’s build something extraordinary together."
          className=""
        />
        <div className="flex gap-1 col-start-8 col-span-5">
          <a className="" href="/contact"><Button id="nav-btn" title="Contact" containerClass="" /></a>
          <a href="/services"><Button id="nav-btn" title="Services" containerClass="" /></a>
        </div>
        
      </section>
    </main>
  )
}

export default ServicesPage