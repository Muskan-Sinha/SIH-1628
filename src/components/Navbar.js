import { FaRegUser } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className="">
            <div className="flex justify-between bg-white">
                <p className="p-3 ml-4 sm:ml-10 text-2xl font-semibold">CareerAlly</p>
                <div className="flex">
                    <p className="p-3 text-2xl md:mr-16 hover:cursor-pointer"><FaRegUser /></p>
                    <p className="sm:hidden right-0 "><Sidebar /></p>
                </div>
            </div>
            <hr />
            <div className="flex justify-around text-white bg-[#688a84] ">
                <p className="p-3 hover:bg-[#EAFFFC] rounded-md hover:px-6 hover:cursor-pointer">Training</p>
                <p className="p-3 hidden sm:flex hover:bg-[#EAFFFC] rounded-md hover:px-6 hover:cursor-pointer">Skill Verification</p>
                <p className="p-3 hover:bg-[#EAFFFC] rounded-md hover:px-6 hover:cursor-pointer">Resume Builder</p>
                <p className="p-3 hover:bg-[#EAFFFC] rounded-md hover:px-6 hover:cursor-pointer">Job Recommendation</p>
            </div>
        </div>
    )
}

export default Navbar