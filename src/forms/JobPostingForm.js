import React from "react";

const JobPostingForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-8">
      <form>
        <div>
          <p className="text-center text-xl font-semibold mb-6">
            Enter Job Details:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Title:</label>
            <input
              required
              type="text"
              placeholder="Enter title of the Job"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Domain:</label>
            <input
              type="text"
              placeholder="Enter Domain"
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
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1 font-medium">Description:</label>
          <textarea
            placeholder="Describe the Job"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 resize-none"
            rows="4"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col mb-4">
            <label className="mb-1 font-medium">Job Type:</label>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
              <option value="">--Select Job Type--</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
              <option value="temporary">Temporary</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Job Location:</label>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
              <option value="">--Select Job Location--</option>
              <option value="on-site">On-Site</option>
              <option value="hybrid">Hybrid</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Required Experience:</label>
            <input
              type="text"
              placeholder="Experience Required"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Required Skills:</label>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
              <option value="">--Select an option--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Other Skills:</label>
            <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500">
              <option value="">--Select an option--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Minimum Education Level:</label>
            <input
              type="text"
              placeholder="Education level"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Salary Range:</label>
            <input
              type="text"
              placeholder="Salary Range"
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
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Application Deadline:</label>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col ">
            <label className="mb-1 font-medium">Application URL:</label>
            <input
              type="url"
              placeholder="Link to application"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Contact Email:</label>
            <input
              type="email"
              placeholder="Email"
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

export default JobPostingForm;
