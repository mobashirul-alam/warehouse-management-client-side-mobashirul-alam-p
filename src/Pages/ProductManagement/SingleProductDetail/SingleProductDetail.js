import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProductDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { _id, name, img, description, price, quantity, supplierName } = product;
    const restockItemRef = useRef();

    useEffect(() => {
        const url = `https://fitness-pro-equipment-house.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleDeliveredBtn = id => {
        const newQuantity = parseInt(quantity) - 1;
        const updatedQuantity = { newQuantity };

        const url = `https://fitness-pro-equipment-house.herokuapp.com/product/${id}`;
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

    const handleRestockBtn = (id, e) => {
        e.preventDefault();
        const restockQuantity = restockItemRef.current.value;
        const newQuantity = parseInt(quantity) + parseInt(restockQuantity);
        const restockedQuantity = { newQuantity };

        const url = `https://fitness-pro-equipment-house.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(restockedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                toast('Item restock successful');
            })
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className="col-12 col-md-8">
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
                <div className="col-12 col-md-4 mt-5 text-center">
                    <h3>Restock The Items</h3>
                    <form onSubmit={() => handleRestockBtn(_id)}>
                        <input ref={restockItemRef} className='px-2 py-1' type="number" name="restockItem" id="" placeholder='Quantity' />
                        <br />
                        <input className='btn btn-primary mt-2' type="submit" value="Restock" />
                    </form>

                    <Link to={'/manageItems'} className='text-decoration-none'>
                        <button
                            onClick={() => navigate('/manageItems')}
                            className='btn btn-link text-decoration-none d-block mx-auto p-3'>
                            Manage Inventories
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetail;