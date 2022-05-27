import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({ tool }) => {
    const { name, minimumOrder, available } = tool;
    const [user, loading, error] = useAuthState(auth);

    const [amount, setAmount] = useState();

    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-accent">Purchase {name}</h3>
                    <form className='grid grid-cols-1 mt-5 gap-5 justify-items-center'>
                        <input type="number" defaultValue={minimumOrder} placeholder="Amount" step="10" min={minimumOrder} max={available} required
                            onChange={event => setAmount(event.target.value)}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" required
                            disabled value={user?.displayName || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" required
                            disabled value={user?.email || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Your phone number" required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Your address" required className="input input-bordered w-full max-w-xs" />
                        <p>{
                            amount < minimumOrder || amount > available
                                ? <span className='text-red-500'>Amount must be between {minimumOrder} and {available}.</span>
                                : <span></span>
                        }</p>
                        <input type="submit" value="Submit"
                            disabled={amount < minimumOrder || amount > available}
                            className="btn btn-accent w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;