'use client'
import useGsapAnimations from '@/hooks/useGsapAnimations'
import { certificates } from '@/constants/constants'
import Image from 'next/image'
import Fade from '../../../public/images/glow/Fade.webp'
import Glow6 from '../../../public/images/glow/Glow6.webp'
import Button1 from './Button1'
import TextReveal from './TextReveal'

const Certificates = () => {
  useGsapAnimations();
  const certificate = certificates[0];

  return (
    <div className='flex flex-col md:gap-12 gap-8 items-center py-12 justify-center relative overflow-hidden'>
      <Image src={Fade} alt="Fade Effect" className='w-full h-full object-cover absolute inset-0 z-10' />
      <Image src={Glow6} alt="Glow Elipse" className='absolute -z-10 w-[50rem] h-auto' />

      <div className='flex flex-col items-center' id=''>
        <h1 className='uppercase font-bold heading'>
          <TextReveal text={certificate.title} className="heading leading-none col-start-1 col-span-12 mb-xl" marginRight="mr-2" />
        </h1>
        <TextReveal text={certificate.content} className="text-style md:text-base w-1/2" marginRight="mr-1" />
      </div>

      <div className='md:space-y-4 space-y-2 overflow-hidden'>
        <div className='ml-[-11rem] flex md:gap-4 gap-2 md:h-[10rem] h-[4rem] z-0' id='leftmove__animation'>
          {certificate.upper_certificates.map((cert, index) => (
            <Image key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-md border-1 border-white' />
          ))}
        </div>
        <div className='flex md:gap-4 gap-2 md:h-[10rem] h-[4rem] z-0' id='rightmove__animation'>
          {certificate.lower_certificates.map((cert, index) => (
            <Image key={index} src={cert.src} alt={`Certification ${index + 1}`} className='h-full w-auto rounded-md border-1 border-white' />
          ))}
        </div>
      </div>

      <a href={certificate.link} target='_blank' rel='noopener noreferrer' className='z-20'>
        <Button1 text={certificate.buttonText}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
          </svg>
        </Button1>
      </a>
    </div>
  )
}

export default Certificates