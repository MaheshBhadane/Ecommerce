import React from 'react'
import Hero from './Hero1.png';
import './Home.css';
import { Link } from "react-router-dom"

const Home = () => {
 
  return (
    <>
    <div class="content">
      <center>
      <h2>HOME</h2>
      <img src={Hero} alt="" width="1400" height="500"/></center>
      <Link to="/Admin">
      <button type="button">Add New Item Here..</button>
      </Link>
      
      </div>

    </>
  );
};
export default Home;