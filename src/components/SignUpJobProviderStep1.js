import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpJobProviderStep1 = () => {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/jobproviderdetails", {
      state: { companyName, contactPerson, email }
    });
  };

  return (
    <div className="flex justify-center items-center max-w-2xl mx-auto min-h-screen px-4">
      <div className="flex flex-col rounded-2xl shadow-md border border-grey-300 w-full max-w-md bg-white p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Job Provider</h2>
        <form onSubmit={handleNext} className="flex flex-col w-full">
          <label>Company Name:</label>
          <input
            type="text"
            placeholder="Enter your Company Name"
            className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          <label>Contact Person:</label>
          <input
            type="text"
            placeholder="Enter Contact Person's Name"
            className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-2 bg-[#065549] text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          >
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpJobProviderStep1;
