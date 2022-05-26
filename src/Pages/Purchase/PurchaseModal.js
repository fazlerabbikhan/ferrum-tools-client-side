import React, { useState } from 'react';

const PurchaseModal = ({ tool }) => {
    const { name, minimumOrder, available } = tool;

    const [amount, setAmount] = useState();

    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-accent">Purchase {name}</h3>
                    <form className='grid grid-cols-1 mt-5 gap-5 justify-items-center'>
                        <input type="number" defaultValue={minimumOrder} placeholder="Amount" step="10" min={minimumOrder} max={available} required onChange={(e) => setAmount(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Your email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Your phone number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Your address" className="input input-bordered w-full max-w-xs" />
                        <p>{
                            amount < minimumOrder || amount > available
                                ? <span className='text-red-500'>Amount must be between {minimumOrder} and {available}.</span>
                                : <span></span>
                        }</p>
                        <input type="submit" value="submit" disabled={amount < minimumOrder || amount > available} className="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;