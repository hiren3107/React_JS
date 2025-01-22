import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/ProductReducer/action';
import Loding from './Loding';

const Product = () => {
    var lela = useSelector((stbus)=>stbus)

    console.log(lela.arr);
    
    var dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProduct)
    },[])
    return (<>
    {lela.isLoding ?<Loding/> :
        <div className='cardbox'>
        {lela.arr.map((e) => {
        return <div className='cart'> 
            <img src={e.image} alt={e.title} className='photo' />
            <h1>{e.title}</h1>
            <p className='pr'>₹ &nbsp; {e.price}</p>
          </div>
      })}
      </div>
}
      </>
    );
}

export default Product;
