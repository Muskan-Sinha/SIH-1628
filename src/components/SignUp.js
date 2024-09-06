import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4">
      <div className="flex flex-col rounded-2xl shadow-md border border-grey-300 w-full max-w-md bg-gradient-to-b from-[#0EBBA0] to-[#065549] p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">CareerAlly</h2>
        <p className="text-lg text-white text-center mb-8">Sign up as a Job Seeker or Job Provider</p>
        <button
          onClick={() => navigate("/signup-jobseeker")}
          className="w-full py-3 mb-4 bg-white text-[#065549] font-semibold rounded-md hover:bg-green-500 hover:text-white transition duration-200"
        >
          Job Seeker
        </button>
        <button
          onClick={() => navigate("/signup-jobprovider-step1")}
          className="w-full py-3 bg-white text-[#065549] font-semibold rounded-md hover:bg-green-500 hover:text-white transition duration-200"
        >
          Job Provider
        </button>
      </div>
    </div>
  );
};

export default SignUp;