import React from "react";
import { JobDB } from "../constants/JobDB";
import { useNavigate } from "react-router-dom";

const JobItem = ({ job }) => {
  return (
    <div className="p-4 mb-4 space-y-2 border border-gray-300 gap-12 rounded shadow-sm m-1">
      <div className="space-y-1">
        <div className="text-sm  flex   justify-between   md:text-sm  font-semibold ">
          <div className=""> {job.job_title}{" "}</div>
          <div className="text-xs   text-gray-500">{job.posted_date}</div>
        </div>
        <p className="text-gray-600 text-sm ">
          {job.company} - {job.location}
        </p>
        <p className="text-sm text-gray-500">Type: {job.employment_type}</p>
        <p className="text-sm text-gray-500">
          Experience Level: {job.experience_level}
        </p>
      </div>

      <div className="mt-2">
        <p className="font-medium text-sm">Skills Required:</p>
        <ul className=" list-inside text-sm text-gray-700">
          {job.skills_required.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const JobRecm = () => {
  const navigate = useNavigate();
  const handlethis = async (e) => {
    e.preventDefault();
    navigate("/jobrecommendations");
  };
  return (
    <div className=" mx-auto mt-8 p-4 bg-white rounded shadow">
      <div className="flex justify-between ">
        <h2 className="text-xl md:text-xl font-semibold md:font-bold  text-center mb-6">
          Job Recommendations for You
        </h2>
        <button
          className="hidden sm:flex  text-sm font-semibold "
          onClick={handlethis}
        >
          View All
        </button>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-3 ">
        {JobDB.job_recommendations.map((job, index) => {
          if (index >= 3) return null;
          return <JobItem key={job.job_id} job={job} />;
        })}
      </div>
      <div className="flex justify-end w-full">
        <button className="sm:hidden text-blue-600" onClick={handlethis}>
          View All
        </button>
      </div>
    </div>
  );
};

export default JobRecm;
