import { useState } from "react";

function App() {
  var [name, setstate] = useState("Agravat Hiren")
  var [grid, setstate] = useState(6384)
  var [mo, setstate] = useState(1234567897)
  var [corse, setstate] = useState("Front End")
  var [duration, setstate] = useState("12 Months")
  return <div>
    <h1>ID CARD</h1>
    <br/>
    <h1>Name : {name}</h1>
    <h1>GRID : {grid}</h1>
    <h1>Mo Number : {mo}</h1>
    <h1>Course : {corse}</h1>
    <h1>Duration : {duration}</h1>
  </div>
}

export default App;
