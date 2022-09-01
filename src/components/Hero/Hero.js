import React from "react";
import Hero1 from "../../assests/Hero1.png";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="content">
        <center>
          <h2>HOME</h2>
          <img src={Hero1} alt="" width="1400" height="500" />
        </center>
        <Link to="/Admin">
          <button type="button">Add New Item Here..</button>
        </Link>
      </div>
    </>
  );
};
export default Hero;
