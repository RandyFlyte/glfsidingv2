"use client";

import Image from "next/legacy/image";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed w-full h-auto shadow-xl z-[90] bg-slate-200'>
            <div className='flex justify-evenly pb-0 pt-0 items-center w-full h-full px-0 2xl:px-16 flex-row'>
                <div className='flex w-auto'>
                    <div className='flex flex-col self-center basis-5 md:basis-1'>
                        <Link href='/' className=''>
                            <Image
                                src='/assets/glfLogo.png'
                                alt=''
                                width='151'
                                height='63'
                                className='pt-0 self-center'
                            />
                        </Link>
                        <Link className='flex self-center' href='/#contact'>
                            <li className='ml-2 text-sm md:text-base underline hover:text-lg self-center'>
                                Contact
                            </li>
                        </Link>
                    </div>
                    <div className='flex flex-col justify-between pr-0 md:pr-5'>
                        <div className='self-center'>
                            <Link
                                href='/#about'
                                className='visible md:hidden uppercase underline px-4 self-center'
                            >
                                About
                            </Link>
                            <Link
                                href='/#reviews'
                                className='visible md:hidden uppercase underline px-4 self-center'
                            >
                                Reviews
                            </Link>
                        </div>
                        <div className='self-center'>
                            <Link
                                href='/#projects'
                                className='visible md:hidden uppercase underline px-4 self-center'
                            >
                                Projects
                            </Link>
                            <Link
                                href='/#services'
                                className='visible md:hidden uppercase underline px-4 self-center'
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-100 md:w-full pr-2'>
                    <ul className='hidden md:flex pt-16 w-full justify-around'>
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
                        <Link href='/#services'>
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
                    <div
                        onClick={handleNav}
                        className='md:hidden w-auto cursor-pointer p-4'
                    >
                        <AiOutlineMenu size={35} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav
                        ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
                        : ""
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-2 ease-in duration-500"
                            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between pl-10'>
                            <Link onClick={handleNav} href='/'>
                                <Image
                                    src='/assets/glfLogo.png'
                                    width='87'
                                    height='35'
                                    alt='/'
                                    className='pl-10'
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <div>
                                    <AiOutlineClose />
                                </div>
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
                            <Link onClick={handleNav} href='/#services'>
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
                        <div className='pt-40 '>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let's Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                {/* <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-point hover:scale-105 ease-in duration-300'>
                                    <FaGithub />
                                </div> */}
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
        </div>
    );
};

export default Navbar;
