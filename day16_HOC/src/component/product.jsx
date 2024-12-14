import Loder from "./loder";
import Productlist from "./productlist";
import { useState, useEffect } from "react";

function Product() {
  var[hiren,setHiren] = useState(true)
  const [arr, setArr] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setArr(res)
        setHiren(false)
        // console.log(res);
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (<>
    <Productlist data={arr} hiren={hiren} /> 
     
  </>
  )
}

export default Product