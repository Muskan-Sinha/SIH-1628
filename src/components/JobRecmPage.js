import React from 'react';
import { JobDB } from '../constants/JobDB'
const JobItem = ({ job }) => {
    return (
        <div className="p-4 mb-4 border rounded shadow-sm m-1">
            <h3 className="text-lg md:text-xl font-medium">{job.job_title}</h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm text-gray-500">Type: {job.employment_type}</p>
            <p className="text-sm text-gray-500">Experience Level: {job.experience_level}</p>
            <p className="text-sm text-gray-500">Posted Date:{job.posted_date}</p>
            <div className="mt-2">
                <p className="font-medium">Skills Required:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {job.skills_required.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const JobRecmPage = () => {
    return (
        <div className="max-w-5xl mx-auto mt-32 p-4 bg-white rounded shadow">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-center border p-3 border-slate-400 shadow-md mb-6">Job Recommendations for You</h2>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {JobDB.job_recommendations.map((job, index) => (
                    <JobItem key={job.job_id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default JobRecmPage;
