import TextReveal from "./TextReveal"

interface TextHeadingProps {
    text: string;
    description: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ text, description }) => {
  return (
    <section className="grid-style">
      <TextReveal text={text} className="text-heading-3 leading-none col-span-12"/>
      <TextReveal text={description} className="text-base col-start-8 col-span-5" />

      
    </section>
  )
}

export default TextHeading