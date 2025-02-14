import Badge from './Badge'
import { expertise } from '@/constants/constants';
import Image from 'next/image';

const Skills = () => {

  const techStacks = ExpertiseData[0].techStacks;

  return (
    <div className='flex flex-col lg:gap-6 gap-4 py-8 pt-14'>
      <h1 className='uppercase text-white font-black text-[3rem] lg:text-[7rem] whitespace-nowrap leading-none text-center md:mb-[3rem]' id='scroll-animation-26'>EXPERTISE</h1>
      <div className='flex justify-center flex-wrap xl:px-[27rem] lg:px-80 md:px-60 px-4 items-center gap-2.5 lg:gap-4 my-4 z-10' id='scroll-animation-27'>
        {techStacks.map((stack, index) => (
          <div className="relative flex items-center" key={index}>
            <div className="group relative flex items-center">
              <Badge styles={'lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84] transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36] cursor-help'}>
                <img src={stack.icon} alt={stack.tooltip} className='w-6 h-6 lg:w-8 lg:h-8' />
              </Badge>
              <div className={`absolute text-xs bg-[#221c38] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 z-50 rounded-md opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out top-[120%] left-[50%] transform  translate-x-[-50%] pointer-events-none border border-violet-500/20`}>
                {stack.tooltip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
