import { useParams } from "react-router-dom"
import React from 'react'

const CardDetail = ({product}) => {
    const param=useParams();

    return (
        <div >
            <img src={product.url} alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{product.title}</p>
                    <span className="cart-item-price">{product.price}</span>
                    
                </div>
                <div>
                    <p className="item-quantity"> Quantity: <span>{product.quantity}</span></p>
                </div>
                <p>{param.idOfProduct}</p>
            </div>
        </div>
    )
}

export default CardDetail;
