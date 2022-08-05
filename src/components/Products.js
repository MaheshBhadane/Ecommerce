import React, {useState} from 'react';

import CardList from './CardList';

const Products = ({products, sortProducts, addToCart,removeData}) =>  {

    const [value, setValue] = useState('Select');

    const setList = (e) => {
        setValue(e.target.value);
        sortProducts(e.target.value);
    }
    
    return (
        <div >
                <center><h1>Shopping Card</h1></center>
            <div >
                <h3>Products</h3>
                <div>
                    Sort by
                    <select value={value} onChange={setList}>
                        <option value="Select">Filter</option>
                        <option value="High to Low">High to Low</option>
                        <option value="Low to High">Low to High</option>
                    </select>
                </div>
            </div>
            <br></br>
            <CardList products={products} addToCart={addToCart} removeData={removeData}/>
            
        </div>
    )
}

export default Products;
