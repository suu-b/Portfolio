export default function ProjectCard({ imageSrc, projectName, projectDescription, techStack, liveLink, repoLink }) {
    return (
        <div className="bg-white mb-5 mx-auto border border-slate-300 border-2 rounded shadow p-5">
            <img src={imageSrc} alt={projectName} className="rounded shadow-xl mb-3" />
            <h3 className="font-bold text-slate-800 text-lg">{projectName}</h3>
            <p className="text-slate-600 text-base">{projectDescription}</p>
            <div className="flex justify-start items-center my-3">{techStack.map(skill => <div className="pr-3">{skill}</div>)} </div>
            <div>
                <button className="text-sm px-3 py-2 text-white rounded mr-3 bg-slate-800">View Project</button>
                <button className="text-sm px-3 py-2 text-white rounded bg-slate-800">Live Link</button>
            </div>
        </div>
    )
}