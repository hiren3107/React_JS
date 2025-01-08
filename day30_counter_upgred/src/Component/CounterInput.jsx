import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputValue } from '../redux/actionType';

const CounterInput = () => {
    var data = useSelector((h)=>h)
    var dispatch = useDispatch()
    var [a,setA] = useState("")
    console.log(a);

    // setTimeout(() => {
        var handdelChange=(e)=>{
            setA(e.target.value)
        }
    // }, 1000);
    return (
        <div className='counter'>
            <h1> Counter Multiplication</h1>
            <input type="number" placeholder='Enter Number'  onChange={handdelChange}/>
            <h2>{data.countMulti}</h2>
           <button onClick={()=>dispatch({type : inputValue,payload : a})}>in</button>
        </div>
    );
}

export default CounterInput;
