import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider"

ReactDOM.render(
  <BrowserRouter>
  
  <ProductContextProvider> <CartContextProvider> <App /></CartContextProvider></ProductContextProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
