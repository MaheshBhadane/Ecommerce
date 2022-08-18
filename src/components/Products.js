import React, { useState } from "react";
import CardList from "./CardList";

const Products = ({ products, sortProducts, addToCart, removeData }) => {
  const [value, setValue] = useState("Select");
  // const [lists,setLists] = useState("");

  const setList = (e) => {
    setValue(e.target.value);
    sortProducts(e.target.value);
  };

  // const saveDataHandler = (enteredData) =>
  // {
  //     const itemData = {
  //         ...enteredData,
  //         id:lists.length

  //     };
  //     setLists([itemData,...lists])
  // };

  return (
    <div>
      <div>
        <center>
          <h2>DEAL OF THE DAY</h2>
        </center>
        <h3>Products</h3>
        <div>
          Sort by : 
          <select value={value} onChange={setList}>
            <option value="Select">Filter</option>
            <option value="High to Low">High to Low</option>
            <option value="Low to High">Low to High</option>
          </select>
        </div>
      </div>
      <br></br>
      <CardList
        products={products}
        addToCart={addToCart}
        removeData={removeData}
      />

      {/* {/* Form card
      <div className="card">
        {/* oonSaveData={saveDataHandler} */}
        {/* <button onClick={() => removeData()}>X</button>
        <br></br>
        <img src={"item.image"} className="card-image" alt="product" />
        <div>{"item.title"}</div>

        <div>
          price:
          <span>{"item.price"}</span>
        </div>
        <button onClick={() => addToCart()}>Add to cart</button>
      </div>
    </div>   */}
    
    </div>
  );
};

export default Products;
