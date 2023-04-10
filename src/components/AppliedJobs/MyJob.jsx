import React from 'react';
import { Link } from 'react-router-dom';

const MyJob = ({ myJob }) => {
    const { company_logo, company_name, job_title, location, salary, id, remote_or_onsite } = myJob;
    return (
        <div className='flex items-center my-9 border-gray-200 rounded-lg border p-4'>
            <img src={company_logo} className='w-48 bg-banner-50 py-14 rounded-md' alt="" />
            <div className='flex-grow ms-8'>
                <h3>{job_title}</h3>
                <p>{company_name}</p>
                <button className='btn'>{remote_or_onsite}</button>
                <div>
                    <p>(icon){location}</p>
                    <p>(icon)Salary: {salary}</p>
                </div>
            </div>
            <button className='btn'><Link to={`/jobDetails/${id}`}> View Details</Link></button>
        </div>
    );
};

export default MyJob;