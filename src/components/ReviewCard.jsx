import Image from 'next/image';
import FiveStars from './FiveStars';

const ReviewCard = ({ custName, timeAgo, reviewMessage, responseMessage }) => {
    return (
        <div className='border-2 border-blue-600/75 shadow-xl rounded-lg p-1 m-2 mt-2 bg-slate-100'>
            <div className='flex'>
                <Image
                    src='/assets/Google_Contacts_logo.png'
                    alt='Google Contact Logo'
                    width='50'
                    height='50'
                    className='pt-0 pr-2 self-center'
                />
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
