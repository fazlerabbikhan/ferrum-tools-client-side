import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Feedback from './Feedback';
import Reviews from './Reviews/Reviews';
import Summary from './Summary/Summary';
import WhyUs from './WhyUs';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Summary></Summary>
            <Reviews></Reviews>
            <WhyUs></WhyUs>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;