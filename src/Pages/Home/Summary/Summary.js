import React from 'react';
import quote from '../../../images/quote.svg'
import tools from '../../../images/tools.svg'
import clients from '../../../images/clients.svg'
import feedbacks from '../../../images/feedbacks.svg'
import SummaryCard from './SummaryCard';

const Summary = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl my-10 text-primary font-bold text-center'>Business Summary</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <SummaryCard cardTitle="1M+ Tools Sold" bgClass="bg-gradient-to-r from-secondary to-primary" img={tools}></SummaryCard>
                <SummaryCard cardTitle="1000+ Happy Clients" bgClass="bg-neutral" img={clients}></SummaryCard>
                <SummaryCard cardTitle="100+ Feedbacks" bgClass="bg-gradient-to-r from-secondary to-primary" img={feedbacks}></SummaryCard>
            </div>
        </div>
    );
};

export default Summary;