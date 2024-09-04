import React from 'react';
import {SkillDB} from "../constants/SkillDB"

// Skill item component
const SkillItem = ({ skill }) => {
  return (
    <div className={`p-4 border-b flex justify-between items-center ${skill.verified ? 'bg-green-100' : 'bg-white'}`}>
      <div>
        <p className="font-medium">{skill.skill_name}</p>
        <p className="text-sm text-gray-600">Level: {skill.level}</p>
      </div>
      {skill.verified && (
        <div className="text-sm text-green-700 font-semibold">
          Verified
        </div>
      )}
    </div>
  );
};

// Main skills display component
const UserSkills = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="font-bold text-center mb-4 text-xl">{SkillDB.name} Skills</h2>
      <div className='grid grid-cols-3 gap-4'>
        {SkillDB.skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default UserSkills;
