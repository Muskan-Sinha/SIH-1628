import React from 'react';
import { CoursesDB } from '../constants/CoursesDB';

const TrainingItem = ({ training }) => {
    return (
        <div className="p-4 mb-4 border rounded shadow-sm">
            <h3 className="text-xl font-bold">{training.course_title}</h3>
            <p className="text-gray-600">{training.provider}</p>
            <p className="text-sm text-gray-500">Duration: {training.duration}</p>
            <p className="text-sm text-gray-500">Level: {training.level}</p>
            <div className="mt-2">
                <p className="font-semibold">Skills Covered:</p>
                <ul className="list-disc list-inside text-gray-700">
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
const TrainingRecomms = () => {
    return (
        <div className="max-w-5xl mx-auto mt-32 p-4 bg-white rounded shadow">
            <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-center border p-3 border-slate-400 shadow-md mb-6">Training Recommendations for You</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
                {CoursesDB.training_recommendations.map((training, index) => (
                    <TrainingItem key={training.training_id} training={training} />)
                )}
            </div>
        </div>
    );
};

export default TrainingRecomms;
