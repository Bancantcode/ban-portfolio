'use client'
import useGsapAnimations from '@/hooks/useGsapAnimations'
import { certificates } from '@/constants/constants'
import Image from 'next/image'
import Glow6 from '../../../public/images/glow/Glow6.webp'
import Button from './Button'
import TextReveal from './TextReveal'

const Certificates = () => {
  useGsapAnimations();
  const certificate = certificates[0];

  return (
    <div className='flex flex-col md:gap-12 gap-sm items-center py-3xl justify-center relative overflow-hidden'>
      <Image src={Glow6} alt="Glow Elipse" className='absolute -z-10 w-[50rem] h-auto' />

      <div className='flex flex-col items-center section-x-padding'>
        <TextReveal text={certificate.title} className="heading leading-none uppercase font-medium mb-xs" marginRight="mr-0" />
        <TextReveal text={certificate.content} className="flex items-center justify-center text-style md:w-2/3 md:text-base text-center" marginRight="mr-1" />
      </div>

      <div className='md:space-y-4 space-y-2 overflow-hidden'>
        <div className='ml-[-11rem] flex md:gap-xs gap-2xs md:h-[10rem] h-[4rem] z-0' id='leftmove__animation'>
          {certificate.upper_certificates.map((cert, index) => (
            <Image key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-md border-1 border-white' loading="lazy" />
          ))}
        </div>
        <div className='flex md:gap-xs gap-2xs md:h-[10rem] h-[4rem] z-0' id='rightmove__animation'>
          {certificate.lower_certificates.map((cert, index) => (
            <Image key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-md border-1 border-white' loading="lazy" />
          ))}
        </div>
      </div>

      <a href={certificate.link} target='_blank' className=''>
        <Button id="nav-btn" title={certificate.buttonText} containerClass="" />
      </a>
    </div>
  )
}

export default Certificates