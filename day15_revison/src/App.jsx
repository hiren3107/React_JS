import { useState } from 'react'

import './App.css'

function App() {
  var [obj,setObj] = useState({
    product : "",
    price: "",
    img : ""
  })
  var [nameErr,setNameErr] = useState("")
  var[priceErr,setPriceErr] = useState(0)
  var [imgErr,setImgErr]= useState("")
  var [arr,setArr] = useState([])

  function handdelChane(h){
    var {name,value} = h.target
    setObj({...obj,[name]:value})
    console.log(obj);
  }
  function henddelBlur(h){
    var {name,value} = h.target

    if(name == "product" && value.length <=3)
    {
      setNameErr(true)
      // console.log(value);
    }
    if(name == "price" && value.length <=3)
    {
      setPriceErr(true)
      // console.log(value);
    }
    if(name == "img" && value.length <=0)
    {
      setImgErr(true)
      // console.log(value);
    }
    
  }

  function henddelFocus(h){
    var {name,value} = h.target
    if(name == "product")
    {
      setNameErr(false)
      // console.log(value);
    }
    if(name == "price")
    {
      setPriceErr(false)
      // console.log(value);
    }
    if(name == "img")
    {
      setImgErr(false)
      // console.log(value);
    }
  }

  function henddelSubmit(e){
    e.preventDefault()

    if(nameErr == false && priceErr == false && imgErr == false)
    {
      setArr([...arr,obj])
      alert("data add")
    }
    else{
      alert("ghare jav")
    }


  }

  return (
    <>
      <form action="">
        <input type="text" placeholder='product name' name='product' onChange={handdelChane} onBlur={henddelBlur} onFocus={henddelFocus}  /> <br /><br />
        {nameErr == true ? <p>name err</p> : ""}

        <input type="text" placeholder='product price' name='price' onChange={handdelChane} onBlur={henddelBlur} onFocus={henddelFocus} /><br /><br />
        {priceErr == true ? <p>pric err</p> : ""}

        <input type="text" placeholder='produc img' name='img' onChange={handdelChane} onBlur={henddelBlur} onFocus={henddelFocus} /><br /><br />
        {imgErr == true ? <p>img err</p> : ""}

        <input type="submit" onSubmit={henddelSubmit} />
      </form>
    </>
  )
}

export default App
