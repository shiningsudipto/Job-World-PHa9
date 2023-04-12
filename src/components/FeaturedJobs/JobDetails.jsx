import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalStorage } from '../../storeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFileText } from '@fortawesome/free-solid-svg-icons'
// import { faEmail } from '@fortawesome/free-solid-svg-icons'


const JobDetails = () => {
    const JobDetails = useLoaderData();
    let { jobId } = useParams();
    const singleJobDetaile = JobDetails.find(data => data.id == jobId)
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, location, contact_information } = singleJobDetaile;
    return (
        <div className='container mx-auto my-12 flex md:flex-row flex-col md:px-0 px-4'>
            <div className='md:me-10'>
                <p className='py-3'><span className='font-bold'> Job Description: </span> {job_description}</p>
                <p className='py-3'><span className='font-bold'> Job Responsibility: </span> {job_responsibility}</p>
                <p className='font-bold py-3'>Educational Requirements:</p> <p>{educational_requirements}</p>
                <p className='py-3'><span className='font-bold'>Experiences:</span></p> <p>{experiences}</p>
            </div>
            <div>
                <div className='p-5 bg-banner-50 md:w-96 md:mt-0 mt-8'>
                    <h4 className='py-6 font-bold text-xl'>Job Details</h4>
                    <hr className='mb-4' />
                    <p className='py-2'><FontAwesomeIcon icon={faDollarSign} /><b> Salary: </b>{salary}</p>
                    <p className='py-2'><FontAwesomeIcon icon={faFileText} /> <b>Job Title: </b>{job_title}</p>
                    <h4 className='py-6 font-bold text-xl'>Contact Information</h4>
                    <hr className='mb-4' />
                    <p className='py-2'><FontAwesomeIcon icon={faPhone} /><b> Phone:</b>{contact_information.phone}</p>
                    <p className='py-2' ><b> Email:</b>{contact_information.email}</p>
                    <p className='py-2'><FontAwesomeIcon icon={faLocationDot} /> <b>Address:</b>{location}</p>
                </div>
                <button onClick={() => addToLocalStorage(singleJobDetaile)} className='btn mt-4'>Apply Now</button>
            </div>
        </div>
    )
}

export default JobDetails;