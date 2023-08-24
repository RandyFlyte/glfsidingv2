import Image from 'next/image';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <div id='reviews' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-2xl inline-flex tracking-widest uppercase text-[#1e1c58]'>
                    Reviews
                </p>
                <p className='text-base px-5 inline-flex'>
                    From our customers!
                </p>
                <Image
                    src='/assets/reviews/Irene.png'
                    alt=''
                    width='665'
                    height='234'
                    className='pt-10'
                />
            </div>
            <ReviewCard
                custName='Katie Guidi'
                timeAgo='2 years ago'
                reviewMessage='Positive: Professionalism, Punctuality, Quality, Responsiveness, Value. 
Gary repaired the siding around our garage doors and was excellent to work with! He was knowledgeable, punctual and did an excellent job. Highly recommend GLF Siding!!!!!'
                responseMessage="Thank you for the wonderful review! It's been a pleasure doing business with you!
Gary"
            />
        </div>
    );
};

export default Reviews;
