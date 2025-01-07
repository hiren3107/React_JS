import React from 'react';
import { useSelector } from 'react-redux';

const Counter2 = () => {
    var select = useSelector((data)=>data)
    return (
        <div>
            <h1>Counter 2 {select}</h1>
            
        </div>
    );
}

export default Counter2;
