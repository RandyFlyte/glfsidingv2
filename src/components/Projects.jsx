import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-2xl tracking-widest uppercase text-[#1e1c58]'>
          Projects
        </p>
        <div className='flex'>
          <h2 className='py-4 text-sm'>Projects we have completed.</h2>
          <Link
            href='/projects'
            className='underline float pt-6 px-5 hover:text-lg'>
            Click here to view more projects!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
