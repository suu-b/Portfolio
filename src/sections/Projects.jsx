import ProjectCard from '../components/ProjectCard'
import data from '../data/projectCards.json'
import { FiGithub } from "react-icons/fi";

export default function Projects() {
    return (
        <section>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8'>
                <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Projects</h3>
                <div>
                    <p className='lg:text-sm ml-2 text-[12px] lg:ml-0 text-slate-700 dark:text-slate-300 lg:text-right'>Some of my notable projects.</p>
                    <p className='lg:text-sm ml-2 text-[12px] lg:ml-0 text-slate-700 dark:text-slate-300 flex items-center'>Find a complete repository of my projects&nbsp;<a target="_blank" href="https://github.com/ShubhamThakur025" className='underline underline-offset-4'>here</a><FiGithub size={15} className='ml-1'/></p>
                </div>
            </div>
            {data.map(project => <ProjectCard key={project.id} imageSrc={project.imgSrc} projectName={project.projectName} projectDescription={project.projectDescription} techStack={project.techStack} liveLink={project.liveLink} repoLink={project.repoLink} />)}
        </section>
    )
}