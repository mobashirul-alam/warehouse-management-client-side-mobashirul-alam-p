import React from 'react';

const ProductDetails = ({ product }) => {
    const { name, img, description, price, quantity, supplierName } = product;

    return (
        <div>
            <h1>Product Name : {name}</h1>
        </div>
    );
};

export default ProductDetails;