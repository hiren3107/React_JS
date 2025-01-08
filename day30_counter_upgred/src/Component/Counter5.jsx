import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plus5 } from '../redux/actionType';

const Counter5 = () => {

    var data = useSelector((h)=>h)

    var dispatch = useDispatch()
    return (
        <div className='counter'>
            <h1> Counter + 5</h1>
            <h2>{data.count5}</h2>
           <button onClick={()=>dispatch({type : plus5})}>+5</button>
        </div>
    );
}

export default Counter5;
