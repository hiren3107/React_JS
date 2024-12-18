import React, { useEffect, useState } from 'react'
import Productlist from './Productlist'
import {v4} from 'uuid';


function Product() {
    var [obj, setObj] = useState({
        id:v4(),
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
        setArr([...arr, {...obj , id:v4()}])

        console.log(arr);
        setObj({
            Title: "",
            Price: "",
            des: "",
            Img: ""
        })
    }
    function handdelDelet(deleteid) {
       var ans = arr.filter((el)=>{
            if (el.id != deleteid) {
                return el
            } 
        })
        setArr(ans);
    }
    function handdelEdite(editid) {
        console.log(editid);
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
        <Productlist arr={arr} handdelDelet={handdelDelet} handdelEdite={handdelEdite}/>
      </>
  )
}

export default Product