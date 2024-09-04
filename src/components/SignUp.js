import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig/firebaseconfig";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handlethis = async (e) => {
    e.preventDefault();
    navigate("/signin")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4">
      <div className="flex flex-col sm:flex-row rounded-2xl shadow-md border border-grey-300 w-full max-w-3xl bg-gradient-to-b from-[#0EBBA0] to-[#065549]">
  
        <div className="sm:w-[40%] text-white w-full p-5 flex flex-col items-center sm:items-start">
          <p className="sm:mb-3 text-5xl font-bold pt-6 sm:pt-10">CareerAlly</p>
            <p className="text-xl sm:text-4xl font-semibold py-2 sm:py-6 sm:pb-16 text-center sm:text-left">
            Connect with Careers That Fit You Best</p>
        </div>

        <div className="bg-white sm:w-[60%] p-4 w-full sm:py-5 flex flex-col rounded-t-2xl sm:rounded-r-none sm:rounded-l-2xl items-center sm:p-2">
          <h2 className="text-2xl font-semibold sm:pt-10 mb-6">Create Account</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="flex flex-col">
            <label className="">Name:</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full sm:w-72  px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
           </div>
            <div className="flex flex-col">
                <label>Email:</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-72  px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div className="flex flex-col">
                <label>Password:</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full sm:w-72  px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
            <div>
            <button
              type="submit"
              className="w-56 sm:w-72 mb-8 py-2 px-4 bg-[#065549] text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            >
              Sign Up
            </button>
            </div>
          </form>
          <div className="flex gap-2">   
                 <p>Already have an account?</p>

          
          <button onClick={handlethis} className="text-blue-600"> Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
