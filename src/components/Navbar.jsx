'use client';

import Image from 'next/legacy/image';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav
            id='Navbar-Root'
            className='relative lg:fixed w-full h-auto shadow-xl z-[90] bg-slate-200'>
            <div
                id='Navbar-2nd-Deep'
                className='relative flex justify-evenly pb-0 pt-2 md:items-center w-full h-full px-0 2xl:pr-16 flex-row'>
                <section
                    id='Navbar-Logo-and-Contact-Link'
                    className='md:flex md:grow md:w-auto'>
                    <div
                        id='Logo-Contact'
                        className='flex flex-col self-center basis-1 md:basis-1 items-center'>
                        <Link href='/' className=''>
                            <Image
                                src='/assets/glfLogo.png'
                                alt='GLF Siding Logo'
                                width='151'
                                height='63'
                                className='pt-0 self-center'
                            />
                        </Link>
                        <Link className='flex self-center' href='/#contact'>
                            <span className='ml-2 text-sm md:text-base underline hover:text-lg self-center pb-4'>
                                Contact <span className='self-center'>GLF</span>
                            </span>
                        </Link>
                    </div>
                </section>

                <div
                    id='Navbar-Links-Title-and-Mobile-Menu'
                    className='w-64 md:w-full flex h-auto lg:h-20 flex-col relative lg:fixed'>
                    {/* Top Navbar Links */}
                    <div
                        id='Navbar-Links'
                        className='flex flex-col flex-end gap-2 pr-0 md:pr-5 basis-1 pt-12'>
                        <section
                            id='Navbar-Links--About-Us-and-Reviews'
                            className='self-center'>
                            <Link
                                href='/#about'
                                className='visible md:hidden uppercase underline px-4 self-center'>
                                About Us
                            </Link>
                            <Link
                                href='/#reviews'
                                className='visible md:hidden uppercase underline px-4 self-center'>
                                Reviews
                            </Link>
                        </section>
                        <section
                            id='Navbar-Links--Services-and-Projects'
                            className='self-center'>
                            <Link
                                href='/#Services'
                                className='visible md:hidden uppercase underline px-4 self-center'>
                                Services
                            </Link>
                            <Link
                                href='/#projects'
                                className='visible md:hidden uppercase underline px-4 self-center'>
                                Projects
                            </Link>
                        </section>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        {/* Main Title */}
                        <h1
                            id='Main-Title'
                            className='relative self-end lg:fixed pr-7 text-center text-slate-700 text-2xl'
                            style={{ marginTop: '0px' }}></h1>
                    </div>

                    {/* Navbar Links - Medium-size+ */}
                    <ul className='hidden md:flex md:fixed md:pt-0 pt-10 lg:pt-5 w-full justify-around pb-5'>
                        <Link href='/'>
                            <li className='ml-10 text-base uppercase underline hover:text-lg'>
                                Home
                            </li>
                        </Link>
                        <Link href='/#about'>
                            <li className='ml-10 text-base uppercase underline hover:text-lg self-center'>
                                About
                            </li>
                        </Link>
                        <Link href='/#Services'>
                            <li className='ml-10 text-base uppercase underline hover:text-lg self-center'>
                                Services
                            </li>
                        </Link>
                        <Link href='/#projects'>
                            <li className='ml-10 text-base uppercase underline hover:text-lg self-center'>
                                Projects
                            </li>
                        </Link>
                        <Link href='/#reviews'>
                            <li className='ml-10 text-base uppercase underline hover:text-lg self-center'>
                                Reviews
                            </li>
                        </Link>
                        <Link href='/#contact'>
                            <li className='ml-10 text-base uppercase underline hover:text-lg self-center'>
                                Contact
                            </li>
                        </Link>
                    </ul>

                    {/* Hamburger Menu Button */}
                    <div
                        id='Hamburger-Menu'
                        onClick={handleNav}
                        className='fixed md:hidden w-16 cursor-pointer ml-48 pt-0'>
                        <AiOutlineMenu size={45} aria-label='Sidebar menu' />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                id='Mobile-Menu-Overlay'
                className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80'
                        : ''
                }>
                {/* Side Drawer Menu */}
                <div
                    id='Side-Drawer-Menu'
                    className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-2 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }>
                    <div>
                        <div className='flex w-full items-center justify-between pl-1 pr-2'>
                            <Link onClick={handleNav} href='/'>
                                <Image
                                    src='/assets/glfLogo.png'
                                    width='87'
                                    height='35'
                                    alt='/'
                                    className='pl-1'
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 cursor-pointer'>
                                <AiOutlineClose fill='black' size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-2'>
                            <p className='w-[98%] md:w-[90%] py-1 text-lg flex flex-col place-items-center'>
                                <span className='text-2xl self-center'>
                                    GLF Siding
                                </span>
                                <br />
                                Windows•Doors•Repairs
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Nav Links List */}
                    <div className='py-2 flex flex-col bg-slate-300'>
                        <ul className='uppercase'>
                            <Link onClick={handleNav} href='/'>
                                <li className='py-4 text-base hover:text-lg'>
                                    Home
                                </li>
                            </Link>
                            <Link onClick={handleNav} href='/#about'>
                                <li className='py-4 text-base hover:text-lg'>
                                    About
                                </li>
                            </Link>
                            <Link onClick={handleNav} href='/#Services'>
                                <li className='py-4 text-base hover:text-lg'>
                                    Services
                                </li>
                            </Link>
                            <Link onClick={handleNav} href='/#projects'>
                                <li className='py-4 text-base hover:text-lg'>
                                    Projects
                                </li>
                            </Link>
                            <Link onClick={handleNav} href='/#reviews'>
                                <li className='py-4 text-base hover:text-lg'>
                                    Reviews
                                </li>
                            </Link>
                            <Link onClick={handleNav} href='/#contact'>
                                <li className='py-4 text-base hover:text-lg'>
                                    Contact
                                </li>
                            </Link>
                        </ul>

                        <div className='pt-40'>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
