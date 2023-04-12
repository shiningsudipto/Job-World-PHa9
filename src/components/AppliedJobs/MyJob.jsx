import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const MyJob = ({ myJob }) => {
    const { company_logo, company_name, job_title, location, salary, id, remote_or_onsite, fulltime_or_parttime } = myJob;
    return (
        <div className='flex items-center my-9 border-gray-200 rounded-lg border md:p-4 p-2'>
            <img src={company_logo} className='md:w-48 w-20 bg-banner-50 py-14 rounded-md' alt="" />
            <div className='flex-grow md:ms-8 ms-2'>
                <h3>{job_title}</h3>
                <p>{company_name}</p>
                <div className='flex flex-col md:flex-row'>
                    <button className='btn btn-outline border-[#7F8FFE] '>{remote_or_onsite}</button>
                    <button className='btn btn-outline border-[#7F8FFE]  md:ms-2 md:mt-0 mt-4'>{fulltime_or_parttime}</button>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faDollarSign} /> Salary: {salary}</p>
                </div>
            </div>
            <button className='myBtn md:w-32 w-20'><Link to={`/jobDetails/${id}`}> View Details</Link></button>
        </div>
    );
};

export default MyJob;