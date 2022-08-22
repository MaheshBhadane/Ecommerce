import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContextProvider"

ReactDOM.render(
  <BrowserRouter>
  
  <ProductContext> <CartContext> <App /></CartContext></ProductContext>
  </BrowserRouter>,

  document.getElementById("root")
);
