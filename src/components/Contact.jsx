'use client';

import Image from 'next/legacy/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/assets/contact.jpg';
import EmailService from '@/util/emailJSservice';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <h2 className='text-2xl tracking-widest uppercase text-[#1e1c58] pl-4'>
          Contact GLF Siding
        </h2>
        <EmailService />
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Contact top */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 hidden md:visible'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <span>862-254-4566</span>
                <span>glfsiding@gmail.com</span>
                <p className='py-4'>Contact us now for a free estimate.</p>
              </div>
              <div>
                <div className='flex items-center justify-between py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <section
            id='Contact-Form'
            className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form
                action='/api/sendMail'
                method='POST'
                encType='multipart/form-data'
                onSubmit={handleSubmit}>
                <fieldset>
                  <legend>Contact GLF Siding</legend>
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label for='name' className='uppercase text-sm py-2'>
                        Name
                      </label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='text'
                        name='customer-name'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label for='phone' className='uppercase text-sm py-2'>
                        Phone Number
                      </label>
                      <input
                        className='border-2 rounded-lg p-3 flex border-gray-300'
                        type='tel'
                        name='phone'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label for='email' className='uppercase text-sm py-2'>
                      E-mail
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='email'
                      name='email'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label for='subject' className='uppercase text-sm py-2'>
                      Subject
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='subject'
                    />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label for='message' className='uppercase text-sm py-2'>
                      Message
                    </label>
                    <textarea
                      className='border-2 rounded-lg p-3 border-gray-300'
                      rows='10'
                      name='message'></textarea>
                  </div>
                  <button
                    type='submit'
                    className='w-full p-4 text-gray-300 mt-4 bg-slate-600'>
                    Send Message
                  </button>
                </fieldset>
              </form>
            </div>
          </section>
        </div>

        {/* To top button */}
        <div className='flex justify-center py-12'>
          <Link href='/' className='fixed bottom-6 left-8'>
            <div className='rounded-full shadow-lg shadow-gray-800 bg-slate-200 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch('/api/sendMail', {
    method: 'POST',
    body: formData,
  });
  if (response.status === 200) {
    alert('Email sent successfully');
  } else {
    alert('Error sending email');
  }
};

export default Contact;
