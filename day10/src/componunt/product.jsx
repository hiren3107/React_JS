import Productlist from "./productlist";
import { useState,useEffect } from "react";

function Product() {
    const [arr, setArr] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setArr(res)
                // console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <Productlist data={arr}  />
    )
}

export default Product