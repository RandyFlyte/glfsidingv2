import React from 'react';
import Link from 'next/link';

const Main = () => {
    return (
        <section
            id='Main-Root'
            className='w-full h-auto text-center relative mt-6 md:mt-12'>
            <div className='max-w-[960px] w-full mx-auto p-0 flex flex-col justify-start absolute top-0 lg:pt-24'>
                <h2
                    id='Banner-Top'
                    className='uppercase text-base tracking-widest text-gray-200 bg-slate-800 '>
                    We at GLF Siding specialize in installing Siding, Windows,
                    and Doors!
                </h2>
                <Link href='/#contact'>
                    <h3 className='text-gray-100 bg-slate-500 underline'>
                        * Contact us for a free estimate now! *
                    </h3>
                </Link>
            </div>
        </section>
    );
};

export default Main;
