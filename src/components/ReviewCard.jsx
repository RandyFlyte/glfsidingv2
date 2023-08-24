const ReviewCard = ({ custName, timeAgo, reviewMessage, responseMessage }) => {
    return (
        <div>
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
                <span className='flex'>{timeAgo}</span>
            </div>

            {/* Review message */}
            <article id='review'>{reviewMessage}</article>

            {/* Conditional rendering for Response */}
            {responseMessage && (
                <section id='response'>
                    <strong>Owner's Response:</strong> {responseMessage}
                </section>
            )}
        </div>
    );
};

export default ReviewCard;
