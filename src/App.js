import { useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  const increaseAge = () => {
    setAge(age + 1);
  };
  const decreaseAge = () => {
    setAge(age - 1);
  };
  return (
    <div className="App">
      <div className="container py-5">
        <h1>Simple Counter App</h1>
        <button className="btn btn-danger" onClick={decreaseAge}>Subtract</button>
        {age}
        <button className="btn btn-success" onClick={increaseAge}>Add</button>
      </div>
    </div>
  );
}

export default App;
