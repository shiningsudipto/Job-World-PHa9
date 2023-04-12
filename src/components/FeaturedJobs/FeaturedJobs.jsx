import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [showAllJobs, setShowAllJobs] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data.slice(0, 4)));
    }, []);

    const handleSeeMoreClick = () => {
        setShowAllJobs(true);
        fetch('jobs.json')
            .then((res) => res.json())
            .then((data) => setFeaturedJobs(data));
    };
    return (
        <div className='container mx-auto md:px-20 my-20 bg-white text-black'>
            <div className='text-center'>
                <h2 className='md:text-6xl text-4xl font-bold mb-6'>Featured Jobs</h2>
                <p className='mb-6'>xplore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid  md:grid-cols-2 gap-10 '>
                {
                    featuredJobs.map(jobs => <Jobs
                        key={jobs.id}
                        jobs={jobs}
                    ></Jobs>)
                }
            </div>
            <div className='flex justify-center my-10'>
                {!showAllJobs && (
                    <button className='myBtn' onClick={handleSeeMoreClick}>See More</button>
                )}
            </div>

        </div>
    );
};

export default FeaturedJobs;