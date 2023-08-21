import React from "react";
import Link from "next/link";

const Main = () => {
    return (
        <div className='w-full h-10 text-center relative mt-32'>
            {/* <Image
                src={AboutImg}
                layout='fill'
                objectFit='cover'
                className='rounded-xl invisible md:visible'
                alt='/'
            /> */}

            <div className='max-w-[1240px] w-full h-100 mx-auto p-0 flex justify-start absolute top-0'>
                <div className='text-gray-200 pt-0 sm:px-48'>
                    <h2 className='uppercase text-sm tracking-widest text-gray-200 bg-slate-400 '>
                        We at GLF Siding Specialize in Siding, Windows, and
                        Doors!
                        <span className='pt-4 bg-slate-400'>
                            {/* GLF Siding Specialize in Siding, Windows, and Doors! */}
                        </span>
                    </h2>
                    <Link href='/#contact'>
                        <h3 className='text-gray-100 bg-slate-500'>
                            Get a free estimate now!
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Main;
