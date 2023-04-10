import React, { useEffect, useState } from 'react';
import Jobs from './Jobs';
// import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])
    console.log(featuredJobs);
    // const featuredJobs = useLoaderData();
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center'>
                <h2 className='text-6xl font-bold mb-6'>Featured Jobs</h2>
                <p className='mb-6'>xplore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex'>
                {
                    featuredJobs.map(jobs => <Jobs
                        key={jobs.id}
                        jobs={jobs}
                    ></Jobs>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;