import React from 'react'


const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav__wrapper">
        <div className="nav__wrapper_left"><b>Camp<span>flix</span></b></div>
        <div className="nav__wrapper_right">
          <input className='search' type="search" placeholder='Search Movie...' />
          <p className='user'>Muhammad Naufal</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar