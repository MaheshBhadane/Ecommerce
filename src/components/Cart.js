import React, { Fragment, useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({products, changeQuantity}) => {

    const [classActive, toggleClass] = useState(false);
    const [sum, setSum] = useState(0);

    const toggleButton = () => {
        toggleClass(!classActive);
    }

    useEffect(() => {
        let total = 0;
        for(var i = 0; i < products.length ; i++) {
            total+= products[i].price*products[i].quantity;
        }
        setSum(total);
    }, [products])

    const checkout = () => {
        alert(`Checkout - Subtotal: $ ${sum.toFixed(2)}`)
    }

    return (
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""}>
            
            <div className="sidebar-content">
                    <div className="toggle-btn">
                    <button className="button" onClick={toggleButton}>CART</button>
                    </div>
                    
                    <div className="cart-content">
                    <h3>
                        Your Cart...
                    </h3> 

                    <div  className="cart-list">
                        {
                            products.length === 0 
                            ? 
                            <div className="empty-cart">
                                <p>No items in Cart, Please add..!!!</p>
                            </div> 
                            :
                            products.map(product => {
                                return (
                                    <CartItem 
                                        key={product.id} 
                                        product={product} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                    </div>

                    <div >
                        <div className="checkout">
                                <div className="subtotal-div">
                                    <p className="subtotal">SUBTOTAL</p>
                                    <p className="subtotal-price"> {sum.toFixed(2)}</p>
                                </div>
                                <button className="checkout-btn" 
                                onClick={checkout}>
                                    CHECKOUT
                                    </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;