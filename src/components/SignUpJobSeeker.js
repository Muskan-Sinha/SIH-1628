import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig/firebaseconfig";
import { useNavigate } from "react-router-dom";

const SignUpJobSeeker = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4">
      <div className="flex flex-col rounded-2xl shadow-md border border-grey-300 w-full max-w-md bg-white p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Job Seeker Signup</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-2 bg-[#065549] text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpJobSeeker;
