import Image from 'next/image'

const StatsAPI = () => {
  return (
    <div>
        <h1>hello bells</h1>
        <Image 
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Bancantcode&locale=en&hide_title=true&layout=compact&card_width=350&langs_count=8&order=2&bg_color=1C182D&text_color=C1B1FF&border_color=40317A" 
            alt='API'
            width={300}
            height={300}
            unoptimized
        />

        <Image src="https://streak-stats.demolab.com?user=fwedwicc&theme=material-palenight&currStreakNum=C1B1FF&background=1C182D&border=40317A&currStreakLabel=C1B1FF&fire=F1E05A&ring=C693EA&dates=C1B1FF&sideNums=C1B1FF&sideLabels=C1B1FF&stroke=AF84FF36" 
            className='lg:h-[12rem] h-[8rem] w-auto' 
            alt="streak graph" 
            width={300}
            height={300}
            unoptimized
        />

        <Image src="https://github-readme-activity-graph.vercel.app/graph?username=Bancantcode&radius=7&theme=material-palenight&bg_color=15131C&text_color=ffffff&area=true&order=5&hide_title=true&hide_border=true" 
            className='lg:h-[20rem] h-[7rem] w-auto rounded-2xl' 
            alt="activity-graph graph" 
            width={300}
            height={300}
            unoptimized
        />
    </div>
  )
}

export default StatsAPI