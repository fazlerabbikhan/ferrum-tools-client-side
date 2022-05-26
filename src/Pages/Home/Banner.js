import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${banner})`,
            backgroundSize: 'cover'
        }} className='bg-primary max-h-screen rounded-lg'>
            <div className='text-center py-40 text-white'>
                <p className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                    Welcome to Ferrum Tools!
                </p>
                <h1 className='text-4xl'>We provide the best quality tools around Bangladesh.</h1>
            </div>
        </div>
    );
};

export default Banner;