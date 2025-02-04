import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    var goHome = useNavigate()
    var [comp, setComp] = useState({
        logemail: '',
        logpass: ''
        })


  function loghandel(h){
    var { name, value } = h.target
    
    setComp({ ...comp, [name]: value })
    
    console.log(comp);
  }
  
  function submitLog(e){
    e.preventDefault()
  }
       return (
           <div className='main'>
           <form className="form" action="" onSubmit={submitLog}>
                 <h1 className='h1'>Login</h1>
                 <input className='input2 border' type="text" name='logemail' placeholder='Enter Your Email' onChange={loghandel}/>
                 <input className='input2 border' type="text" name='logpass' placeholder='Enter Your Password'onChange={loghandel}/>
                 <input className='input2 border' type="submit" value="Login"/>
           </form>
       </div>
       );
}

export default Login;
