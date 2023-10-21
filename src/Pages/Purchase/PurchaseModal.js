import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const PurchaseModal = ({ tool }) => {
    const { _id, name, minimumOrder, available, price } = tool;
    const [user, loading, error] = useAuthState(auth);

    const [orderQuantity, setOrderQuantity] = useState(minimumOrder);

    const totalPrice = price * orderQuantity;

    const navigate = useNavigate();

    const handleOrder = event => {
        event.preventDefault();

        const order = {
            toolId: _id,
            toolName: name,
            pricePerUnit: price,
            orderQuantity: parseInt(orderQuantity),
            totalPrice: totalPrice,
            customerName: user.displayName,
            customerEmail: user.email,
            customerPhone: event.target.phone.value,
            customerAddress: event.target.address.value,
        }

        fetch('https://ferrum-tools-server-side.fly.dev/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

        toast('Order has been placed.');
        navigate('/');
    }

    return (
        <div>
            <input type="checkbox" id="purchaseModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchaseModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-center text-accent">Purchase {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 mt-5 gap-5 justify-items-center'>
                        <input type="number" placeholder="Amount" required
                            step="10" min={minimumOrder} max={available}
                            onChange={event => setOrderQuantity(event.target.value)}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="name" placeholder="Your name" required
                            disabled value={user?.displayName || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Your email" required
                            disabled value={user?.email || ''}
                            className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Your phone number" required className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="address" placeholder="Your address" required className="input input-bordered w-full max-w-xs" />
                        <p>{
                            orderQuantity < minimumOrder || orderQuantity > available
                                ? <span className='text-red-500'>Amount must be between {minimumOrder} and {available}.</span>
                                : <span></span>
                        }</p>
                        <input type="submit" value="Submit"
                            disabled={orderQuantity < minimumOrder || orderQuantity > available}
                            className="btn btn-accent w-full max-w-xs text-white" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default PurchaseModal;