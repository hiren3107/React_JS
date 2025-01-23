import React from 'react'

function Login() {
  return (
    <div className='main'>
    <form className="form" action="" onSubmit={submitLog}>
          <h1 className='h1'>Login</h1>
          <input className='input2' type="text" name='logemail' placeholder='Enter Your Email' onChange={loghandel}/>
          <input className='input2' type="text" name='logpass' placeholder='Enter Your Password'onChange={loghandel}/>
          <input className='input2' type="submit" value="Login"/>
    </form>
</div>
  )
}

export default Login