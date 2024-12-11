import skills from '../data/skills.json'
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";

export default function ProjectCard({ imageSrc, projectName, projectDescription, techStack, liveLink, repoLink }) {
    return (
        <div className="bg-white mb-8 mx-auto border border-slate-300 border-2 rounded-lg shadow-lg p-5">
            <div className="border border-slate-300 border-2 rounded-lg shadow p-3 w-[90%] mx-auto mb-3">
                <img src={imageSrc} alt={projectName} className="rounded   mx-auto" />
            </div>
            <h3 className="font-bold text-slate-800">{projectName}</h3>
            <p className="text-slate-600 text-sm text-justify">{projectDescription}</p>
            <div className="flex justify-start items-center my-3">{techStack.map(skill => <div className={`text-center py-1 px-2 m-1 rounded text-sm pr-3 ${skills[skill].bgColor} border ${skills[skill].borderColor} ${skills[skill].textColor}`}>{skills[skill].skillName}</div>)} </div>
            <div className='flex'>
            <button className="text-sm px-3 py-2 text-white rounded bg-slate-800 flex items-center mr-3">View Project <IoCodeSlash size={18} className='ml-1.5'/></button>
                <button className="text-sm px-3 py-2 text-white rounded bg-slate-800 flex items-center">Live Link <LuCircleArrowOutUpRight size={15} className='ml-1'/></button>
            </div>
        </div>
    )
}