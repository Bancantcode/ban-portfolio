'use client'
// import useLenisScroll from "@/hooks/useLenisScroll"
import TextHeading from "@/components/ui/TextHeading"
import AllProjects from "@/components/ui/AllProjects"

const ProjectPage = () => {
  // useLenisScroll();
  return (
    <main>
      <section>
        <TextHeading 
          text="My Projects — A curated showcase of my most impactful work. Each project reflects my skills, creativity, and commitment to excellence, highlighting my ability to turn ideas into reality through innovation and dedication." 
          description="My projects showcase the work I have delivered, highlighting a diverse range of designs and functionalities. Take a look at my portfolio to explore the projects I’ve worked on. Since most of my experience comes from school-based projects and small clients, only a few are available for public viewing." 
          className=""
        />
      </section>

      <section>
        <AllProjects />
      </section>
    </main>
  )
}

export default ProjectPage