import React from 'react'

function View({data}) {
  console.log(data);
  return (
    <div>
      {
        data.map((Element)=>{
          return <div className='d'>
            <h1>Name : {Element.name}</h1>
            <h1>course : {Element.course}</h1>
            <h1>Hobby : {Element.hobby.join(" - ")}</h1>
            <h1>Technologys : {Element.tec.join(" - ")}</h1>
            
          </div>
        })
      }
    </div>
  )
}

export default View