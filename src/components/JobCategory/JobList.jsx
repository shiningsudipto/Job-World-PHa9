import React from 'react';

const JobList = ({ jobCategory }) => {
    const { image, category, jobs_available } = jobCategory;
    return (
        <div className="card w-60 bg-banner-50 shadow-xl mb-5">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-20" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category}</h2>
                <p><small>{jobs_available}</small></p>
                <div className="card-actions">
                </div>
            </div>
        </div>

    );
};

export default JobList;