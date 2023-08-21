import React from "react";
import Image from "next/legacy/image";
import AboutImg from "../../public/assets/about.jpg";

const Main = () => {
    return (
        <div className='w-full h-screen text-center relative mt-48'>
            <Image
                src={AboutImg}
                layout='fill'
                objectFit='cover'
                className='rounded-xl invisible md:visible'
                alt='/'
            />

            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-top absolute top-0'>
                <div className='text-gray-200 pt-10'>
                    <p className='uppercase text-sm tracking-widest text-gray-200 bg-slate-400 '>
                        We at GLF Siding Specialize in Siding, Windows, and
                        Doors!
                        <span className='py-4 bg-slate-400'>
                            {/* GLF Siding Specialize in Siding, Windows, and Doors! */}
                        </span>
                    </p>
                    <h1 className='text-gray-100 bg-slate-500'>
                        Get a free estimate now!
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Main;
