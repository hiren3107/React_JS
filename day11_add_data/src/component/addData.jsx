import React, { useState } from 'react'
import Tender from './render'


function AddData() {
    var [Data, setData] = useState({
        Title: "",
        Price: 0,
        Img: "" 
    })
    var [Arr,setArr] = useState([])
    function handdel(h) {

        var {value,name} = h.target
        setData({ ...Data, [name]: value })
    }
    function send(hi) {
        hi.preventDefault()

        setArr([...Arr, Data])
    }


    return (
      <>
      <div className='bapo'>
          <div className="bachu">
              <h1>Enter Product Data</h1>
              <form action="" onSubmit={send}>
                  <input type="text" required name='Title' placeholder='Enter Product Title' onChange={handdel}/> <br />
                  <input type="text" required name='Price' placeholder='Enter Product Price' onChange={handdel } /> <br />
                  <input type="text" required name='Img' placeholder='Enter Product Imgage URL' onChange={handdel } /> <br />
                  <input type="submit"  />
              </form>
          </div>
            </div>
        <Tender detail={Arr} />
        </>
  )
}

export default AddData
