import Button from "../ui/Button"
import { navLinks } from "@/constants/constants"
import TextReveal from "../ui/TextReveal"

const Navbar = () => {
  return (
    <header className="flex justify-between">
      <TextReveal text="Quick links" />
      <div className="flex gap-1">
        {
          navLinks.map(link => (
            <a key={link.title} href={link.href} className="">
              <Button id="nav-btn" title={link.title} containerClass="" />
            </a>
          ))
        }
      </div>
    </header>
  )
}

export default Navbar