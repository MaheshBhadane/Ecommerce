import React, { useEffect, useContext } from "react";
import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import filterList from "./components/filterList";
import { Route, Switch } from "react-router-dom";
import Admin from "./components/Navbar/Admin";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Navbar/Shop";
import Home from "./components/Navbar/Home";
import Error from "./components/Navbar/Error";
import ShopDetail from "./components/Navbar/ShopDetail";
import background from "./placeholder.png";
import { ProductContext } from "./context/ProductContext";
import { CartContext } from "./context/CartContextProvider";
import ErrorUi from "./ErrorUi";
//import Hero from "./Hero"

const App = () => {

  const {products, setProducts} = useContext(ProductContext)
  // const [products, setProducts] = useState([]);
  
  const {cart} = useContext(CartContext)
  //const [cart, setCart] = useState([]);

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
          {/* <Hero heroname="mahesh" />
           <Hero heroname="rahul" />  */}
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
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
