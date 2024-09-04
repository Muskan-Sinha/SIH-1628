import { UserDB } from "../constants/UserDB"
import { FaFile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
const UserProfile = () => {
    return (
        <div>
        <div className="border flex flex-col items-center">
            <div className="flex justify-between">
                <p className="text-4xl font-semibold uppercase p-6"> {UserDB.name}</p>
                <p className="p-9 text-2xl"><FaUserAlt /></p>
            </div>
            <div className="p-4 text-sm text-gray-500">
                <div className="flex gap-1">
                    <p className="p-1"><MdEmail /></p>
                    <p>{UserDB.email}</p>
                </div>
                <div className="flex gap-1">
                    <p className="p-1"><FaPhoneAlt /></p>
                    <p>{UserDB.phone}</p>
                </div>
                <div className="flex gap-1">
                    <p className="p-1"><IoLocationSharp /></p>
                    <p>{UserDB.location}</p>

                </div>
            </div>
            </div>
            <div>
                <p className="text-lg">Resume</p>
                <div className="">
                    <p className="text-gray-500 text-4xl"><FaFile /></p>
                </div>
            </div>

        </div>
    )
}

export default UserProfile