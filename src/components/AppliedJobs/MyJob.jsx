import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const MyJob = ({ myJob }) => {
    const { company_logo, company_name, job_title, location, salary, id, remote_or_onsite } = myJob;
    return (
        <div className='flex items-center my-9 border-gray-200 rounded-lg border p-4'>
            <img src={company_logo} className='md:w-48 w-20 bg-banner-50 py-14 rounded-md' alt="" />
            <div className='flex-grow ms-8'>
                <h3>{job_title}</h3>
                <p>{company_name}</p>
                <button className='myBtn'>{remote_or_onsite}</button>
                <div>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</p>
                </div>
            </div>
            <button className='myBtn'><Link to={`/jobDetails/${id}`}> View Details</Link></button>
        </div>
    );
};

export default MyJob;