import { FaRegUser } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <div className="">
            <div className="flex justify-between">
                <p className="p-2 ml-4 sm:ml-10 text-2xl font-semibold">LOGO.</p>
                <div className="flex">
                <p className="p-2 text-2xl md:mr-12"><FaRegUser/></p>
                <p className="sm:hidden right-0 top"><Sidebar/></p>
                </div>
            </div>
            <hr />
            <div className="flex justify-around  bg-[#BEE0DA]">
                <p className="p-3">Training</p>
                <p className="p-3">Skill Verification</p>
                <p className="p-3">Resume Builder</p>
                <p className="p-1 sm:p-3">Job Recommendation</p>
            </div>
        </div>
    )
}

export default Navbar