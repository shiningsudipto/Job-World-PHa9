import React, { useEffect, useState } from 'react';
import JobList from './JobList';


const JobCategory = () => {
    const [jobCategories, setJobCategories] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategories(data))
    }, [])
    console.log(jobCategories);
    return (
        <div className='container mx-auto my-20 md:px-20 bg-white text-black'>
            <div className='text-center'>
                <h2 className='md:text-6xl text-4xl font-bold mb-6'>Job Category List</h2>
                <p className='mb-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='job-categories flex md:justify-between '>
                {
                    jobCategories.map(jobCategory => <JobList
                        key={jobCategory.id}
                        jobCategory={jobCategory}
                    ></JobList>)
                }
            </div>
        </div>
    );
};

export default JobCategory;