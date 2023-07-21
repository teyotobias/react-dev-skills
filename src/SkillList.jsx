import SkillListItem from "./SkillListItem"

export default function SkillList( {skills} ) {
    return (
        <ul className="SkillList">
            {skills.map((skill, idx) => (
                <SkillListItem skill={skill} idx={idx}/>
            ))}
        </ul>

    );
};

