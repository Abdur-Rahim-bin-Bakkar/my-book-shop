import React from 'react';
import heroImg from '../../assets/hero_img.jpg'

const Hero = () => {
    return (
        <div className="hero bg-[#f3f3f3] rounded-2xl mt-10 py-15 md:px-8">
            <div className="hero-content flex-col lg:flex-row-reverse gap-5">
                <div className=" flex-1">
                    <img
                        src={heroImg}
                        className="max-w-[80%] mx-auto rounded-lg shadow-2xl bg-transparent"
                    />
                </div>
                <div className='flex-1 text-center  md:text-start p-5 space-y-10'>
                    <h1 className="text-5xl font-bold play">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn bg-[#23BE0A] text-white font-bold work">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;