import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Product from '../pages/Product'
import PrivetRout from '../component/PrivetRout'

function MainRoute() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/product' element={
          <PrivetRout>
            <Product/>
          </PrivetRout>
        }></Route>
        <Route path='*' element={<h1>Not Found</h1>}></Route>
    </Routes>
  )
}

export default MainRoute