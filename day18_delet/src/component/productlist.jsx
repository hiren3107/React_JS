import React from 'react'

function Productlist({arr,handdelDelet,handdelEdite}) {
  return (
    <div className='cardbox'>
    {arr.map((e) => {
    return <div className='cart' key={e.id}> 
        <img src={e.Img} alt={e.Title} className='photo' />
        <h1>{e.Title}</h1>
        <p className='pr'>₹ &nbsp; {e.Price}</p>
        <p className='prr'>{e.des}</p>
        <button onClick={()=>{handdelDelet(e.id)}} className = 'butt1'>Delete</button>
        <button onClick={()=>{handdelEdite(e.id)}} className = 'butt2'>Edite</button>
      </div>
  })}
  </div>
  
  )
}

export default Productlist