import Image from "next/legacy/image";
import React from "react";
import Html from "../../public/assets/services/html.png";
import Css from "../../public/assets/services/css.png";
import Javascript from "../../public/assets/services/javascript.png";
import ReactImg from "../../public/assets/services/react.png";
import Tailwind from "../../public/assets/services/tailwind.png";
import Github from "../../public/assets/services/github1.png";
import Firebase from "../../public/assets/services/firebase.png";
import NextJS from "../../public/assets/services/nextjs.png";

const services = () => {
    return (
        <div id='services' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Services
                </p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Html}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Css}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Javascript}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>JavaScript</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={ReactImg}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Tailwind}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Firebase}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Firebase</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={Github}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={NextJS}
                                    width='64px'
                                    height='64px'
                                    alt='/'
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Next</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default services;