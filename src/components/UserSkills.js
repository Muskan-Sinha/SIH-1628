import React from 'react';
import { SkillDB } from "../constants/SkillDB"
import { FaPlus } from "react-icons/fa6";


const SkillItem = ({ skill }) => {
  return (
    <div className={`p-4 border-b flex justify-between items-center ${skill.verified ? 'bg-green-100' : 'bg-white'}`}>
      <div>
        <p className="font-medium">{skill.skill_name}</p>
        <p className="text-sm text-gray-600"><span className='hidden sm:flex'>Level: </span>{skill.level}</p>
      </div>
      {skill.verified && (
        <div className="text-sm text-green-700 font-semibold">
          Verified
        </div>
      )}
    </div>
  );
};

const UserSkills = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <div className='flex justify-between'>
      <h2 className="font-bold mb-2 text-xl">{SkillDB.name} Skills</h2>
      <div className='flex bg-green-800 m-2 text-white px-2 rounded-md'>
      <p className='py-4 px-1'><FaPlus/></p>
      <button className=''>Add skills</button>
      </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {SkillDB.skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default UserSkills;
