import JobRecm from "./JobRecm"
import UserSkills from "./UserSkills"

const MiddleComp = () => {
    return (
        <div className="">
            <hr className='text-[#908686]' />
            <ul className="grid grid-cols-1 text-white md:grid-cols-2 mx-6 font-medium">
                <li className="bg-[#218f7e] p-3 rounded-md text-center m-4">Take Competency test</li>
                <li className="bg-[#218f7e] p-3 rounded-md text-center m-4">Update skills</li>
                <li className="bg-[#218f7e] p-3 rounded-md text-center m-4">Certify your skills</li>
                <li className="bg-[#218f7e] p-3 rounded-md text-center m-4">Build Resume</li>
            </ul>
            <hr className='text-[#908686]' />
            <JobRecm />
            <UserSkills />
        </div>
    )
}

export default MiddleComp