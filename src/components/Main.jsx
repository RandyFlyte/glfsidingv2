import React from "react";

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        We at{" "}
                        <span className='py-4 text-gray=700'>
                            GLF Siding Specialize in Siding, Windows, and Doors!
                        </span>
                    </p>
                    <h1>Get a free estimate now!</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;
