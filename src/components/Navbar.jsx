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
      className='relative w-full h-auto shadow-xl z-[90] bg-[url("/assets/services/NiceGarageWhite.png")]
        bg-cover'>
      <div
        id='Navbar-2nd-Deep'
        className='relative flex justify-between pb-0 md:items-center w-full h-full px-0 2xl:pr-16 flex-row'>
        <section
          id='Navbar-Logo-and-Contact-Link'
          className='md:flex md:grow md:w-auto hover:scale-110 bg-slate-800'>
          <div
            id='Logo-Contact'
            className='hover:translate-x-4 hover:translate-y-2 bg-slate-800 outline-dashed outline-4 outline-amber-900 outline-slate-850 flex flex-col self-center transition-all duration-1000 ease-in-out hover:shadow-5xl hover:rounded-2xl hover:mt-2 hover:ml-2 items-center'>
            <Link
              href='/'
              className='border-slate-800 transition-all duration-1000 ease-in-out hover:px-2 hover:scale-110 m-1 hover:m-2'>
              {/* GLF Logo */}
              <Image
                src='/assets/services/GLFLogo.png'
                alt='GLF Siding Logo'
                width='110'
                height='110'
                className='h-auto rounded-[3rem] transition-all duration-1000 ease-in-out hover:animate-pulse hover:scale-110  hover:rounded-[2rem] hover:shadow-2xl
                           '
              />
            </Link>

            <Link className='flex self-center' href='/#contact'>
              <span className='text-slate-200 p-1 pt-0 bg-slate-900 rounded-xl ml-1 mb-1 text-sm md:text-base hover:text-lg self-center pb-0'>
                Contact
              </span>
            </Link>
          </div>
        </section>

        <div
          id='Navbar-Links-Title-and-Mobile-Menu'
          className='w-64 md:w-full lg:ml-80 flex h-auto flex-col relative lg:fixed'>
          {/* Top Navbar Links */}
          <div
            id='Navbar-Links'
            className='flex flex-col flex-end gap-2 pr-12 md:pr-5 basis-1 pt-8'>
            <section
              id='Navbar-Links--About-Us-and-Reviews'
              className='self-center flex'>
              <Link
                href='/#about'
                className='visible md:hidden self-center p-1 text-slate-200 bg-sky-950 rounded-lg'>
                About Us
              </Link>
              <Link
                href='/#reviews'
                className='visible md:hidden p-1 ml-4 self-center text-slate-200 bg-sky-950 rounded-lg'>
                Reviews
              </Link>
            </section>
            <section
              id='Navbar-Links--Services-and-Projects'
              className='self-center flex mt-4'>
              <Link
                href='/#Services'
                className='visible md:hidden p-1 self-center text-slate-200 bg-sky-950 rounded-lg'>
                Services
              </Link>
              <Link
                href='/#projects'
                className='visible md:hidden p-1 ml-4 self-center text-slate-200 bg-sky-950 rounded-lg'>
                Projects
              </Link>
            </section>
          </div>

          {/* Navbar Links - Medium-size+ */}
          <ul className='hidden text-slate-200 md:flex md:fixed w-auto justify-start gap-2 lg:gap-6 xl:gap-12'>
            <Link href='/'>
              <li className='p-2 ml-10 text-base uppercase underline hover:text-lg bg-sky-950 rounded-lg'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li
                className='p-2 ml-10 text-base uppercase underline hover:text-lg self-center bg-sky-950 rounded-lg
              '>
                About
              </li>
            </Link>
            <Link href='/#Services'>
              <li
                className='p-2 ml-10 text-base uppercase underline hover:text-lg self-center bg-sky-950 rounded-lg
              '>
                Services
              </li>
            </Link>
            <Link href='/#projects'>
              <li
                className='p-2 ml-10 text-base uppercase underline hover:text-lg self-center bg-sky-950 rounded-lg
              '>
                Projects
              </li>
            </Link>
            <Link href='/#reviews'>
              <li
                className='p-2 ml-10 text-base uppercase underline hover:text-lg self-center bg-sky-950 rounded-lg
              '>
                Reviews
              </li>
            </Link>
            <Link href='/#contact'>
              <li
                className='p-2 ml-10 text-base uppercase underline hover:text-lg self-center bg-sky-950 rounded-lg
              '>
                Contact
              </li>
            </Link>
          </ul>

          {/* Hamburger Menu Button */}
          <div
            id='Hamburger-Menu'
            onClick={handleNav}
            className='fixed md:hidden w-auto h-auto self-end cursor-pointer mt-1 mr-1 bg-orange-700/80
                        rounded-lg'>
            <AiOutlineMenu size={45} aria-label='Sidebar menu' />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        id='Mobile-Menu-Overlay'
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen' : ''}>
        {/* Side Drawer Menu */}
        <div
          id='Side-Drawer-Menu'
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#5c6d7a] ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between bg-slate-800'>
              <Link onClick={handleNav} href='/'>
                <Image
                  src='/assets/services/glfLogo.png'
                  width='90'
                  height='90'
                  alt='/'
                  className='transition ease-in-out duration-300 hover:scale-110'
                />
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-slate-950 cursor-pointer mr-3 mb-9 outline-dotted outline-3 outline-stone-900'>
                <AiOutlineClose fill='darkorange' size={35} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-2'>
              <p className='w-[98%] md:w-[90%] py-1 text-lg flex flex-col place-items-center'>
                <span className='text-2xl self-center'>GLF Siding</span>
                <br />
                Windows•Doors•Repairs
              </p>
            </div>
          </div>

          {/* Sidebar Nav Links List */}
          <div className='py-2 flex flex-col ml-2 pl-2 bg-slate-300'>
            <ul className='uppercase'>
              <Link onClick={handleNav} href='/'>
                <li className='py-4 text-base hover:text-lg'>Home</li>
              </Link>
              <Link onClick={handleNav} href='/#about'>
                <li className='py-4 text-base hover:text-lg'>About</li>
              </Link>
              <Link onClick={handleNav} href='/#Services'>
                <li className='py-4 text-base hover:text-lg'>Services</li>
              </Link>
              <Link onClick={handleNav} href='/#projects'>
                <li className='py-4 text-base hover:text-lg'>Projects</li>
              </Link>
              <Link onClick={handleNav} href='/#reviews'>
                <li className='py-4 text-base hover:text-lg'>Reviews</li>
              </Link>
              <Link onClick={handleNav} href='/#contact'>
                <li className='py-4 text-base hover:text-lg'>Contact</li>
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
