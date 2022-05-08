import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLoadProducts from '../../../hooks/useLoadProducts';
import ProductDetails from '../../ProductManagement/ProductDetails/ProductDetails';

const Inventory = () => {
    const [products, setProducts] = useLoadProducts();
    const navigate = useNavigate();

    const handleManageInventories = () => {
        navigate('/manageItems')
    }
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
            <div className='w-100'>
                <Link to={'/manageItems'} className='text-decoration-none'>
                    <button
                        onClick={handleManageInventories}
                        className='btn btn-link text-decoration-none d-block mx-auto p-3'>
                        Manage Inventories
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Inventory;