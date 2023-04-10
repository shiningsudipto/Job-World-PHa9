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

    console.log(jobDetails);

    return (
        <div className='container mx-auto'>
            {
                jobDetails.map(myJob => <MyJob
                    key={myJob.id}
                    myJob={myJob}
                ></MyJob>)
            }
        </div>
    );
};

export default AppliedJobs;