import { expertise } from '@/constants/constants';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='flex flex-col lg:gap-6 gap-4 py-8 pt-14'>
      <div className='flex justify-center flex-wrap xl:px-[27rem] lg:px-80 md:px-60 px-4 items-center gap-2.5 lg:gap-4 my-4 z-10' id='scroll-animation-27'>
        {expertise.map((exp, index) => (
          <div className="relative flex items-center" key={index}>
            <div className="group relative flex items-center">
              <span className='bg-[#1C182D] text-[#C1B1FF] rounded-[0.4rem] border border-[#40317A] lg:p-2 p-1.5 relative group hover:shadow-xl hover:shadow-[#412F84] transition-all duration-300 ease-in-out hover:border-[#6C59B9] hover:bg-[#221D36] cursor-help'>
                <Image src={exp.icon} alt={exp.tooltip} width={32} height={32} className='w-6 h-6 lg:w-8 lg:h-8' />
              </span>
              <div className={`absolute text-xs bg-[#221c38] text-white lg:px-2 px-1.5 lg:py-1.5 py-1 z-50 rounded-md opacity-0 group-hover:opacity-100 text-nowrap transition-opacity duration-300 ease-in-out top-[120%] left-[50%] transform translate-x-[-50%] pointer-events-none border border-violet-500/20`}>
                {exp.tooltip}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
