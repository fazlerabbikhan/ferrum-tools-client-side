import React from "react";
import feedback from '../../images/feedback.jpg'

const Feedback = () => {
    return (
        <div style={{
            background: `url(${feedback})`,
            backgroundSize: 'cover'
        }} className='bg-primary py-5 rounded-lg'>
            <div className='text-center pb-5 text-white'>
                <p className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Feedback
                </p>
                <h1 className='text-2xl'>Share your experience with us.</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Your email address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default Feedback;