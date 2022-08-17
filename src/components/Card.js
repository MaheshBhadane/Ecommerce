import React from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Card = ({data, addToCart, removeData}) => {
    return (
        <>
        <div className="card">
            {/* <div>
            <button> 
            <span onClick={()=>handleDelete(item.id)} > </span>
            </button>
            </div> */}
            <Link to={"/shop/id"}>
            <button onClick={() => removeData(data)} >X</button>
            <br></br>

            <img src={data.url} className="card-image" alt="product" />
            <div>
                {data.title}
            </div>
                
            <div>
                price: 
                <span>{data.price}</span>
            </div>

            <button onClick={() => addToCart(data)} >Add to cart</button>
            </Link>
            </div>  
         

        
            </>
        
    )
}

export default Card;
