import React from 'react';
import { JobDB } from '../constants/JobDB'
import { useNavigate } from 'react-router-dom';

const JobItem = ({ job }) => {
    return (
        <div className="p-4 mb-4 border rounded shadow-sm m-1">
            <h3 className="text-lg md:text-xl font-medium">{job.job_title} <span className="text-xs text-gray-500">{job.posted_date}</span></h3>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm text-gray-500">Type: {job.employment_type}</p>
            <p className="text-sm text-gray-500">Experience Level: {job.experience_level}</p>
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
const JobRecm = () => {
    const navigate = useNavigate()
    const handlethis = async (e) => {
        e.preventDefault();
        navigate("/jobrecommendations")
    }
    return (
        <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded shadow">
            <div className="flex justify-between ">
                <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-center mb-6">Job Recommendations for You</h2>
                <button className="hidden sm:flex" onClick={handlethis}>View All</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {JobDB.job_recommendations.map((job, index) => {
                    if (index >= 2) return null;
                    return (
                        <JobItem key={job.job_id} job={job} />)
                })}
            </div>
            <div className='flex justify-end w-full'>
            <button className="sm:hidden text-blue-600" onClick={handlethis}>View All</button>
            </div>
        </div>
    );
};

export default JobRecm;
