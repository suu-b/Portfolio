export default function SkillCard({skill}){
    return(
        <div className={`min-w-10 lg:min-w-20 text-center py-1 px-2 lg:py-2 lg:px-3 m-1 rounded text-[13px] lg:text-sm ${skill.bgColor} border ${skill.borderColor} ${skill.textColor}`}>
            {skill.skillName}
        </div>
    )
}