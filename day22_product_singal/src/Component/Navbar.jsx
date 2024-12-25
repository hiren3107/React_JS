import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <Link to='/'>Home</Link> <br />
                <Link to='/about'>About</Link> <br />
                <Link to='/product'>Product</Link> <br />
                <Link to='/cart'>Cart</Link> <br />
            </ul>
        </div>
    );
}

export default Navbar;
