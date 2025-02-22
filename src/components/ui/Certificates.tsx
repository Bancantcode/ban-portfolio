import { certificates } from '@/constants/constants'
import Image from 'next/image'
import Fade from '../../../public/images/glow/Fade.webp'
import Glow6 from '../../../public/images/glow/Glow6.webp'

const Certificates = () => {
  return (
    <div className='flex flex-col md:gap-12 gap-8 items-center py-12 justify-center relative overflow-hidden'>
      <Image src={Fade} alt="Fade Effect" className='w-full h-full object-cover absolute inset-0 z-10' />
      <Image src={Glow6} alt="Glow Elipse" className='absolute -z-10 w-[50rem] h-auto' />
      
      <div className='space-y-4' id='scroll-animation-24'>
        <h1 className='uppercase text-white font-black text-[2rem] lg:text-[5rem] whitespace-nowrap leading-none text-center' id='scroll-animation-'>CERTIFICATES</h1>
        <p className='text-white text-center px-[2rem]' dangerouslySetInnerHTML={{ __html: "hello" }}></p>
      </div>


      <div className='flex'>
          {
            certificates.map((cert) => (
              <Image key={cert.title} src={cert.src} alt={cert.alt} height={80} width={120} />
            ))
          }
      </div>
    </div>
  )
}

export default Certificates