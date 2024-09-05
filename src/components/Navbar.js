import { FaRegUser } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

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
    navigate("/home")
  }

  return (
    <div className="">
      <div className="flex justify-between bg-white items-center">
        <p className="px-3 py-6  ml-4 sm:ml-10 text-2xl font-semibold">
          CareerAlly
        </p>
        <div className="flex">
          <p className="p-3 text-2xl md:mr-16 hover:cursor-pointer">
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
        <button onClick={handleTraining} className="p-3 hidden sm:flex  transition-all  text-sm font-semibold   hover:scale-110 rounded-md  hover:cursor-pointer">
          Training
        </button>
        <button className="p-3 text-sm font-semibold  transition-all hover:scale-110 rounded-md hover:cursor-pointer">
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
