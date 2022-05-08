import React from 'react';
import useLoadProducts from '../../../hooks/useLoadProducts';
import SingleItemManage from '../SingleItemManage/SingleItemManage';

const ManageItems = () => {
    const [products, setProducts] = useLoadProducts();

    const handleDeleteItem = id => {
        const proceed = window.confirm('Are you sure to delete ?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingItems = products.filter(product => product._id !== id);
                        setProducts(remainingItems);
                    }
                })
        }
    }

    return (
        <div className='container'>
            <h3 className='text-center my-3'>Manage All Items</h3>
            <div className='row'>
                {
                    products.map(product => <SingleItemManage
                        key={product._id}
                        product={product}
                        handleDeleteItem={handleDeleteItem}
                    ></SingleItemManage>)
                }
            </div>
        </div>
    );
};

export default ManageItems;