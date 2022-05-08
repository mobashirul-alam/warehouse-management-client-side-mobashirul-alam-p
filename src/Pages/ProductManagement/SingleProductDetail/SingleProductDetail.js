import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const { _id, name, img, description, price, quantity, supplierName } = product;

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-8">
                    <div className='d-flex justify-content-center'>
                        <img className='w-50' src={img} alt="" />
                    </div>
                    <div>
                        <h3 className='border-bottom border-secondary my-3 pb-2'>Product Specifications</h3>
                        <h5>Product id : {_id}</h5>
                        <h5>Product : {name}</h5>
                        <h5>Description :</h5>
                        <p>{description}</p>
                        <p>
                            <span className='fs-5 fw-bold'>Price : </span>
                            <span className='display-6'>{price}$</span>
                            <small className='text-muted'>/pcs</small>
                        </p>
                        <p className="fs-5">
                            <span className='fw-bold'>In Stock : </span>
                            <span className='display-6'>{quantity}</span>
                            <small className='text-muted'> pcs</small>
                        </p>
                        <p className='fs-5'>Supplier : {supplierName}</p>
                    </div>
                    <button
                        className='btn btn-primary'>
                        Delivered
                    </button>
                </div>
                <div className="col-4">

                </div>
            </div>
        </div>
    );
};

export default SingleProductDetail;