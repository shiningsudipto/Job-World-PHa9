import React, { useEffect, useState } from 'react';
import MyJob from './MyJob';

const AppliedJobs = () => {

    const [jobDetails, setJobDetails] = useState([]);

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
        <div className='container mx-auto'>
            <div className='text-end'>
                <div className="dropdown">
                    <label tabIndex={0} className="btn me-8">Click</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                        <li><button onClick={() => handleAppliedJobsByRemote('Onsite')}>Onsite</button></li>
                        <li><button onClick={() => handleAppliedJobsByRemote('Remote')}>Remote</button></li>
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