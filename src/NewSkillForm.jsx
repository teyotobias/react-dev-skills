import "./NewSkillForm.css"

function NewSkillForm() {
    return (
        <form className="NewSkillForm">
            <div className="addSkill">
                <label className="skillLabel">Skill</label><input type="text" />
            </div>
            <div className="addLevel">
                <label>Level</label>
                <div className='levelSelect'>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <button>ADD SKILL</button>
        </form>
    );

};


export default NewSkillForm; 