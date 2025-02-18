// 'use client'
import TextHeading from "@/components/ui/TextHeading"
import Button from "@/components/ui/Button"
import Skills from "@/components/ui/Skills"
import Certificates from "@/components/ui/Certificates"
// import useLenisScroll from "@/hooks/useLenisScroll"

const AboutPage = () => {
  // useLenisScroll();
  return (
    <main>
      <section>
        <TextHeading 
          text="About me — I'm Bryan, a freelance web developer dedicated to crafting digital experiences for businesses to unlock their growth potential." 
          description={`I have been passionate about design since I was in school, and I currently specialize in creating custom websites that I genuinely love. I have a strong desire to push the limits of creativity and honor excellence in the field of digital design. My focus is on providing specialized digital solutions, fusing creativity with artistic vision to bring my clients' vision to life. I'm supposed to go above and beyond expectations with every endeavor and make a lasting impact.`} 
        />
        <div className="flex gap-1 col-start-8 col-span-5">
          <a href="/contact"><Button id="nav-btn" title="Contact" containerClass="" /></a>
          <a href="/services"><Button id="nav-btn" title="Services" containerClass="" /></a>
        </div>
      </section>

      <section>
        <h1>Expertise</h1>
        <Skills />
      </section>

      <section>
        <h1>My Certifications</h1>
        <Certificates />
        <a href="#" target="_blank">
          <Button id="nav-btn" title={`View Certificates`} containerClass="" />
        </a>
      </section>


    </main>
  )
}

export default AboutPage