import programs from "./example.json";
import "./App.css";

function App() {
  return (
    <div>
      <div className="main">
        {programs.map((program) => (
          <div className="program" key={program.id}>
            <h2 className="heading">{program.setup}</h2>
            <p className="para">{program.punchline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
