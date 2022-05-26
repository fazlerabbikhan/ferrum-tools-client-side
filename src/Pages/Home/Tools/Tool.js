import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { _id, name, img, shortDescription, minimumOrder, available, price } = tool;

    const navigate = useNavigate();

    const navigateToPurchase = id => {
        navigate(`/purchase/${id}`)
    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='p-5' src={img} alt="" /></figure>
            <div className="card-body">
                <h1 className="card-title font-bold text-2xl">{name}</h1>
                <p>Short Description: {shortDescription}</p>
                <p>Minimum Order Quantity: {minimumOrder}</p>
                <p>{
                    available > minimumOrder || available === minimumOrder
                        ? <span>Available Quantity: {available}</span>
                        : <span className='text-red-500'>Not enough available.</span>
                }</p>
                <p>Price Per Unit: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => navigateToPurchase(_id)} disabled={available < minimumOrder} className="btn btn-primary text-white">Go to Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;