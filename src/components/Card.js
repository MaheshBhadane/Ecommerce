import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

import * as cartActions from "../context/cartAction";

const Card = ({ data }) => {
  const {dispatch} = useContext(CartContext);

  const { addToCart } = cartActions;
  const [buttonText, setButtonText] = useState('Add to cart');

  return (
    <>
      <div className="card">
        <center>
          {/* <button onClick={() => removeData(data)}>X</button> */}
          <br></br>
          <Link to={"/shop/" + data.id}>
            {" "}
            <img src={data.url} className="card-image" alt="product" />{" "}
          </Link>
          <div> {data.title} </div>
          <div>
            price:
            <span>{data.price}</span>
          </div>
          {/* <button onClick={() => addToCart(data)} >Add to cart</button> */}
          <button onClick={() => {
            // addToCart(data);
            dispatch(addToCart(data));
            setButtonText('Added to cart');
          }} 
        >{buttonText}</button>
        </center>
      </div>
    </>
  );
};

export default Card;
