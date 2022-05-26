import React from 'react'
import quote from '../../../images/quote.svg'
import Review from './Review'

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Julia Ann',
            comment: 'Wow! Awesome, loved it.',
            location: 'New York',
            img: 'https://i.ibb.co/vXrKjhV/julia-ann.jpg'
        },
        {
            _id: 2,
            name: 'Alex Suprun',
            comment: 'Hope you will do better.',
            location: 'London',
            img: 'https://i.ibb.co/b7LG0Kq/alex-suprun.jpg'
        },
        {
            _id: 3,
            name: 'Midas Hofstra',
            comment: 'Much decent. Keep it up.',
            location: 'Budapest',
            img: 'https://i.ibb.co/hd8sTwx/midas-hofstra.jpg'
        },
    ];
    return (
        <div className='mt-20'>
            <section>
                <div className='flex justify-between'>
                    <div>
                        <h4 className="text-4xl text-primary font-bold">Reviews</h4>
                        <h2 className='text-xl'>What our buyers say.</h2>
                    </div>
                    <div>
                        <img src={quote} className="w-24 lg:w-48" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Reviews;