import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
        const url = `https://fitness-pro-equipment-house.herokuapp.com/userProduct?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [user]);

    // const { _id, name, price, quantity, supplierName } = myProducts;

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            const url = `https://fitness-pro-equipment-house.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingItems = myProducts.filter(product => product._id !== id);
                        setMyProducts(remainingItems);
                    }
                })
        }
    }

    return (
        <div className='container'>
            <h3 className='text-center my-4'>My Items</h3>
            <div className='row'>
                {
                    myProducts.map(product => {
                        return <div key={product._id} className='col-12 col-sm-6 col-lg-4'>
                            <div className="card border-success mb-3">
                                <div className="card-header bg-transparent border-success">
                                    <h5 className="card-title">{product.name}</h5>
                                </div>
                                <div className="card-body text-success">
                                    <p className="card-text">
                                        Price : {product.price} <small className='text-muted'>$/pcs</small>
                                    </p>
                                    <p className="card-text">
                                        Quantity : {product.quantity} pcs
                                    </p>
                                    <p className="card-text">
                                        Supplier : {product.supplierName}
                                    </p>
                                </div>
                                <div className="card-footer bg-transparent border-success">
                                    <button onClick={() => handleDeleteItem(product._id)}
                                        className='btn btn-secondary w-100'>
                                        Delete Item
                                    </button>
                                </div>
                            </div>
                        </div>;
                    })
                }
            </div>
        </div>
    );
};

export default MyItems;