import React from 'react'

function Navbar() {
  return (
    <div className='nav'>
    <ul>
        <Link className='link' to='/'>Home</Link> <br />
        <Link className='link' to='/product'>Product</Link> <br />
        <Link className='link' to='/login'>login</Link> <br />
        <Link className='link' to='/signup'>signup</Link> <br />
    </ul>
</div>
  )
}

export default Navbar