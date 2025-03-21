'use client'
import Image from 'next/image'
import useGsapAnimations from "@/hooks/useGsapAnimations"
import Glow2 from '../../../public/images/glow/Glow2.webp'

const StatsAPI = () => {
  useGsapAnimations();
  return (
    <div className='py-xl md:py-3xl overflow-hidden section-x-padding'>
      <Image src={Glow2} alt="Glow2" className="absolute top-[250vh] inset-0" id="glow__animation2"/>
      <div className='flex flex-col md:flex-row gap-sm justify-start overflow-hidden'>
        <div id="graph__animation">
          <h3 className='font-medium mb-3xs md:mb-2xs'>Most Used Language</h3>
          <Image 
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Bancantcode&locale=en&hide_title=true&layout=compact&card_width=350&langs_count=8&order=2&bg_color=1C182D&text_color=C1B1FF&border_color=40317A" 
            className='w-full h-full md:h-4/5 lg:h-[12rem]'
            alt='Used Stacks'
            width={250}
            height={250}
            unoptimized
          />
        </div>

        <div id="graph__animation">
        <h3 className='font-medium mb-3xs md:mb-2xs'>Streaks and Contributions</h3>
          <Image src="https://streak-stats.demolab.com/?user=Bancantcode&theme=material-palenight&currStreakNum=C1B1FF&background=1C182D&border=40317A&currStreakLabel=C1B1FF&fire=F1E05A&ring=C693EA&dates=C1B1FF&sideNums=C1B1FF&sideLabels=C1B1FF&stroke=AF84FF36" 
            className='mb-sm w-full h-full md:h-4/5 lg:h-[12rem]' 
            alt="Streak Graph" 
            width={250}
            height={250}
            unoptimized
          />
        </div>
      </div>

      <div id="graph__animation">
        {/* <h3 className='text-center font-medium'>Contribution Graph</h3> */}
        <Image src="https://github-readme-activity-graph.vercel.app/graph?username=Bancantcode&radius=7&theme=material-palenight&bg_color=15131C&text_color=ffffff&area=true&order=5&hide_title=true&hide_border=true" 
          className='w-full h-full lg:h-[20rem] rounded-2xl' 
          alt="activity-graph graph" 
          width={300}
          height={300}
          unoptimized
        />
      </div>
    </div>
  )
}

export default StatsAPI