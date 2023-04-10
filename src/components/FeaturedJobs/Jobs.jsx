import React from 'react';
import { Link } from 'react-router-dom';

const Jobs = ({ jobs }) => {
    const { company_logo, company_name, job_title, location, salary, id } = jobs;
    return (
        <div className="card w-8/12 shadow-xl">
            <div className="px-10 pt-10">
                <img src={company_logo} alt="Shoes" className="rounded-xl h-12" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex'>
                    <button className='btn'>Remote</button>
                    <button className='btn'>Full Time</button>
                </div>
                <div className='flex'>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                    <button className="btn btn-primary"> <Link to={`/jobDetails/${id}`}> View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;