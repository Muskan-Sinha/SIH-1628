import React from "react";

const JobProviderDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-8">
      <form>
        <div>
          <p className="text-center text-xl font-semibold mb-6">
            Complete Your Profile:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium">Full Name:</label>
          <input
            required
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          />
        </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Mobile No:</label>
            <input
              required
              type="text"
              placeholder="Enter your Mobile No"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Alternate Contact No:</label>
            <input
              type="text"
              placeholder="Enter alternate contact no"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Company Name:</label>
            <input
              type="text"
              placeholder="Name of the company"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Domain:</label>
            <input
              type="text"
              placeholder="Domain of your company"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Designation:</label>
            <input
              type="text"
              placeholder="Enter your designation"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
      </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium">Company Description:</label>
          <textarea
            placeholder="Describe your company"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 resize-none"
            rows="4"
          />
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium">LinkedIn Profile URL:</label>
            <input
              type="url"
              placeholder="Enter LinkedIn profile URL"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Company Size:</label>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
              <option value="">--Select Company Size--</option>
              <option value="small">1-50 employees</option>
              <option value="medium">51-200 employees</option>
              <option value="large">201-500 employees</option>
              <option value="enterprise">500+ employees</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Website:</label>
            <input
              type="url"
              placeholder="Official Website URL of the company"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Address:</label>
            <input
              type="text"
              placeholder="Enter your Address"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">State:</label>
            <input
              type="text"
              placeholder="State"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">City:</label>
            <input
              type="text"
              placeholder="City"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobProviderDetails;
