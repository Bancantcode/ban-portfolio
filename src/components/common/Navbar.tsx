'use client'
import { navLinks } from "@/constants/constants"
import Button from "../ui/Button"
import Logo from '../../../public/images/SB-logo.png'
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Link from "next/link"

const Navbar = () => {
  useGsapAnimations();
  return (
    <header className="flex justify-between items-center py-xs md:py-md section-x-padding">
      <div className="overflow-hidden">
        <Link href="/">
          <Image className="" src={Logo} alt="Banwagon Logo" width={45} height={40} id="scroll-effect"/>
        </Link>
      </div>
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