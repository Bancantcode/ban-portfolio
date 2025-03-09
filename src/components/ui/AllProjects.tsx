import { allProjects } from "@/constants/constants"
import Image from "next/image"

const AllProjects = () => {
    return (
        <div className="grid grid-cols-2">
            {
                allProjects.map((proj, index) => (
                    <div key={index}>
                        <a href={proj.href} target="_blank">
                            <Image src={proj.image} alt={`Project ${index}`} />
                        </a>
                        <h1>{proj.name}</h1>
                        <p>{proj.description}</p>
                        <a href={proj.repository} target="_blank">{proj.repository}</a>                    
                    </div>
                ))
            }
        </div>
    )
}

export default AllProjects