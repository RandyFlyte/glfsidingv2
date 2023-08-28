'use client';

import Image from 'next/image';
import FiveStars from './FiveStars';
import Avatar from 'react-avatar';

const ReviewCard = ({ custName, timeAgo, reviewMessage, responseMessage }) => {
  return (
    <div className='border-2 border-blue-600/75 shadow-xl rounded-lg p-1 m-2 mt-2 bg-slate-100'>
      <div className='flex'>
        <Avatar name={custName} round color='#0055D1' size='50' />
        <div>
          <h3>{custName}</h3>

          {/* Stars and Time ago */}
          <FiveStars timeAgo={timeAgo} />
        </div>
      </div>

      {/* Review message */}
      <article id='review'>{reviewMessage}</article>

      {/* Conditional rendering for Response */}
      {responseMessage && (
        <section id='response'>
          <strong>Owner&apos;s Response:</strong> {responseMessage}
        </section>
      )}
    </div>
  );
};

export default ReviewCard;
