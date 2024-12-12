import React, { useState } from 'react'
import View from './view'


function Product() {
    var [obj, setObj] = useState({
        name: "",
        price: 0,
        Category: "",
        des: "",
        file : ""
    })
    var [desa,setDesa] = useState(true)
    var [nameerr, setNameErr] = useState(false)
    var [priceerr, setPriceErr] = useState(false)
    var [deserr, setDesErr] = useState(false)
    var [imgerr, setImgErr] = useState(false)
    var [hide,setHide]=useState("show")
    var [arr,setArr] = useState([])
    function handdelCange(h) {
        var { name, value } = h.target
        setObj({ ...obj, [name]: value })    

        if (h.target.value > 0) {
            setDesa(false)
        }
    }

    function handdelFile(h) {
        var { name, value } = h.target
        var img = h.target.files[0]
        if (img && img.type == "image/jpeg" || img.type == "image/png" ) {
            setObj({ ...obj, file: value })
            setImgErr(false)

        }
        else {
            setImgErr(true)

        }
        console.log(img.type);
        
    }

    function handdelBlur(h) {
        var { name, value } = h.target
        if (name == "name" && value.length <= 3) {
            setNameErr(true)
        }

        if (name == "price" && value < 0) {
            setPriceErr(true)

        }

        if (name == "des" && value.length >=200) {
            setDesErr(true)

        }
        if (name == "file") {
            setImgErr(true)
        }
    }
    function handdelFocus(h) {
        var { name, value } = h.target

        if (name == "name") {
            setNameErr(false)

        }

        if (name == "price") {
            setPriceErr(false)
        }
        if (name == "des") {
            setDesErr(false)
        }
        if (name == "file") {
            setImgErr(false)
        }

    }

    function handdelSubmit(p) {
        p.preventDefault()

        if (nameerr == false && priceerr == false && deserr == false && imgerr == false) {
            setArr([...arr,obj])
            alert("Done")
        }
        else {
            alert("Fill The Data")
        }
        console.log(arr);
        
    }
    function renderData(){
        if(hide == "show"){   
            setHide("hide")
        }
        else if(hide == "hide"){   
            setHide("show")
        }
    }


  return (<>
  <center>
  <button className='rr' onClick={renderData}>view render data</button>
  </center>
  {hide == "show" ?
      <div className='main'>
          <form action="" onSubmit={handdelSubmit}>
              <h1>Product Detail</h1>
              <input required type="text" name='name' onChange={handdelCange} onBlur={handdelBlur} onFocus={handdelFocus} placeholder='Product Name' />
              {nameerr == true ? <p className='p1'>Plese fill the box more then 3 character</p> : ""}

              <input required type="number" name='price' onChange={handdelCange} onBlur={handdelBlur} onFocus={handdelFocus} placeholder='Product Price' />
              {priceerr == true ? <p className='p1'>Plese Enter Price positive number</p> : ""}

              <select name="Category" onChange={handdelCange} id="">
                  <option value="Category">Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Books">Books</option>
              </select>
              <input required type="text" name='des' onChange={handdelCange} onBlur={handdelBlur} onFocus={handdelFocus} placeholder='Product Description' />
              {deserr == true ? <p className='p1'>Maximum of 200 characters.</p> : ""}

              <input required type="file" name='file' onChange={handdelFile} />
              {imgerr == true ? <p className='p1'>Must only accept image files JPEG, PNG.</p> : ""}
              <input type="submit" disabled={desa} />
          </form>
    </div> : <View data = {arr}/>
}
    </>
  )
}

export default Product
