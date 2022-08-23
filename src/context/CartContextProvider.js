import React, { createContext,useReducer,useState } from "react";
import { studentReducer } from "./cartReducer";

export const CartContext = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(studentReducer, {
        cart: []
    });



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
     <CartContext.Provider value={{state, dispatch, cart, addToCart, removeData, changeQuantity}}>
      {children}
      </CartContext.Provider>
  )
};

export default Context;
