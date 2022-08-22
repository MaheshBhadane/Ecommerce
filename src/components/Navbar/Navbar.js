import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h2>
            <span>S</span>hopping
            <span>C</span>ard
          </h2>
        </div>
        
        <div className="nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/admin">ADMIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
