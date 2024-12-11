import React, { useState } from 'react'

function Product() {
    var [obj, setObj] = useState({
        name: "",
        price: 0,
        Category: "",
        des: ""
    })
    var [desa,setDesa] = useState(true)
    var [nameerr, setNameErr] = useState(false)
    var [priceerr, setPriceErr] = useState(false)
    var [deserr, setDesErr] = useState(false)

    function handdelCange(h) {
        var { name, value } = h.target
        setObj({ ...obj, [name]: value })    
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

    }

    function handdelSubmit(p) {
        p.preventDefault()

        if (nameerr == false && priceerr == false && deserr == false) {
            setObj(obj)
            alert("Done")
        }
        else {
            alert("Fill The Data")
        }
        console.log(obj);
        
    }

  return (
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
              <input type="submit" name='ss'/>
          </form>

    </div>
  )
}

export default Product
