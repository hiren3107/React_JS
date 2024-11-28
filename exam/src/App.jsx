import { useState } from 'react';
import './App.css';

function App() {
  var [Swip, setSwip] = useState("show")
  var [User, setUser] = useState("")
  var [Email,setEmail] = useState("")
  var [Pass, setPass] = useState("")
  var [LogEmail, setLogEmail] = useState("")
  var [LogPass, setLogPass] = useState("")
  var [Arr,setArr] = useState([])
  function data() {
    var obj = {
      User,
      Email,
      Pass
    }
    setArr([...Arr,obj])
    console.log(Arr);
    alert("Signup successfull")
    setUser("")
    setEmail("")
    setPass("")
    setSwip("show")
  }

  function logData() {
    var ans = Arr.filter((Element) => {
      if (Element.Email == LogEmail && Element.Pass == LogPass)
      {
        return Element
      }
    })
    if (ans.length > 0) {
      alert("Login successfull")
    }
    else {
      alert("Login Fail")
    }
    setLogEmail(" ")
    setLogPass(" ")
  }
  return (
    <div className="App">
      {Swip == "show" ? <center>
        <div className="main">
          <h1 className="h1">Login</h1>
          <br />
          <input type="text" placeholder='Enter Your Email' value={LogEmail} onChange={(go) => { setLogEmail(go.target.value) }} />
          <br /><br />
          <input type="text" placeholder='Enter Your Password' value={LogPass} onChange={(go) => { setLogPass(go.target.value) }} />
          <br /><br />
          <button className='log' onClick={logData}>Login</button>
          <br /><br />
          <button className='sign' onClick={() => { setSwip ("hide")}}>Sign Up</button>
        </div>
      </center> : <center>
        <div className="main">
          <h1 className='h2'>Sign Up</h1>
          <br />
            <input type="text" placeholder='Enter Your User Name' value={User} onChange={(go) => { setUser (go.target.value)}} />
          <br /><br />
            <input type="text" placeholder='Enter Your Email' value={Email} onChange={(go) => { setEmail(go.target.value) }} />
          <br /><br />
            <input type="text" placeholder='Enter Your Password' value={Pass} onChange={(go) => { setPass(go.target.value) }} />
          <br /><br />
          <button className='log1' onClick={data}>sign Up</button>
          <br />
            <p className='tex' onClick={() => { setSwip("show") }} >You Have Already An Account</p>
        </div>
      </center>}
    </div>
  );
}
export default App;
