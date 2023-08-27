const FiveStars = ({ timeAgo }) => {
    return (
        <div>
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
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
        </div>
    );
};

export default FiveStars;
