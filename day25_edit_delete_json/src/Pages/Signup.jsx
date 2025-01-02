import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    var redirect = useNavigate()
    var [obj, setObj] = useState({
        user: '',
        email: '',
        pass:''
    })

    function getData(h) {
        var { name, value } = h.target
        
        setObj({ ...obj, [name]: value })
    }

    function gayoData(e){
        e.preventDefault()

        fetch(`http://localhost:3000/user`,{
            method : "POST",
            headers : {
                "content-type":"aplication"
            },
            body : JSON.stringify(obj)
        })

        redirect("/login")
    }
    return (
        <div className='main'>
        <form className="form" action="" onSubmit={gayoData}>
              <h1 className='h1'>Sign Up</h1>
              <input className='input2' type="text" name='user' placeholder='Enter Your User Name' onChange={getData} />
              <input className='input2' type="text" name='email' placeholder='Enter Your Email' onChange={getData} />
              <input className='input2' type="text" name='pass' placeholder='Enter Your Password' onChange={getData} />
              <input className='input2' type="submit" value="Signup"/>
        </form>
    </div>
    );
}

export default Signup;
