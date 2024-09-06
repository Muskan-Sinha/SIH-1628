import { FaRegUser } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import img from "../asset/Screenshot 2024-09-06 083106.png"

const Navbar = () => {

  const navigate = useNavigate()
  const handleTraining = (e) => {
    e.preventDefault();
    navigate("/trainingrecommendations")
  }
  const handleJob = (e) => {
    e.preventDefault();
    navigate("/jobrecommendations")
  }

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/")
  }

  const handleProfile = (e) => {
    e.preventDefault();
    navigate("/userprofile")
  }

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/verify")
  }

  return (
    <div className="">
      <div className="flex justify-between bg-white items-center">
        <img src={img} className="w-36 h-12 ml-10" alt="" />
        <div className="flex">
          <p onClick={handleProfile} className="p-3 text-2xl md:mr-16 hover:cursor-pointer">
            <FaRegUser />
          </p>
          <p className="sm:hidden right-0 ">
            <Sidebar />
          </p>
        </div>
      </div>
      <hr />
      <div className="flex justify-around text-white bg-[#4b7a73] ">
      <button onClick={handleHome} className="p-3 transition-all text-sm font-semibold  hover:scale-110 rounded-md hover:cursor-pointer">
          Home
        </button>
        <button onClick={handleTraining} className="p-3 hidden sm:flex transition-all text-sm font-semibold hover:scale-110 rounded-md hover:cursor-pointer">
          Training
        </button>
        <button onClick={handleVerify} className="p-3 text-sm font-semibold transition-all hover:scale-110 rounded-md hover:cursor-pointer">
          Skill Verification
        </button>
        <button onClick={handleJob} className="p-3 transition-all text-sm font-semibold  hover:scale-110 rounded-md hover:cursor-pointer ">
          Job Recommendation
        </button>
      </div>
    </div>
  );
};

export default Navbar;
