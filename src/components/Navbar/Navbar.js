import React from 'react'
import "./Navbar.css" 

const Navbar = () => {
  return (
    <>
        <nav className='nav'>
            <div className='logo'>
                <h2>
                    <span>S</span>hopping
                    <span>C</span>ard
                </h2>
            </div>

            <div className='nav'>
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">SHOP</a>
                    </li>
                    <li>
                        <a href="#">ADMIN</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>
  );
};
 
export default Navbar;
