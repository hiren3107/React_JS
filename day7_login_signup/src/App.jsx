import { useState } from 'react';
import './App.css';



function App() {
  var [h, seth] = useState("show")
  var [user, setUser] = useState("")
  var [email, setEmail] = useState("")
  var [pass, setPass] = useState("")
  var [arr, setArr] = useState([])
  var obj = {
    user,
    email,
    pass
  }
  function hero() {
    setArr([...arr, obj])
    
    console.log(arr);
    
  }
  return (
    <div>
      {h == "show" ?  
        <div className="App">
          <div className='main'>
            <div className='img'>
              <div className='logA'>
                <h1 className='h1'>Login</h1>
                <p className='p'>Get access to your Orders,<br /> Wishlist and Recommendations</p>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" className='v' alt="" />
              </div>
            </div>
            <div className='w-[510px] pt-[56px] ps-[35px] pe-[35px]'>
              <input className='in' placeholder='Enter Email / Mobile number' type="text" />
              <p className='text-[12px] text-[#878787] font-[500] mb-[20px]'>By continuing, you agree to Flipkart's <a href="" className='text-[#2878F1]'> Terms of Use </a> and <a href="" className='text-[#2878F1]'> Privacy Policy.</a></p>
              <button className='bb mb-[270px]'>Request OTP</button>
              <div className='text-center'>
                <span className='text-[#2878F1] font-[500] text-[14px] cursor-pointer' onClick={() => seth("hide")}>New to Flipkart? Create an account</span>
              </div>
            </div>
          </div>
        </div>
        : <div className="Appp">
          <div className='main'>
            <div className='img'>
              <div className='signA'>
                <h1 className='h1'>Looks like you're new here!</h1>
                <p className='p'>Sign up with your mobile number to get started</p>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" className='v1' alt="" />
              </div>
            </div>
            <div className='w-[510px] pt-[56px] ps-[35px] pe-[35px]'>
              <input className='in' placeholder='Enter User Name' type="text" onChange={(h) => { setUser(h.target.value)}}/>
              <input className='in' placeholder='Enter Email' type="text" onChange={(h) => { setEmail(h.target.value) }} />
              <input className='in' placeholder='Enter Password' type="text" onChange={(h) => { setPass(h.target.value) }} />
              <p className='text-[12px] text-[#878787] font-[500] mb-[20px]'>By continuing, you agree to Flipkart's <a href="" className='text-[#2878F1]'> Terms of Use </a> and <a href="" className='text-[#2878F1]'> Privacy Policy.</a></p>
              <button className='bb mb-[20px]' onClick={hero}>Continue</button>
              <button className='bb2 mb-[20px]' onClick={() => seth("show")} >Existing User? Log in</button>
            </div>
          </div>
        </div>}
    </div>    
  );
}

export default App;





// { h == "show" ? <h1>hello</h1> : <h1>by</h1> }
//       <button onClick={() => seth("hide")}>hide</button>
//       <button onClick={() => seth("show")}>show</button>