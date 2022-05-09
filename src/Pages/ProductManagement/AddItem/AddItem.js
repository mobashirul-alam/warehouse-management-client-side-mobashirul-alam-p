import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        const url = `https://fitness-pro-equipment-house.herokuapp.com/products`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Items Added Successfully')
                e.target.reset();
            })
    };

    return (
        <div className='container'>
            <h1 className='text-center my-4'>Add New Inventory Item</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-50 my-2 p-1 d-block mx-auto' value={user.email} {...register("email", { required: true })} placeholder='User email' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' {...register("name", { required: true })} placeholder='Product name' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' {...register("img", { required: true })} placeholder='Image url' />
                    <textarea className='w-50 my-2 p-1 d-block mx-auto' {...register("description", { required: true })} placeholder='Product description' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' {...register("price", { required: true })} placeholder='Product price' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' type="number" {...register("quantity", { required: true })} placeholder='Quantity' />
                    <input className='w-50 my-2 p-1 d-block mx-auto' {...register("supplierName", { required: true })} placeholder='Supplier name' />
                    <input className='w-25 d-block mx-auto mt-3 mb-5 py-1' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;