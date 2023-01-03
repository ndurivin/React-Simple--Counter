import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const setZero = () => {
    setCount(0);
  };


  return (
    <div className="App">
      <div className="container py-5">
        <h2>Simple Counter App</h2>
        <p>Click buttons to Adjust</p>
        <div>
        <button className="btn btn-danger btn-sm m-2" onClick={decrease}>Subtract</button>
        <button className="btn btn-secondary btn-sm m-3" onClick={setZero}>Reset to Zero</button>
        <button className="btn btn-success btn-sm" onClick={increase}>Addition</button>
        </div>
        <div>{count}</div>
        
      </div>
    </div>
  );
}

export default App;
