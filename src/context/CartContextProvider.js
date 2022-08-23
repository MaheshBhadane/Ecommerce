import React, { createContext,useState } from "react";

export const CartContext = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const productList = [...cart];
    
        if (!productList.includes(item)) {
          productList.push(item);
        }
        const index = productList.indexOf(item);
        productList[index].quantity++;
        setCart(productList);
      };

      const removeData = (item) => {
        const productList = [...cart];
    
        if (!productList.includes(item)) {
          productList.push(item);
        }
        const index = productList.indexOf(item);
        productList[index].quantity--;
        setCart(productList);
      };

      const changeQuantity = (item, e) => {
        const productList = [...cart];
        const index = productList.indexOf(item);
    
        if (e === "+") {
          productList[index].quantity++;
        } else {
          if (productList[index].quantity > 1) {
            productList[index].quantity--;
          } else {
            productList.splice(index, 1);
          }
        }
        setCart(productList);
      };
    

  return(
     <CartContext.Provider value={{cart, addToCart, removeData, changeQuantity}}>
      {children}
      </CartContext.Provider>
  )
};

export default Context;
