import React from 'react'
import Hero from './Hero1.png';
import './Home.css';

const Home = () => {
 
  return (
    <>
    <div class="content">
    <center>
      <h2>HOME</h2>
      <img src={Hero} alt="" width="1500" height="500"/>
      <button>Add New Item Here..</button>
      </center>
    </div>

    </>
  );
};
export default Home;