import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setArr(res)
      console.log(res);
      }).catch((err) => {
      console.log(err);
    })
  }, [])

  console.log(arr);
  
  

  return (
    <>
      <div id='box'>
        {
          arr.map((Element) => {
            return <div id="card">
              <div>
                <img src={Element.image} alt={Element.title} />
              </div>
              <div id="text">
                <p id="title">{Element.title} - ₹ {Element.price}</p>
                <p id="description">{Element.description}</p>
              </div>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
