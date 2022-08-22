import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";

const Card = ({ data }) => {
  const {addToCart,removeData} = useContext(CartContext)
 
  return (
    <>
      <div className="card">
        <center>
          <button onClick={() => removeData(data)}>X</button>
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
          <button onClick={() => addToCart(data)}>Add to cart</button>
        </center>
      </div>
    </>
  );
};

export default Card;
