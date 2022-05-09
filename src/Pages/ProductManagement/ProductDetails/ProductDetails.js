import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, img, description, price, quantity, supplierName } = product;

    const handleStockUpdate = _id => {
        navigate(`/inventory/${_id}`);
    }

    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-12 col-lg-4 my-auto">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-12 col-lg-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text mb-1">
                            <span className='fs-5'>Price : </span>
                            <span className='display-6'>{price}$</span>
                            <small className='text-muted'>/pcs</small>
                        </p>
                        <p className="card-text mb-1 fs-5">In Stock : {quantity} pcs</p>
                        <p className="card-text"><small className="text-muted">Supplier : {supplierName}</small></p>
                        <button onClick={() => handleStockUpdate(_id)}
                            className='btn btn-secondary'>
                            Stock Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;