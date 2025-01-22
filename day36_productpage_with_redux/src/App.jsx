import { useSelector } from 'react-redux'
import './App.css'
import Product from './Component/Product'
import Loding from './Component/Loding';

function App() {

  var data = useSelector((st)=>st)

  console.log(data.isLoding);
  

  return (
    <>
    <Product/>
    
    </>
  )
}

export default App
