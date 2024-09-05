import { FaFile, FaPhoneAlt, FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { IoLocationSharp } from "react-icons/io5";
import { SkillDB } from "../constants/SkillDB";

const SkillItem = ({ skill }) => {
    return (
        <div>
            <li className="text-sm">{skill.skill_name}</li>
            <p className="text-xs px-5 text-gray-600">
                {skill.level}
            </p>
        </div>
    );
};


const UserProfile = () => {
    return (
        <div className="md:mt-44 mb-20 mt-36 mx-auto max-w-2xl rounded shadow-lg">
            <div className="text-2xl md:text-4xl flex font-semibold justify-between p-2 px-5">
                <p className="">SHREYA KALRA</p>
                <p className="mt-0.5"><FaUser /></p>
            </div>
            <div className="px-3 mt-4">
                <div className="flex text-gray-600">
                    <p className='my-1 p-1.5'><MdEmail /></p>
                    <p className="mt-2 text-sm">Email: kalrashreya864@gmail.com</p>
                </div>
                <div className="flex text-gray-600">
                    <p className='my-1 p-1.5'><FaPhoneAlt /></p>
                    <p className="mt-2 text-sm">Phone: +1 (111) 123-4567</p>
                </div>
                <div className="flex text-gray-600">
                    <p className="my-1 p-1.5"><IoLocationSharp /></p>
                    <p className="mt-2 text-sm">Bengaluru, In</p>
                </div>
            </div>

            <div className="p-3">
                <div className="flex justify-between">
                <p className="font-medium text-lg pb-2">Resume</p>
                <p className="text-blue-600 px-2 hover:cursor-pointer hover:text-lg">Upload New Resume</p>
                </div>
                <div className="flex border border-gray-300 p-2 rounded-sm">
                    <p className="p-1.5 text-gray-600 text-3xl"><FaFile /></p>
                    <div>
                        <p>ShreyaResume.pdf</p>
                        <p className="text-gray-600 text-xs ">Added jul 8,2024</p>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <div className="flex justify-between">
                    <p className="font-semibold pb-2 text-lg">Skills</p>
                    <p className="text-blue-600 px-2 hover:cursor-pointer hover:text-lg">Edit Skills</p>
                </div>
                <div className="list-disc list-inside grid grid-cols-2 border border-gray-300 p-2 md:grid-cols-3 gap-4">
                    {SkillDB.skills.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            </div>
            <div className="flex justify-end px-3">
                <button className="bg-[#4b7a73] p-2 mb-3 rounded-md text-white">Edit Profile</button>
            </div>
        </div>
    )
}

export default UserProfile