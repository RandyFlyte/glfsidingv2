import Link from 'next/link';
import React from 'react';
import propertyImg from '../../public/assets/projects/property.jpg';
import cryptoImg from '../../public/assets/projects/crypto.jpg';
import netflixImg from '../../public/assets/projects/netflix.jpg';
import twitchImg from '../../public/assets/projects/twitch.jpg';
import GarageDoorService from '../../public/assets/services/GarageDoorService.png';
import garage_door_service from '../../public/assets/services/garage_door_service.png';
import ProjectItem from './ProjectItem';

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
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
