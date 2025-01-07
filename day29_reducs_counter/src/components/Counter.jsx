import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ochu, vadhu } from '../redux/actionType';

const Counter = () => {
    var select = useSelector((data)=>data)
    var mokalo = useDispatch()
    function handdelplus(){
        mokalo({type : vadhu})
    }
    return (
        <div>
            <h1>Counter {select}</h1>
            <button onClick={handdelplus}>+</button>
            <button onClick={()=>{mokalo({type : ochu})}}>-</button>
        </div>
    );
}

export default Counter;
