import React, { useEffect,createContext,useState } from "react";

export const ProductContextProvider = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);

  const getUsers = async () => {
    const response =await fetch('https://fakestoreapi.com/products?limit');
    setProducts(await response.json());
    return setProducts
  }

  useEffect(() => {
     getUsers();
  },[])

 
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
     <ProductContextProvider.Provider value={{products, setProducts, sortProducts}}>
      {children}
      </ProductContextProvider.Provider>
  )
};

export default Context;
