import './App.css';
import SkillList from "./SkillList"
import NewSkillForm from "./NewSkillForm"
import './styles.css'
const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];
export default function App() {
  return (
    <div className="App padding-0 teal-text">
      <h1>React Dev Skills</h1>
      <hr />
      <SkillList skills={skills} />
      <NewSkillForm />

    </div>
  );
}

