import React from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';

const Card = ({data, addToCart, removeData}) => {
    return (
        <>
            {/* <div>
            <button> 
            <span onClick={()=>handleDelete(item.id)} > </span>
            </button>
            </div> */}
            
            <div className="card">
                 
            <center><button onClick={() => removeData(data)} >X</button>
            <br></br>
            <Link to={"/shop/"+data.id}> <img src={data.url} className="card-image" alt="product" /> </Link>
            <div>  {data.title}  </div>
            <div>
                price: 
                <span>{data.price}</span>
            </div>
            <button onClick={() => addToCart(data)} >Add to cart</button>
            </center>
            
            </div>  
        
            </>
        
    )
}

export default Card;
