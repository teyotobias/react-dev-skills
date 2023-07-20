import './App.css';
import SkillList from "./SkillList"
import NewSkillForm from "./NewSkillForm"

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <hr />
      <SkillList />
      <NewSkillForm />

    </div>
  );
}

export default App;
