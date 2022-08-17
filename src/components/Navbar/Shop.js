import React from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <>
    <center>
    <ul>
    <div><h2>SHOP</h2></div>
    
      <li><Link to='/shop/id1'>Gents Clothes</Link></li>
      <li><Link to='/shop/id2'>Ladies Clothes</Link></li>
      <li><Link to='/shop/id3'>Babies Clothes</Link></li>
    </ul>
    </center>
   
    </>
  )
}
export default Shop;