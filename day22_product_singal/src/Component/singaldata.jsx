import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Singaldata = () => {
    var [singalData,setSingalData] = useState({})
    var {id} = useParams()
        
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res)=>res.json())
        .then((Res)=>{
        setSingalData(Res);
        
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return (
        <div>
            <h1>{singalData.title}</h1>
            <p>{singalData.body}</p>
        </div>
    );
}

export default Singaldata;
