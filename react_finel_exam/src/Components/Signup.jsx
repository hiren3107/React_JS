import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Redux/actionType';

const Signup = () => {
    var redirect = useNavigate()
    var dispatch = useDispatch()
    var [obj, setObj] = useState({
        user: '',
        email: '',
        pass:''
    })
    var data = useSelector((st)=>st)

    console.log(data);
    
    // var [arr,setArr]=useState([])

    function getData(h) {
        var { name, value } = h.target
        
        setObj({ ...obj, [name]: value })
        // setArr(obj)
    }

    function gayoData(e){
        e.preventDefault()
        
        dispatch({type:signup,payload:obj})

        alert("Signup done")
        
        // redirect("/login")
    }
    return (
        <div className='main'>
        <form className="form" action="" onSubmit={gayoData}>
              <h1 className='h1'>Sign Up</h1>
              <input className='input2 border' type="text" name='user' placeholder='Enter Your User Name' onChange={getData} />
              <input className='input2 border' type="text" name='email' placeholder='Enter Your Email' onChange={getData} />
              <input className='input2 border' type="text" name='pass' placeholder='Enter Your Password' onChange={getData} />
              <input className='input2 border' type="submit" value="Signup"/>
        </form>
    </div>
    );
}

export default Signup;
