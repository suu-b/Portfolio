export default function SkillCard({skill}){
    return(
        <div className={`min-w-20 text-center py-2 px-3 m-1 rounded text-sm ${skill.bgColor} border ${skill.borderColor} ${skill.textColor}`}>
            {skill.skillName}
        </div>
    )
}