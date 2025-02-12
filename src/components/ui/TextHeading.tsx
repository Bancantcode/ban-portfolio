import TextReveal from "./TextReveal"

interface TextHeadingProps {
    text: string;
    description: string;
}

const TextHeading: React.FC<TextHeadingProps> = ({ text, description }) => {
  return (
    <section>
        <TextReveal text={text} className="text-heading-3 leading-none"/>
        <TextReveal text={description} className="text-base w-1/4" />
    </section>
  )
}

export default TextHeading