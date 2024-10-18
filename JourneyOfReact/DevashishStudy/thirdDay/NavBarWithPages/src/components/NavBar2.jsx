import React from 'react'
import Buttons from './Buttons';
import Logo from './Logo';
import './Navbar.css'
import Buttonz from './Buttonz';

const NavBar2 = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-content">
          <Logo  />
          <div className='navButton'>
            <Buttonz link={"/"} bname={"Home"} />
            <Buttonz link={"./pages/about"} bname={"About"} />
            <Buttonz link={"./profile"} bname={"Profile"} />
          </div>
        </div>
    </div>
    </>
  );
}
export default NavBar2