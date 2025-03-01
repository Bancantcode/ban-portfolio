import { projectInfo } from "@/constants/constants"
import Image from "next/image"

const ProjectGrid = () => {
  return (
    <div className="grid-style-project">
        <div>
            <Image src={projectInfo[0].image}alt={projectInfo[0].name} />
            <h2>{projectInfo[0].name}</h2>
            <p>{projectInfo[0].description}</p>
        </div>

        <div>
            <Image src={projectInfo[1].image}alt={projectInfo[1].name} />
            <h2>{projectInfo[1].name}</h2>
            <p>{projectInfo[1].description}</p>
        </div>

        <div>
            <Image src={projectInfo[2].image}alt={projectInfo[2].name} />
            <h2>{projectInfo[2].name}</h2>
            <p>{projectInfo[2].description}</p>
        </div>

        <div>
            <Image src={projectInfo[3].image}alt={projectInfo[3].name} />
            <h2>{projectInfo[3].name}</h2>
            <p>{projectInfo[3].description}</p>
        </div>

        <div>
            <Image src={projectInfo[4].image}alt={projectInfo[4].name} />
            <h2>{projectInfo[4].name}</h2>
            <p>{projectInfo[4].description}</p>
        </div>
    </div>
  )
}

export default ProjectGrid