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
      <Link to="/Admin">
      <img src={Hero} alt="" width="1500" height="500"/>
      <button type="button">Add New Item Here..</button>
      </Link>
      </center>
      </div>

    </>
  );
};
export default Home;