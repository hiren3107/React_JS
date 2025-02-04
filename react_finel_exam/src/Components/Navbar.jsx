import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <ul>
                <Link className='link' to='/'>Movie List</Link> <br />
                <Link className='link' to='/movieserch'>Movie Search</Link> <br />
                <Link className='link' to='/login'>login</Link> <br />
                <Link className='link' to='/signup'>signup</Link> <br />
            </ul>
        </div>
    );
}

export default Navbar;
