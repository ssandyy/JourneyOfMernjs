import React from 'react'
import Buttons from './Buttons';
import Logo from './Logo';
import './Navbar.css'

const NavBar = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <Logo  />
          <div className='navButton'>
            <Buttons link={"/"} bname={"Home"} />
            <Buttons link={"./pages/about"} bname={"About"} />
            <Buttons link={"./profile"} bname={"Profile"} />
          </div>
        </div>
    </div>
    </>
  );
}
export default NavBar