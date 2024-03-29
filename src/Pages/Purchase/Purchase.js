import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseModal from './PurchaseModal';

const Purchase = () => {
    const { toolId } = useParams();
    const [tool, setTool] = useState([]);

    useEffect(() => {
        const url = `https://ferrum-tools-server-side.fly.dev/tools/${toolId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])

    return (
        <div>
            <h1 className='text-4xl my-10 text-primary font-bold text-center'>Purchase</h1>
            <div className="card mx-auto card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='p-5' src={tool.img} alt="" /></figure>
                <div className="card-body">
                    <h1 className="card-title font-bold text-2xl">{tool.name}</h1>
                    <p>Short Description: {tool.shortDescription}</p>
                    <p>Minimum Order Quantity: {tool.minimumOrder}</p>
                    <p>Available Quantity: {tool.available}</p>
                    <p>Price Per Unit in BDT: {tool.price}</p>
                    <div className="card-actions justify-end">
                        <label htmlFor="purchaseModal" className="btn btn-primary text-white">Purchase Now</label>
                    </div>
                </div>
            </div>
            {<PurchaseModal tool={tool}></PurchaseModal>}
        </div>
    );
};

export default Purchase;