import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToLocalStorage } from '../../storeData';


const JobDetails = () => {
    const JobDetails = useLoaderData();
    let { jobId } = useParams();
    // console.log(jobId);
    // console.log(JobDetails);
    const singleJobDetaile = JobDetails.find(data => data.id == jobId)
    // console.log(singleJobDetaile);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, location, contact_information } = singleJobDetaile;
    return (
        <div className='container mx-auto my-12 flex'>
            <div className='md:me-10'>
                <p className='py-3'><span className='font-bold'> Job Description: </span> {job_description}</p>
                <p className='py-3'><span className='font-bold'> Job Responsibility: </span> {job_responsibility}</p>
                <p className='font-bold py-3'>Educational Requirements:</p> <p>{job_responsibility}</p>
                <p className='py-3'><span className='font-bold'>Experiences:</span></p> <p>{experiences}</p>
            </div>
            <div>
                <div className='p-5 bg-banner-50 md:w-96'>
                    <h4 className='py-6 font-bold text-xl'>Job Details</h4>
                    <hr className='mb-4' />
                    <p className='py-2'>(icon)<b>Salary: </b>{salary}</p>
                    <p className='py-2'>(icon)<b>Job Title: </b>{job_title}</p>
                    <h4 className='py-6 font-bold text-xl'>Contact Information</h4>
                    <hr className='mb-4' />
                    <p className='py-2'>(icon)<b>Phone:</b>{contact_information.phone}</p>
                    <p className='py-2'>(icon)<b>Email:</b>{contact_information.email}</p>
                    <p className='py-2'>(icon)<b>Address:</b>{location}</p>
                </div>
                <button onClick={() => addToLocalStorage(singleJobDetaile)} className='btn mt-4'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;