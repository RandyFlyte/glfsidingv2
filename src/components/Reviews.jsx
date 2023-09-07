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
            custName='Robert Kern'
            timeAgo='3 years ago'
            reviewMessage='Positive: Professionalism, Punctuality, Quality, Responsiveness, Value
Gary was a pleasure to work with from start to finish. He was always listening to our requests and doing his best to fulfill them.
The finished product is just amazing from what it looked like before. Truly a great great job.'
            responseMessage='Thank you for the review Robert! It’s been a pleasure doing business with you and your wife Kellie!'
          />
          <ReviewCard
            custName='Dina Goldstein'
            timeAgo='4 years ago'
            reviewMessage='Gary was a pleasure to work with. He responded quickly with an estimate for the work I needed done and he kept me updated all along the way. His work is also exceptional with attention to detail. I highly reccomend him!'
            responseMessage='Thank you for the review Dina! It’s been a pleasure doing business with you!'
          />
          <ReviewCard
            custName='ann'
            timeAgo='4 years ago'
            reviewMessage='Gary came out on a Sunday and made repairs on a job he did 15 years ago. Nice guy does great work.'
            responseMessage='Thank you Ann for the review! We appreciate the business.'
          />
          <ReviewCard
            custName='Anthony Smith'
            timeAgo='4 years ago'
            reviewMessage='We recently had new siding and windows installed by Gary and his son Randy, they where both very professional and polite, the work they carried out was excellent, and they kept me informed and up to date on all the work, also the price was very reasonable for the quality of craftsmanship, I would have no hesitation in recommending them for any exterior projects, and would definitely use the again. Anthony Smith , Hackettstown NJ'
            responseMessage='Thank you Anthony for the review! It was a pleasure working with you.'
          />
          <ReviewCard
            custName='Michael Ellis'
            timeAgo='5 years ago'
            reviewMessage='Very knowledgeable and skilled craftsman.  He made sure I was completely satisfied.  A trooper despite weeks of miserable weather.  Thanks Gary, our house looks great!'
            responseMessage='Thank you Michael for the review and business!'
          />
          <ReviewCard
            custName='Helen Pyontek'
            timeAgo='8 years ago'
            reviewMessage='We had Gary Flyte(the owner) from GLF Siding install vinyl siding on our house years ago and it is still in excellent shape. When working on our house they kept things very organized and are very careful not to damage anything, and got the job done in a timely manner.  We continue to use Gary and his sons anytime we need something done as we know we can fully trust them and be rest assured the quality of work and customer service is going to be a pleasure dealing with. If you are looking for a team of clean, respectable, and highly skilled contractors, do not hesitate to call GLF Siding! Great guys. Thanks again Gary and Randy and keep up the good work!'
            responseMessage='Thank you Helen, it was a pleasure working with you.'
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
