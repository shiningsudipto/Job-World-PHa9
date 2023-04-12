import React from 'react';
import BannerImage from '../../assets/all-Images/banner-img.png'

const Banner = () => {
    return (
        <div className='md:px-20 bg-banner-50 '>
            <div className=' banner-section md:flex md:justify-between pt-20'>
                <div className='banner-left md:px-0 px-4'>
                    <h2 className='md:text-6xl text-4xl font-bold'>One Step <br /> Closer To Your <br /><span className='text-purple-400'>Dream Job</span></h2>
                    <p className='mt-8 md:w-2/3 w-80'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='myBtn mt-5'>Get Started</button>
                </div>
                <div className='flex justify-center'>
                    <img className='md:h-full h-60 md:mt-0 mt-8' src={BannerImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;