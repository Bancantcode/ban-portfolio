import Button from "../ui/Button"
import { navLinks } from "@/constants/constants"

const Navbar = () => {
  return (
    <header className="flex gap-2">
      {
        navLinks.map(link => (
          <a key={link.title} href={link.href} className="">
            <Button id="nav-btn" title={link.title} containerClass="" />
          </a>
        ))
      }
    </header>
  )
}

export default Navbar