import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, description, price, quantity, supplierName } = product;
    const restockItemRef = useRef();

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleDeliveredBtn = id => {
        const newQuantity = parseInt(quantity) - 1;
        const updatedQuantity = { newQuantity };

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                toast('Product delivered successfully.');
            })
    };

    const handleRestock = (id, e) => {
        const restockQuantity = restockItemRef.current.value;
        const newQuantity = parseInt(quantity) + parseInt(restockQuantity);
        const updatedQuantity = { newQuantity };

        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                // toast('Product delivered successfully.');
            })
    }

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
                    <button onClick={() => handleDeliveredBtn(_id)}
                        className='btn btn-primary mb-5'>
                        Delivered
                    </button>
                </div>
                <div className="col-4 mt-5 text-center">
                    <h3>Restock The Items</h3>
                    <form onSubmit={() => handleRestock(_id)}>
                        <input ref={restockItemRef} className='px-2 py-1' type="number" name="restockItem" id="" placeholder='Quantity' />
                        <br />
                        <input className='btn btn-primary mt-2' type="submit" value="Restock" />
                    </form>

                    {/* <br />
                    <button onClick={() => handleRestockBtn(_id)}
                        className='btn btn-primary mt-2'>
                        Restock
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetail;