import JobRecm from "./JobRecm"
import UserSkills from "./UserSkills"

const MiddleComp = () => {
    return (
        <div>
            <hr className='text-[#908686]' />
            <ul className="grid grid-cols-1 text-white md:grid-cols-2 mx-6 font-medium">
                <li className="bg-[#688a84] p-3 rounded-md text-center m-4">Take Competency test</li>
                <li className="bg-[#688a84] p-3 rounded-md text-center m-4">Update skills</li>
                <li className="bg-[#688a84] p-3 rounded-md text-center m-4">Certify your skills</li>
                <li className="bg-[#688a84] p-3 rounded-md text-center m-4">Build Resume</li>
            </ul>
            <hr className='text-[#908686]' />
            <JobRecm />
            <UserSkills />
        </div>
    )
}

export default MiddleComp