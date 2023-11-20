import GarageDoorService from '../../public/assets/workPictures/GarageDoorService.png';
import BackOfHouse from '../../public/assets/workPictures/BackOfHouse.jpeg';
import GarageDoor1 from '../../public/assets/workPictures/GarageDoor1.png';
import garage_door_service from '../../public/assets/workPictures/garage_door_service.png';
import ProjectItem from './ProjectItem';
import Image from 'next/image';

const Services = () => {
  return (
    <div
      id='Services'
      className='text-3lg w-full lg:h-screen p-0 pt-24 lg:pt-0'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        {/* Services Title */}
        <h2 className='text-2xl tracking-widest text-[#252979] self-center'>
          Services We Provide
        </h2>
        {/* Make grid, 2 columns, lg: 4 columns. */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Garage Doors Services Section */}
          <div
            id='Services-Garage'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='text-center justify-center items-center'>
              <Image
                src={GarageDoor1}
                width={500}
                height={500}
                alt='Garage door'
              />
              <h3 className=' flex-shrink-0'>Garage Doors</h3>
            </div>
          </div>

          {/* Siding Repairs Services Section */}
          <div
            id='Services-Windows'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='text-center justify-center items-center'>
              <Image
                src={`/assets/workPictures/BackOfHouse.jpeg`}
                width={500}
                height={500}
                alt='Back of a newly sided house'
              />
              <div className='flex flex-col items-center justify-center'>
                <h3>Siding Repairs</h3>
              </div>
            </div>
          </div>

          {/* Doors Service Section */}
          <div
            id='Services-EntryDoors'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <h3>Entry Doors</h3>
              </div>
            </div>
          </div>

          <div
            id='Services-GarageDoors'
            className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='flex flex-col items-center justify-center'>
                <h3>Window Replacement</h3>
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
              title='Garage Door Replacement'
              backgroundImg={GarageDoorService}
              projectUrl='/garage-doors'
              tech='Residential'
            />
            <ProjectItem
              title='Garage Door Repairs'
              backgroundImg={garage_door_service}
              projectUrl='/garage-door-repairs'
              tech='Residential'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
