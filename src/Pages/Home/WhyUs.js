import React from 'react';
import whyus from '../../images/whyus.jpg'

const WhyUs = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={whyus} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl text-primary font-bold">Why Ferrum?</h1>
                    <p className="text-xl py-6">We claim to be the very best tool manufacturer company within Bangladesh. It is our obligation to ensure the maximum satisfaction of our customers. We provide 5 years of warranty to all of our products. We give the fastest delivery at any place within the country.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;