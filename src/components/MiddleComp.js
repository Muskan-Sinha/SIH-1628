import { useNavigate } from "react-router-dom"
import JobRecm from "./JobRecm"
import TrainingRecommendations from "./TrainingRecommendations"
import UserSkills from "./UserSkills"

const MiddleComp = () => {
    const navigate = useNavigate();
    const handleResume = (e) => {
        e.preventDefault()
        navigate("/resumebuilder")
    }
    return (
        <div className="mt-32">
            <hr className='text-[#908686]' />
            <ul className="grid grid-cols-1 text-white md:grid-cols-2 mx-6 font-medium">
                <li className="bg-[#4b7a73] p-3 rounded-md text-center m-4">Take Competency test</li>
                <li className="bg-[#4b7a73] p-3 rounded-md text-center m-4">Update skills</li>
                <li className="bg-[#4b7a73] p-3 rounded-md text-center m-4">Certify your skills</li>
                <li onClick={handleResume} className="bg-[#4b7a73] p-3 rounded-md text-center m-4">Build Resume</li>
            </ul>
            <hr className='text-[#908686]' />
            <JobRecm />
            <UserSkills />
            <TrainingRecommendations/>
        </div>
    )
}

export default MiddleComp