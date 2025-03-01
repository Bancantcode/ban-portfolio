'use client'
import { projectInfo } from "@/constants/constants"
import Image from "next/image"
import useGsapAnimations from "@/hooks/useGsapAnimations"

const ProjectGrid = () => {
    useGsapAnimations();
    return (
        <div className="grid-style-project">
            <div className="px-sm py-md xl:py-lg gradient flex flex-col gap-xs">
                <p className="text-style xl:text-base-small">{projectInfo[0].role}</p>
                <Image src={projectInfo[0].image}alt={projectInfo[0].name} />
                <h3 className="text-heading-3 font-medium">{projectInfo[0].name}</h3>
                <p className="text-style opacity-80">{projectInfo[0].description}</p>
            </div>

            <div className="hidden md:block"></div>

            <div className="px-sm py-md xl:py-lg gradient flex flex-col gap-xs" id="movedown__animation">
                <p className="text-style xl:text-base-small">{projectInfo[1].role}</p>
                <Image src={projectInfo[1].image}alt={projectInfo[1].name} />
                <h3 className="text-heading-3 font-medium">{projectInfo[1].name}</h3>
                <p className="text-style opacity-80">{projectInfo[1].description}</p>
            </div>

            <div className="px-sm py-md xl:py-lg gradient flex flex-col gap-xs">
                <p className="text-style xl:text-base-small">{projectInfo[2].role}</p>
                <Image src={projectInfo[2].image}alt={projectInfo[2].name} />
                <h3 className="text-heading-3 font-medium">{projectInfo[2].name}</h3>
                <p className="text-style opacity-80">{projectInfo[2].description}</p>
            </div>

            <div className="hidden md:block"></div>

            <div className="px-sm py-md xl:py-lg gradient flex flex-col gap-xs" id="moveup__animation">
                <p className="text-style xl:text-base-small">{projectInfo[3].role}</p>
                <Image src={projectInfo[3].image}alt={projectInfo[3].name} />
                <h3 className="text-heading-3 font-medium">{projectInfo[3].name}</h3>
                <p className="text-style opacity-80">{projectInfo[3].description}</p>
            </div>

            <div className="hidden xl:block"></div>

            <div className="px-sm py-md xl:py-lg gradient flex flex-col gap-xs">
                <p className="text-style xl:text-base-small">{projectInfo[4].role}</p>
                <Image src={projectInfo[4].image}alt={projectInfo[4].name} />
                <h3 className="text-heading-3 font-medium">{projectInfo[4].name}</h3>
                <p className="text-style opacity-80">{projectInfo[4].description}</p>
            </div>
        </div>
    )
}

export default ProjectGrid