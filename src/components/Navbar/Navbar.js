import React from 'react'
import "./Navbar.css" 
import { Link } from "react-router-dom"
import { Route, Switch } from "react-router-dom";
import Admin from './Admin';
import Home from './Home';
import Shop from './Shop';

const Navbar = () => {
  return (
    <>
        <nav className='nav'>
            <div className='logo'>
                <h2>
                    <span>S</span>hopping
                    <span>C</span>ard
                </h2>
            </div>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to="/home">HOME</Link>
                        <Switch>
                            <Route exact path='/home'>
                            <Home/>
                            </Route>
                        </Switch>
                    </li>
                    <li>
                        <Link to="/shop">SHOP</Link>
                        <Switch>
                            <Route path='/shop'>
                            <Shop/>
                            </Route>
                        </Switch>
                    </li>
                    <li>
                        <Link to="/admin">ADMIN</Link>
                        <Switch>
                            <Route  path='/admin'>
                            <Admin/>
                            </Route>
                        </Switch>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>
  );
};
 
export default Navbar;