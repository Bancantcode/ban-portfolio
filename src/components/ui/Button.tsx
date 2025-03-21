import TextReveal from "./TextReveal";
import { cn } from "@/lib/utils";

interface ButtonProps {
  id: string 
  title: string;
  containerClass: string;
}

const Button: React.FC<ButtonProps> = ({ id, title, containerClass }) => {
  return (
    <button id={id} className={cn("group relative z-10 w-fit cursor-pointer overflow-hidden", containerClass)}>
      <span className="relative inline-flex overflow-hidden font-general text-base">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          <TextReveal text={title} className="" marginRight="mr-1"/>
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          <TextReveal text={title} className="" marginRight="mr-1"/>
        </div>
      </span>
    </button>
  );
};

export default Button;
