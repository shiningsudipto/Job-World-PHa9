import React from 'react';
import BannerImage from '../../assets/all-Images/banner-img.png'

const Banner = () => {
    return (
        <div className='flex justify-between bg-banner-50'>
            <div className=''>
                <h2 className='text-6xl font-bold'>One Step <br /> Closer To Your <br /><span className='text-purple-400'>Dream Job</span></h2>
                <p className='mt-8'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn mt-6'>Get Started</button>
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;