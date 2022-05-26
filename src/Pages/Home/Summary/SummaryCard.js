import React from 'react';

const SummaryCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="text-3xl card-title">{cardTitle}</h2>
            </div>
        </div>
    );
};

export default SummaryCard;