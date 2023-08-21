import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../../public/assets/projects/property.jpg";
import cryptoImg from "../../public/assets/projects/crypto.jpg";
import netflixImg from "../../public/assets/projects/netflix.jpg";
import twitchImg from "../../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <div id='projects' className='w-full pt-28'>
            <div className='max-w-[1240px] mx-auto px-2 pt-18 py-16'>
                <p className='text-xl tracking-widest uppercase pt-48 text-[#5651e5]'>
                    Projects
                </p>
                <div className='flex'>
                    <h2 className='py-4 text-sm'>
                        Projects we have completed.
                    </h2>
                    <Link
                        href='/projects'
                        className='underline float pt-6 px-5 hover:text-lg'
                    >
                        Click here to view more projects!
                    </Link>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='Property Finder'
                        backgroundImg={propertyImg}
                        projectUrl='/property'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Crypto App'
                        backgroundImg={cryptoImg}
                        projectUrl='/crypto'
                        tech='React JS'
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
