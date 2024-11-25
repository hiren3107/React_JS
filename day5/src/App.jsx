import { useState } from 'react';
import './App.css';
import login from "./loginimage.png"

function App() {
  var [h,seth] = useState("show")
 
  return (
    <div className="App">
      <div className='main'>
        <div className='img'>
          <img className='l' src={login} alt=""/>
        </div>
        <div className='lakhan'>
          
        </div>
      </div>
    </div>
  );
}

export default App;





// { h == "show" ? <h1>hello</h1> : <h1>by</h1> }
//       <button onClick={() => seth("hide")}>hide</button>
//       <button onClick={() => seth("show")}>show</button>