import React from 'react';
import { useParams } from 'react-router-dom';

const ShopDetail = () => {
    const params= useParams();
    console.log(params.shopId);

  return (
    <>
    <center><h1>ShopDetail</h1>
    <p>{params.shopId}</p>
    </center>
    </>
  )
}
 export default ShopDetail;