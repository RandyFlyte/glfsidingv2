import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import AboutImg from "../../public/assets/about.jpg";

const About = () => {
    return (
        <div
            id='about'
            className='w-full md:h-128 p-2 flex items-center pb-2 pt-12 md:pt-24'
        >
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2 md:pt-0'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] '>
                        About Us
                    </p>
                    <p className='py-2 text-gray-600'>
                        We are a family owned business with 35 years of
                        experience in serving Northern New Jersey. Our
                        specializations include the installation of siding,
                        windows, gutters, doors, trim, decks, and garage doors.
                        We also specialize in siding repairs and trim repairs.
                        Our attention to detail, cleanliness, professionalism,
                        and ensuring satisfied customers are left with a job
                        well done are among GLF Siding’s top priorities! You can
                        contact us if you have any questions or would like a
                        free estimate.
                    </p>
                    <p className='py-2 text-gray-600'>
                        I started web developement in 2013 managing multiple
                        e-commerce websites on CMS platforms such as WordPress,
                        BigCommerce, and Shopify. I have experience working
                        directly with clients and taking mock wireframes all the
                        way to deployed applications. In my spare time I run
                        Code Commerce, a Youtube channel where I teach web
                        developement and various front-end technologies.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;
