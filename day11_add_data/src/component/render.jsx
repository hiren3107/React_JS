import React from 'react'

function Tender(props) {
  
  console.log(props.detail)

  return (
    <div className='cardbox'>
      {props.detail.map((e) => {
      return <div className='cart'> 
          <img src={e.Img} alt={e.Title} className='photo' />
          <h1>{e.Title}</h1>
          <p className='pr'>₹ &nbsp; {e.Price}</p>
        </div>
    })}
    </div>
    
  )

}

export default Tender
