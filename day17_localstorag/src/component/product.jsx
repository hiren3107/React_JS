import React, { useEffect, useState } from 'react'

function Product() {
    var [obj, setObj] = useState({
        Title : "",
        Price : "",
        des:"",
        Img:""
    })
    var [arr, setArr] = useState(JSON.parse(localStorage.getItem("data")) || [])
 
    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(arr))
    }, [arr])

    function handdelChange(h) {
        var { name, value } = h.target
        setObj({ ...obj, [name]: value })
    }
    
    function send(e) {
        e.preventDefault()
        setArr([...arr, obj])
        console.log(arr);
        setObj({
            Title: "",
            Price: "",
            des: "",
            Img: ""
        })

        
    }

    return (<>
        <div className='bapo'>
            <div className="bachu">
                <h1>Enter Product Data</h1>
                <form action="" onSubmit={send}>
                    <input type="text" value={obj.Title}  name='Title' placeholder='Enter Product Title' onChange={handdelChange} /> <br />
                    <input type="text" value={obj.Price}  name='Price' placeholder='Enter Product Price' onChange={handdelChange} /> <br />
                    <input type="text" value={obj.des}  name='des' placeholder='Enter Product Description' onChange={handdelChange} /> <br />
                    <input type="text" value={obj.Img}  name='Img' placeholder='Enter Product Imgage URL' onChange={handdelChange} /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
      </>
  )
}

export default Product
