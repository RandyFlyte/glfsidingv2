import Link from "next/link";
import Image from "next/image";
const Reviews = () => {
    return (
        <div id='reviews' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-base inline-flex tracking-widest uppercase text-[#418797]'>
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
        </div>
    );
};

export default Reviews;
