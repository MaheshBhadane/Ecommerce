import React from 'react'
// import { useState } from 'react';

const Card = ({data, addToCart, removeData}) => {



    return (
        
        <div className="card">
            {/* <div>
            <button> 
            <span onClick={()=>handleDelete(item.id)} > </span>
            </button>
            </div> */}

            <button onClick={() => removeData(data)} >X</button>
            <br></br>

            <img src={data.url} className="card-image" alt="product" title={data.title} />
            <div>
                {data.title}
                
                </div>
                
            <div>
                price: 
                <span>{data.price}</span>
                </div>

            <button onClick={() => addToCart(data)} >Add to cart</button>
            </div>
        
    )
}

export default Card;
