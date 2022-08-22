import React, { createContext,useState } from "react";

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
 
  const sortProducts = (method) => {
    const array = products;

    /*Product sorting*/

    if (method === "Low to High") {
      array.sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (method === "High to Low") {
      array.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    setProducts(array);
  };

  return(
     <ProductContext.Provider value={{products, setProducts, sortProducts}}>
      {children}
      </ProductContext.Provider>
  )
};

export default Context;
