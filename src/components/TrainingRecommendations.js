import React from "react";
import { CoursesDB } from "../constants/CoursesDB";
import { useNavigate } from "react-router-dom";

const TrainingItem = ({ training }) => {
  return (
    <div className="p-4 mb-4 border border-gray-300  rounded shadow-sm">
      <h3 className="text-sm font-bold">{training.course_title}</h3>
      <p className="text-gray-600">{training.provider}</p>
      <p className="text-sm text-gray-500">Duration: {training.duration}</p>
      <p className="text-sm text-gray-500">Level: {training.level}</p>
      <div className="mt-2">
        <p className="font-semibold text-sm ">Skills Covered:</p>
        <ul className="list-disc text-sm list-inside text-gray-700">
          {training.skills_covered.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <a
        href={training.enrollment_link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline mt-3 inline-block"
      >
        Enroll Now
      </a>
    </div>
  );
};
const TrainingRecommendations = () => {
  const navigate = useNavigate();
  const handlethis = async (e) => {
    e.preventDefault();
    navigate("/trainingrecommendations");
  };
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <div className="flex justify-between ">
        <h2 className="text-xl md:text-xl font-semibold md:font-bold text-center mb-6">
          Training Recommendations for You
        </h2>
        <button className="hidden sm:flex font-semibold" onClick={handlethis}>
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {CoursesDB.training_recommendations.map((training, index) => {
          if (index >= 3) return null;
          return (
            <TrainingItem key={training.training_id} training={training} />
          );
        })}
      </div>
    </div>
  );
};

export default TrainingRecommendations;
