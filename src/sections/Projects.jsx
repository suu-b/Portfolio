import ProjectCard from '../components/ProjectCard'
import data from '../data/projectCards.json'

export default function Projects(){
    return (
        <section>
            {data.map(project => <ProjectCard key = {project.id} imageSrc={project.imgSrc} projectName={project.projectName} projectDescription={project.projectDescription} techStack={project.techStack} liveLink={project.liveLink} repoLink={project.repoLink} />)}
        </section>
    )
}