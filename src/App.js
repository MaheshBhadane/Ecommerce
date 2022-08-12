import React, {useState, useEffect} from 'react';
import './App.css';
import Products from './components/Products';
import Cart from './components/Cart';
import filterList from './components/filterList'
import NewForm from './components/NewForm/NewForm'
import Navbar  from './components/Navbar/Navbar';
// import { Route, Switch } from "react-router-dom";
// import Admin from './components/Navbar/Admin';
// import Home from './components/Navbar/Home';
// import Shop from './components/Navbar/Shop';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [lists,setLists] =useState(true);

  useEffect(() => {
    setProducts(filterList([], null));

  }, [])

   const sortProducts = (method) => {
    const array = products;

    /*Product sorting*/

    if(method === "Low to High") {
        array.sort(function(a, b)
        {
          return a.price - b.price
      })
    }
    else if(method === "High to Low") {
        array.sort(function(a, b)
        {
          return b.price - a.price
      })

    }
    setProducts(array);
  }


  const addToCart = (item) => {
    const productList = [...cart];

    if(!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
  }

//   const removeData = (item) => {
//     setLists(lists.filter((list)=>
//     list.item!== item
// ))
//   }

const removeData = (item) => {
  const productList = [...cart];

  if(!productList.includes(item)) {
    productList.push(item);
  }
  const index = productList.indexOf(item);
  productList[index].quantity--;
  setCart(productList);

}

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);

    if(e === '+') {
      productList[index].quantity++;
    }
    else {
      if(productList[index].quantity > 1) {
        productList[index].quantity--;
      }
      else {
        productList.splice(index, 1);
      }
    } 
    setCart(productList);
  }
  

  return (
    <>
    <div >
    <BrowserRouter>
      <Navbar/>
    </BrowserRouter>
      {/* <Switch>
        <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/shop'>
          <Shop/>
        </Route>
      </Switch> */}
      
      <NewForm />
      <Products products={products} sortProducts={sortProducts} addToCart={addToCart} removeData={removeData} />
      <Cart products={cart} changeQuantity={changeQuantity} />
    </div>
    </>
  );
}

export default App;
