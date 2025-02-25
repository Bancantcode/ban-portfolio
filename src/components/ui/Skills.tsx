'use client'
import useGsapAnimations from "@/hooks/useGsapAnimations"
import { expertise } from '@/constants/constants';
import Image from 'next/image';
import TextReveal from './TextReveal';
import Grid1 from '../../../public/images/glow/Grid2.webp'
import StatsAPI from './StatsAPI';

const Skills = () => {
  useGsapAnimations();
  return (
    <div className='flex flex-col justify-center items-center w-full gap-3xs py-xl md:py-3xl'>
      <Image src={Grid1} alt='Grid Image' className='absolute right-200 top-[220vh]'/>
      <TextReveal text="Expertise" className="text-heading-2 md:text-heading-1 lg:text-heading-display leading-none uppercase font-medium mb-xs" marginRight="mr-0" />

      <div className='flex flex-wrap justify-center gap-2 z-10 md:w-4/5 xl:w-3/5 overflow-hidden'>
        {expertise.map((exp, index) => (
          <div className="relative flex items-center" key={index} id="skills__animation">
            <div className="group relative flex items-center">
              <span className='bg-semi-dark text-light-violet rounded-[0.4rem] border border-violet lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-violet transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36] cursor-help'>
                <Image src={exp.icon} alt={exp.tooltip} width={32} height={32} className='w-6 h-6 lg:w-10 lg:h-10 xl:w-11 xl:h-11' />
              </span>
              <div className={`absolute text-xs bg-semi-dark text-white lg:px-2 px-1.5 lg:py-1.5 py-1 z-50 rounded-md opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out top-[120%] left-[50%] transform translate-x-[-50%] pointer-events-none border border-light-violet`}>
                {exp.tooltip}
              </div>
            </div>
          </div>
        ))}
      </div>

      <StatsAPI />
    </div>
  )
}

export default Skills
