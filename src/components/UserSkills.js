import React from "react";
import { SkillDB } from "../constants/SkillDB";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SkillItem = ({ skill }) => {
  return (
    <div
      className={`py-2 rounded-md px-4  border-b text-sm  flex justify-between items-center ${
        skill.verified ? "bg-green-100" : "bg-white"
      }`}
    >
      <div>
        <p className="font-medium text-sm">{skill.skill_name}</p>
        <p className="text-sm text-gray-600">
          <span className="hidden sm:flex">Level: </span>
          {skill.level}
        </p>
      </div>
      {skill.verified && (
        <div className="text-sm text-green-700 font-semibold">Verified</div>
      )}
    </div>
  );
};

const UserSkills = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <div className="flex justify-between">
        <h2 className="font-semibold md:font-bold mb-2 text-xl">
          {SkillDB.name} Skills
        </h2>
        <div className="flex bg-[#4b7a73] text-sm items-center py-2    m-2  text-white px-2 rounded-md">
          <p className="">
            <FaPlus />
          </p>
          <button className="">Add skills</button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SkillDB.skills.map((skill, index) => (
          <Link to={"verify"}>
            <SkillItem key={index} skill={skill} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserSkills;
