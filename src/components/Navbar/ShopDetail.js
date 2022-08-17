import React from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemName"

const ShopDetail = () => {
  const param= useParams();
  const product=ItemList[param.shopId]

  return (
    <>
    <div>
    <h1>ShopDetail</h1>
        <img src={product.url} alt='' />
      <h1 >{product.title}</h1>
      <h3>{product.price}</h3>
      <p>{product.description}</p>

    </div>
    </>
  )
};
 export default ShopDetail;