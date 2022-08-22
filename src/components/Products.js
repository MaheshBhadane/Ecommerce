import React, { useState, useContext} from "react";
import CardList from "./CardList";
import { ProductContext } from "../context/ProductContext";
// import { CartContext } from "../context/CartContext";

const Products = () => {

  const {sortProducts} = useContext(ProductContext)
  // const {} = useContext(CartContext)


  const [value, setValue] = useState("Select");

  const setList = (e) => {
    setValue(e.target.value);
    sortProducts(e.target.value);
  };

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
      <CardList/>
      {/* //   products={products}
      //   addToCart={addToCart}
      //   removeData={removeData}
      // />     */}
    </div>
  );
};

export default Products;
