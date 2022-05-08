import React from 'react';

const AddItem = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-4'>Add New Inventory Item</h1>
            <div>
                <form>
                    <input className='w-50 my-2 p-1 d-block mx-auto' type="text" placeholder='Product name' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' type="text" placeholder='Image url' />
                    <textarea className='w-50 my-2 p-1 d-block mx-auto' name="description" id="" cols="25" rows="2" placeholder='Product description'></textarea>
                    <input className='w-50 my-2 p-1 d-block mx-auto' type="text" placeholder='Product price' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' type="number" name="quantity" id="" placeholder='Quantity' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' type="text" placeholder='Supplier name' />
                    <input type="submit" value="Add Item" className='w-25 d-block mx-auto mt-3 mb-5 py-1' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;