import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import PrivetRouter from '../Component/PrivetRouter';
import Editform from '../Component/Editform';

const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product' element={
                    <PrivetRouter>
                        <Product/>
                    </PrivetRouter>
                }></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='/editform/:idd' element={<Editform/>}></Route>
                <Route path='*' element={<h1>Not Found</h1>}></Route>
                
            </Routes>
        </div>
    );
}

export default MainRoute;
