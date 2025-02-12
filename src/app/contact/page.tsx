'use client'
import TextReveal from "@/components/ui/TextReveal"

const ContactPage = () => {
  return (
    <main>
      <section className="grid-style">
        <TextReveal 
          text="Get in Touch"  
          className="text-heading-3 leading-none col-span-8"/>
        <TextReveal 
          text="I am ready to help! Whether you need a website for your project, want to improve an existing one, or just have a question, feel free to reach out. I'm always open to new opportunities and collaborations!" 
          className="text-base col-start-8 col-span-5" />
      </section>
    </main>
  )
}

export default ContactPage