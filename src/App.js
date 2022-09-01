import React, { useEffect, useContext } from "react";
import "./App.css";
import Products from "./components/Cart/Products";
import Cart from "./components/Cart/Cart";
import filterList from "./components/FilterList/filterList";
import { Route, Switch } from "react-router-dom";
import Admin from "./components/pages/Admin";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/pages/Shop";
import Hero from "./components/Hero/Hero";
import Error from "./components/pages/Error";
import ShopDetail from "./components/pages/ShopDetail";
import background from "./assests/placeholder.png";
import { ProductContextProvider } from "./context/ProductContextProvider";
import { CartContextProvider } from "./context/CartContextProvider";
import ErrorUi from "./ErrorUi";

const App = () => {

  const {products, setProducts} = useContext(ProductContextProvider)

  const {cart} = useContext(CartContextProvider)

  useEffect(() => {
    setProducts(filterList([], null));
  }, [setProducts]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
      >
        <ErrorUi>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Products products={products}/>
            <Cart products={cart}  />
          </Route>

          <Route path="/shop" exact>
            <Shop />
            <Products products={products}/>
            <Cart  products={cart}/>
          </Route>

          <Route path="/shop/:Id" component={ShopDetail} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/admin/:email" component={Admin} exact />
          <Route path="*" component={Error} exact />
        </Switch>
        </ErrorUi>
      </div>
    </>
  );
};

export default App;
