'use client'
import TextHeading from "@/components/ui/TextHeading"
import Stats from "@/components/ui/Stats"
import WhoAmI from "@/components/ui/WhoAmI"
import Skills from "@/components/ui/Skills"
import Certificates from "@/components/ui/Certificates"
// import useLenisScroll from "@/hooks/useLenisScroll"

const AboutPage = () => {
  // useLenisScroll();
  return (
    <main>
      {/* <div className="flex justify-center items-center h-screen">
        <h1>Hellar</h1>
      </div> */}
      <section>
        <TextHeading 
          text="About me — I'm Bryan, a freelance web developer dedicated to crafting digital experiences for businesses to unlock their growth potential." 
          description={`I have been passionate about design since I was in school, and I currently specialize in creating custom websites that I genuinely love. I have a strong desire to push the limits of creativity and honor excellence in the field of digital design. My focus is on providing specialized digital solutions, fusing creativity with artistic vision to bring my clients' vision to life. I'm supposed to go above and beyond expectations with every endeavor and make a lasting impact.`} 
          className="pb-xl md:pb-3xl"
        />
        <Stats />
      </section>
      
      <section>
        <WhoAmI />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Certificates />
      </section>
    </main>
  )
}

export default AboutPage