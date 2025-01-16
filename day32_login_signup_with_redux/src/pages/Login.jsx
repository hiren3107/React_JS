import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  } from "module";
import { loding, wrongPass , errr, done } from '../redux/loginReducer/actionType';

function Login() {
    var goHome = useNavigate()
    var [comp, setComp] = useState({
        logemail: '',
        logpass: ''
        })

var data = useSelector((sta)=>sta)
var dispatch = useDispatch()

  function loghandel(h){
    var { name, value } = h.target
    
    setComp({ ...comp, [name]: value })
    
    console.log(comp);
  }
  
  
  function submitLog(e){
    e.preventDefault()
    dispatch({type : loding })
    axios.get(`http://localhost:3000/user?email=${comp.logemail}`)
    .then((Res)=>{
      console.log(Res.data.length);
      if(Res.data.length > 0){
          if(Res.data[0].pass == comp.logpass){
            dispatch({type : done , payload : Res.data[0].user})
            alert("Login Suscces")
            goHome("/")
          }
          else{
            dispatch({type : wrongPass})
            alert("Wrong Password")
          }
      }
      else{
        alert("Data Not Found")
      }
        
    }).catch((err)=>{
      dispatch({type : errr})
        console.log(err);
        
    })
  }
       return (
           <div className='main'>
           <form className="form" action="" onSubmit={submitLog}>
                 <h1 className='h1'>Login</h1>
                 <input className='input2' type="text" name='logemail' placeholder='Enter Your Email' onChange={loghandel}/>
                 <input className='input2' type="text" name='logpass' placeholder='Enter Your Password'onChange={loghandel}/>
                 <input className='input2' type="submit" value="Login"/>
           </form>
       </div>
       );
}

export default Login