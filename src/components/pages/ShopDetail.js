import React from "react";
import { useParams } from "react-router-dom";
import products from "../FilterList/products.json";

const ShopDetail = () => {
  const param = useParams();
  const product = products[param.Id];
  return (
    <>
      <div>
        <center>
          <h1>ShopCardDetail</h1>
          <img src={product.url} alt="" />
          <h2>{product.title}</h2>
          <h3>Price :{product.price}</h3>
          <p>{product.description}</p>
        </center>
      </div>
    </>
  );
};
export default ShopDetail;
