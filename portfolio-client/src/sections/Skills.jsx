import skills from '../data/skills.json'
import SkillCard from '../components/SkillCard'

export default function Skills() {
    return (
        <section>
            <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Skills</h3>
            <div className='flex flex-wrap items-center'>
                {skills.map(skill => <SkillCard key={skill.skillName} skill={skill} />)}
            </div>
        </section>
    )
}