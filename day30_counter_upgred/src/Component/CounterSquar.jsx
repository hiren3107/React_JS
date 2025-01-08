import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { multi } from '../redux/actionType';

const CounterSquar = () => {
    var data = useSelector((h)=>h)

    var dispatch = useDispatch()

    return (
        <div className='counter'>
        <h1> Counter Squar</h1>
        <h2>{data.countSquar}</h2>
       <button onClick={()=>dispatch({type : multi})}>Squar</button>
    </div>
    );
}

export default CounterSquar;
