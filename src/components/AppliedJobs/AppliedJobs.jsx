import React, { useEffect, useState } from 'react';
import MyJob from './MyJob';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const AppliedJobs = () => {

    const [jobDetails, setJobDetails] = useState([]);
    console.log(jobDetails);

    useEffect(() => {
        const existingData = localStorage.getItem("jobDetails");

        if (existingData) {
            const parsedData = JSON.parse(existingData);
            setJobDetails(parsedData);
        }
    }, []);

    const handleAppliedJobsByRemote = (filterC) => {
        const existingData = localStorage.getItem("jobDetails");
        if (existingData) {
            const parsedData = JSON.parse(existingData);
            const filteredData = parsedData.filter(job => job.remote_or_onsite === filterC);
            setJobDetails(filteredData);
        }
    }

    return (
        <div className='container mx-auto bg-white text-black'>
            <div className='text-end'>
                <div className="dropdown">
                    <label tabIndex={0} className="myBtn md:me-6 mt-8">Filter by  <FontAwesomeIcon className='ms-2' icon={faCaretDown} /></label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
                        <li><button className='border border-purple-600' onClick={() => handleAppliedJobsByRemote('Onsite')}>Show Onsite Jobs</button></li>
                        <li><button className='border border-purple-600 mt-3' onClick={() => handleAppliedJobsByRemote('Remote')}>Show Remote Jobs</button></li>
                    </ul>
                </div>
            </div>
            <div>
                {
                    jobDetails.map(myJob => <MyJob
                        key={myJob.id}
                        myJob={myJob}
                    ></MyJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;