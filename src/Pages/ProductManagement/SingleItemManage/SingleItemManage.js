import React from 'react';

const SingleItemManage = ({ product, handleDeleteItem }) => {
    const { _id, name, price, quantity, supplierName } = product;
    return (
        <div className='col-12 col-sm-6 col-md-4'>
            <div className="card border-success mb-3">
                <div className="card-header bg-transparent border-success">
                    <h5 className="card-title">{name}</h5>
                </div>
                <div className="card-body text-success">
                    <p className="card-text">
                        Price : {price} <small className='text-muted'>$/pcs</small>
                    </p>
                    <p className="card-text">
                        Quantity : {quantity} pcs
                    </p>
                    <p className="card-text">
                        Supplier : {supplierName}
                    </p>
                </div>
                <div className="card-footer bg-transparent border-success">
                    <button onClick={() => handleDeleteItem(_id)}
                        className='btn btn-secondary w-100'>
                        Delete Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleItemManage;