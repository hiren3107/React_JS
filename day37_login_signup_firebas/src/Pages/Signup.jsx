import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../Firebas/fire'

function Signup() {
  var [obj, setObj] = useState({
    user: '',
    email: '',
    pass:''
})

var User= collection(db,"user")

function getData(h) {
  var { name, value } = h.target

  setObj({...obj,[name]:value})
  // console.log(obj)
  
}

var gayoData = async (e)=>{
  e.preventDefault()

  console.log(obj);

  await  addDoc(User,obj)

  alert("Registation done")
  
}
  return (
    <div className='main'>
      <form className="form" action="" onSubmit={gayoData}>
        <h1 className='h1'>Sign Up</h1>
        <input className='input2' type="text" name='user' value={obj.user} placeholder='Enter Your User Name' onChange={getData}  />
        <input className='input2' type="text" name='email' value={obj.email} placeholder='Enter Your Email' onChange={getData}  />
        <input className='input2' type="text" name='pass' value={obj.pass} placeholder='Enter Your Password' onChange={getData}  />
        <input className='input2' type="submit" value="Signup" />
      </form>
    </div>
  )
}

export default Signup