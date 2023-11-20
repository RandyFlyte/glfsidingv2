import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <section id='Main-Root' className='w-full h-auto text-center relative mt-6'>
      <div className='w-full mx-auto p-0 flex flex-col justify-start absolute top-0'>
        <h2
          id='Banner-Top'
          className='uppercase text-base tracking-widest text-gray-200 bg-slate-800 lg:text-lg'>
          Window Replacement, Garage Doors, Siding Repairs, and Entry Doors!
        </h2>
        <div className='flex flex-col md:flex-row justify-start p-1 text-blue-950 hover:text-stone-700 text-lg lg:text-xl'>
          <a href='tel:+18622594566' className='mr-1 rounded-lg underline'>
            (862)259-4566
          </a>
          <span className='no-underline'>Call or e-mail us!</span>
          <a
            href='mailto:GLFsiding@gmail.com'
            className='px-1 rounded-lg underline'>
            GLFsiding@gmail.com
          </a>
        </div>
        <Link href='/#contact'>
          <h3 className='text-orange-200 animate-pulse bg-slate-600 underline p-2 lg:text-xl'>
            ** Contact us for a FREE estimate now! **
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default Main;
