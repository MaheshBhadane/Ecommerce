import React from 'react';
import { Route } from 'react-router-dom';
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
    <Route path={'/Shop/:id'}>
      <center > <p>Shop here..!! </p> </center>
    </Route>
    </>
  )
}
export default Shop;