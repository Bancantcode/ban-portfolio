'use client'
import useGsapAnimations from '@/hooks/useGsapAnimations'
import { statistics } from '@/constants/constants'

const Stats = () => {
  useGsapAnimations();
  return (
    <div className='grid grid-cols-4 md:grid-cols-10 xl:grid-cols-12 gap-x-xs overflow-hidden section-x-padding'>
      { 
        statistics.map((stat, index) => (
          <div key={index} id="scroll-effect" className='flex justify-between items-center md:items-start md:flex-col gap-xl mb-xs xl:mb-0 overflow-hidden py-md px-sm bg-semi-dark rounded hover:shadow-2xl hover:shadow-violet border border-[#412F84] col-span-4 md:col-span-5 xl:col-span-3'>
            <h2 className='heading leading-none uppercase font-medium grid-span-3'>{stat.title}</h2>
            <p className='text-style'>{stat.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stats