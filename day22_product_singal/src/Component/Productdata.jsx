import React, { useEffect, useState } from 'react';
import Productlist from './Productlist';

const Productdata = () => {
    var [arr,setArr] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>res.json())
        .then((Res)=>{
           setArr(Res);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <Productlist arr={arr}/>
        </div>
    );
}

export default Productdata;


