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
        <div id='inventory' className='container my-5'>
            <h1 className='text-center mb-5 border-bottom border-secondary w-50 mx-auto pb-2'>Our Inventory</h1>
            <div className='row row-cols-1 row-cols-md-2 g-4'>
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