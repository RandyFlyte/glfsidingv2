import FiveStars from './FiveStars';
import ReviewCard from './ReviewCard';
import Link from 'next/link';

const Reviews = () => {
  return (
    <div id='reviews' className='w-full scroll-snap-start'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='text-2xl inline-flex tracking-widest uppercase p-2 text-[#1e1c58]'>
          Reviews
        </h2>
        <h3 className='text-base px-5 inline-flex'>From our customers!</h3>
        <p>Our Google reviews! Click a review to view on Google</p>
        <FiveStars />
        <span className='underline'>8 reviews</span>
        <div className='p-1 mt-4 mb-0'>
          <Link href='https://g.co/kgs/StM7Y7'>
            <ReviewCard
              custName='Katie Guidi'
              timeAgo='2 years ago'
              reviewMessage='Positive: Professionalism, Punctuality, Quality, Responsiveness, Value.
                        Gary repaired the siding around our garage doors and was excellent to work with! He was knowledgeable, punctual and did an excellent job. Highly recommend GLF Siding!!!!!'
              responseMessage="Thank you for the wonderful review! It's been a pleasure doing business with you!
                        Gary"
            />
          </Link>
          <ReviewCard
            custName='Irene Novick'
            timeAgo='2 years ago'
            reviewMessage='Gary did a beautiful job on our home!  We got tons of compliments!  We are very pleased with his work.  He took his time and was very meticulous with his work.  I would definitely recommend Gary!'
            responseMessage="Thank you for the review Irene! We've enjoyed working for you and Jeff. Thank you for your business!
Don't hesitate to contact us for any future needs!"
          />
          <ReviewCard
            custName='Robert kern'
            timeAgo='3 years ago'
            reviewMessage='Positive: Professionalism, Punctuality, Quality, Responsiveness, Value
Gary was a pleasure to work with from start to finish. He was always listening to our requests and doing his best to fulfill them.
The finished product is just amazing from what it looked like before. Truly a great great job.'
            responseMessage='Thank you for the review Robert! It’s been a pleasure doing business with you and your wife Kellie!'
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
