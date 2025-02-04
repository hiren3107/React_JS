import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movielist from '../Components/Movielist';
import MovieSearch from '../Components/MovieSearch';
import Login from '../Components/Login';
import Signup from '../Components/Signup';


const MainRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Movielist/>}></Route>
                <Route path='/movieserch' element={<MovieSearch/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<Signup/>}></Route>
                <Route path='*' element={<h1>Not Found</h1>}></Route>
            </Routes>
        </div>
    );
}

export default MainRoute;
