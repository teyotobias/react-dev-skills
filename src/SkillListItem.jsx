import "./SkillListItem.css"

export default function SkillListItem( {skill, idx} ) {
    return (
        <li className="SkillListItem">
            <span className="skill">Skill: {skill.name}</span>
            <span className="level">Level: {skill.level}</span>
        </li>
    );
};
