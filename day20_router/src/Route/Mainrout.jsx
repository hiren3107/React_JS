import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import About from '../Pages/About';

const Mainrout = () => {
    return (
        <div>
            <h1>fdjwfj</h1>
            <Routes>
                <Route path='Home' element={<Home/>}></Route>
                <Route path='Product' element={<Product/>}></Route>
                <Route path='About' element={<About/>}></Route>
            </Routes>
        </div>
    );
}

export default Mainrout;
