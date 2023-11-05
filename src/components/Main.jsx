import React from 'react';
import Link from 'next/link';

const Main = () => {
  return (
    <section id='Main-Root' className='w-full h-auto text-center relative mt-6'>
      <div className='w-full mx-auto p-0 flex flex-col justify-start absolute top-0'>
        <h2
          id='Banner-Top'
          className='uppercase text-base tracking-widest text-gray-200 bg-slate-800 lg:text-lg'>
          Garage Door Installations and Repairs, Siding Repairs, and Windows!
        </h2>
        <div className='flex justify-between p-1 text-blue-950 hover:text-stone-700 text-lg lg:text-xl'>
          <a href='tel:+18622594566' className='mr-1 rounded-lg underline'>
            (862)259-4566
          </a>
          <a
            href='mailto:GLFsiding@gmail.com'
            className='px-1 rounded-lg underline'>
            GLFsiding@gmail.com
          </a>
        </div>
        <Link href='/#contact'>
          <h3 className='text-gray-100 bg-slate-600 underline p-2 lg:text-xl'>
            * Contact us for a FREE estimate now! *
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default Main;
