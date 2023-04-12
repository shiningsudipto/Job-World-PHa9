import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const Jobs = ({ jobs }) => {
    const { company_logo, company_name, job_title, location, salary, id, remote_or_onsite, fullTime_or_partTime } = jobs;
    return (
        <div className="card shadow-xl border rounded-xl">
            <div className="px-10 pt-10">
                <img src={company_logo} alt="Shoes" className="rounded-xl h-12" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className='flex'>
                    <button className='btn btn-outline border-[#7F8FFE]'>{remote_or_onsite}</button>
                    <button className='btn btn-outline border-[#7F8FFE] ms-4'>{fullTime_or_partTime}</button>
                </div>
                <div className='flex'>
                    <p> <FontAwesomeIcon icon={faLocationDot} /> {location}</p>
                    <p><FontAwesomeIcon icon={faCircleDollarToSlot} /> {salary}</p>
                </div>
                <div className="card-actions w-full">
                    <button className="myBtn"> <Link to={`/jobDetails/${id}`} > View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;