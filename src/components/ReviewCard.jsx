const ReviewCard = ({ custName, timeAgo, reviewMessage, responseMessage }) => {
    return (
        <div className='border-2 border-blue-100/75 shadow-xl rounded-lg p-1 m-2 mt-8 bg-slate-100'>
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>

            <h3>{custName}</h3>

            {/* Stars and Time ago */}
            <div id='stars-and-date' className='flex'>
                <section id='stars flex'>
                    <span
                        class='fa fa-star checked'
                        style={{ color: 'orange' }}></span>
                    <span
                        class='fa fa-star checked'
                        style={{ color: 'orange' }}></span>
                    <span
                        class='fa fa-star checked'
                        style={{ color: 'orange' }}></span>
                    <span
                        class='fa fa-star checked'
                        style={{ color: 'orange' }}></span>
                    <span
                        class='fa fa-star checked'
                        style={{ color: 'orange' }}></span>
                </section>
                <span className='flex pl-2 text-sm'>{timeAgo}</span>
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
