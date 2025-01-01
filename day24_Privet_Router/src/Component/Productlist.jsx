import React, { useEffect, useState } from 'react'

function Productlist() {

  var [data,setData] = useState([])

    useEffect(()=>{
      fetch(`http://localhost:3000/product`)
      .then((res)=>res.json())
      .then((Res)=>{
          // console.log(Res);
          setData(Res)
        })
        .catch((err)=>{
          console.log(err);
        })
        
      },[data])
      

    function handdelDelete(deletId){
      console.log(deletId);

      fetch(`http://localhost:3000/product/${deletId}`,{
        method:"DELETE"
      })
    }
    return (
      <div className='cardbox'>
        {data.map((e) => {
        return <div className='cart' key={e.id}> 
            <img src={e.Img} alt={e.Title} className='photo' />
            <h1>{e.Title}</h1>
            <p className='pr'>₹ &nbsp; {e.Price}</p>
            <button className='del' onClick={()=>handdelDelete(e.id)}>Delete</button>
            <button className='edi'>Edite</button>
          </div>
      })}
      </div>
      
    )
}

export default Productlist