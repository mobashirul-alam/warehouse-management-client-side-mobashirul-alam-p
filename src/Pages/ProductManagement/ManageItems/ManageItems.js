import React from 'react';
import useLoadProducts from '../../../hooks/useLoadProducts';
import SingleItemManage from '../SingleItemManage/SingleItemManage';

const ManageItems = () => {
    const [products, setProducts] = useLoadProducts();
    return (
        <div className='container'>
            <h3 className='text-center my-3'>Manage All Items</h3>
            <div className='row'>
                {
                    products.map(product => <SingleItemManage
                        key={product._id}
                        product={product}
                    ></SingleItemManage>)
                }
            </div>
        </div>
    );
};

export default ManageItems;