import TextReveal from "./TextReveal"

interface TextHeadingProps {
    text: string;
    description: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ text, description }) => {
  return (
    <section className="grid-style">
      <TextReveal text={text} className="text-heading-3 leading-none col-span-12" marginRight="mr-2"/>
      <TextReveal text={description} className="text-base col-start-8 col-span-5" marginRight="mr-1" />
    </section>
  )
}

export default TextHeading