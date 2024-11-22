import { useState } from "react";
import Counter1 from "./couter1";
import "./App.css"


function App() {
  var [count, badalo] = useState(10)
  
  function plus() {
    badalo(count + 1)
  }

  function minus() {
    badalo(count - 1)
  }
  return (
    <div className="App">
      <Counter1 a={count} />
      <button className="a" onClick={plus}>+</button>
      <button className="b" onClick={minus}>-</button>
    </div>
    
    
  );
}

export default App;
