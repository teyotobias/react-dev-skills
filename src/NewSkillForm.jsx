import "./NewSkillForm.css"
import { useState } from "react"
export default function NewSkillForm({ addSkill }) {
    const [newSkill, setNewSkill] = useState({
        name:'',
        level:3
    });

    function handleNewSkill(evt) {
        evt.preventDefault(); //prevents form from taking natural course
        addSkill(newSkill); //send newSkill to app.js function to be added for rendering
        setNewSkill({name:'', level:3}); //set new skill input ready again - basically clearing input after submission
    }

    const handleSkillChange = (evt) => {
        setNewSkill({
            ...newSkill,
            name: evt.target.value,
        });
    }

    function handleLevelChange(evt) {
        setNewSkill({
            ...newSkill,
            level: parseInt(evt.target.value),
        });
    }



    return (
        <form onSubmit={handleNewSkill} className="NewSkillForm">
            <div className="addSkill">
                <label className="skillLabel">Skill</label>
                <input
                value={newSkill.name}
                placeholder="New Skill"
                onChange={handleSkillChange}
                required
                pattern=".{2,}"
                />
            </div>
            <div className="addLevel">
                <label>Level</label>
                <div className='levelSelect'>
                    <select onChange={handleLevelChange}value={newSkill.level}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
            </div>
            <button>ADD SKILL</button>
        </form>
    );

};

