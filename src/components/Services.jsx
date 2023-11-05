import Image from 'next/legacy/image';
import React from 'react';
import Css from '../../public/assets/services/css.png';
import Javascript from '../../public/assets/services/javascript.png';
import ReactImg from '../../public/assets/services/react.png';
import GarageDoorService from '../../public/assets/services/GarageDoorService.png';

const Services = () => {
  return (
    <div
      id='Services'
      className='text-3lg w-full lg:h-screen p-0 pt-24 lg:pt-0'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='text-2xl tracking-widest text-[#252979] self-center'>
          Services GLF Siding Provides
        </h2>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div
            id='Services-Garage'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
            style={{
              backgroundImage: `url(${GarageDoorService})`,
              backgroundSize: 'cover', // Ensures the background covers the entire div
              backgroundPosition: 'center', // Centers the background image
              display: 'flex', // Use flex layout
              justifyContent: 'center', // Center content horizontally
              alignItems: 'center', // Center content vertically
              height: '100%', // Set a height, or this might not work as expected
            }}>
            {/* <Image
              src={GarageDoorService}
              width='125px'
              height='125px'
              alt='/'
            /> */}
            <div className='text-center justify-center items-center'>
              <h3 className=' flex-shrink-0'>Garage Doors</h3>
            </div>
          </div>

          <div
            id='Services-Windows'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Siding Repairs</h3>
              </div>
            </div>
          </div>
          <div
            id='Services-EntryDoors'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Entry Doors</h3>
              </div>
            </div>
          </div>
          <div
            id='Services-GarageDoors'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Window Replacement</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
