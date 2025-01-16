import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function SignUp() {
    var redirect = useNavigate()
    // var [focus,setFocus]=useState(false)
    // var [blur,setBlur]=useState(false)

    var [userErr,setUserErr] = useState(false)
    var [emailErr,setEmailErr] = useState(false)
    var [passErr,setPassErr] = useState(false)
    var [obj, setObj] = useState({
        user: '',
        email: '',
        pass:''
    })

    var emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/

    console.log(obj);

    function getData(h) {
        var { name, value } = h.target

        setObj({...obj,[name]:value})
        
    }

    if(obj.user.length > 0){

    }
    function handdelFocus(h){
        var { name, value } = h.target

        if(name == "user"){
            setUserErr(false);
        }
        if(name == "email"){
            setEmailErr(false);
        }
        if(name == "pass"){
            setPassErr(false);
        }
    }
    
    function handdelBlur(h){
        var { name, value } = h.target
        
        if(name == "user" && value.length < 3){
            setUserErr(true);
        }
        if(name == "email" && !emailregex.test(value)){
            setEmailErr(true);
        }
        if(name == "pass" && value.length < 8 && !passregex.test(value)){
            setPassErr(true);
        }
    }
    
    function gayoData(e){
        e.preventDefault()
        if(userErr == false && emailErr == false && passErr == false)
        {
        axios.post(`http://localhost:3000/user`,obj)
        .then((Res)=>{
            console.log(Res.data);
        }).catch((ree)=>console.log(err))

        alert("Signin Done")
        redirect("/login")
    }
    else{
        alert("Enter Valied Detail")
    }
    }
    return (
        <div className='main'>
        <form className="form" action="" onSubmit={gayoData}>
              <h1 className='h1'>Sign Up</h1>
              <input className='input2' type="text" name='user' value={obj.user} placeholder='Enter Your User Name' onChange={getData} onFocus={handdelFocus} onBlur={handdelBlur}/>
              {userErr==true?<p className='err'>Please Enter Valid UserName</p>:""}

              <input className='input2' type="text" name='email' value={obj.email} placeholder='Enter Your Email' onChange={getData} onFocus={handdelFocus} onBlur={handdelBlur}/>
              {emailErr==true?<p className='err'>Please Enter Valid Email</p>:""}

              <input className='input2' type="text" name='pass' value={obj.pass} placeholder='Enter Your Password' onChange={getData} onFocus={handdelFocus} onBlur={handdelBlur}/>
              {passErr==true?<p className='err'>Please Enter Strong Password</p>:""}

              <input className='input2' type="submit" value="Signup"/>
        </form>
    </div>
    );
}

export default SignUp