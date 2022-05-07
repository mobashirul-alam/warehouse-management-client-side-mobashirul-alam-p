import React, { useEffect, useState } from 'react';
import ProductDetails from '../../ProductManagement/ProductDetails/ProductDetails';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div id='inventory'>
            <h1 className='text-center'>Our Inventory</h1>
            <div>
                {
                    products.splice(0, 6).map(product => <ProductDetails
                        key={product._id}
                        product={product}
                    ></ProductDetails>)
                }
            </div>
        </div>
    );
};

export default Inventory;