import React from 'react';

const Tool = ({ tool }) => {
    const { _id, name, img, shortDescription, minimumOrder, available, price } = tool;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='p-5' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <h2 className="card-title">Short Description: {shortDescription}</h2>
                <h2 className="card-title">Minimum Order Quantity: {minimumOrder}</h2>
                <h2 className="card-title">Available Quantity: {available}</h2>
                <h2 className="card-title">Price Per Unit: {price}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;