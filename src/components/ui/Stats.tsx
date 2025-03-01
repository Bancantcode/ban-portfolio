'use client'
import useGsapAnimations from '@/hooks/useGsapAnimations'
import { statistics } from '@/constants/constants'

const Stats = () => {
  useGsapAnimations();
  return (
    <div className='grid-style2 overflow-hidden section-x-padding mb-xl md:mb-3xl'>
      { 
        statistics.map((stat, index) => (
          <div key={index} id="scroll-effect" className='flex justify-between items-center md:items-start md:flex-col gap-xl mb-xs xl:mb-0 overflow-hidden py-md px-sm gradient rounded  col-span-4 md:col-span-5 xl:col-span-3'>
            <h2 className='heading leading-none uppercase font-medium grid-span-3'>{stat.title}</h2>
            <p className='text-style'>{stat.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Stats