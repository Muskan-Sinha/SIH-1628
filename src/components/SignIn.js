import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()

  const handlethis = async (e) => {
    e.preventDefault();
    navigate("/signup")
  }
  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4">
      <div className="flex flex-col sm:flex-row rounded-2xl shadow-md border border-grey-300 w-full max-w-3xl bg-gradient-to-b from-[#0EBBA0] to-[#065549]">
        <div className="sm:w-[40%] text-white w-full p-5 flex flex-col items-center sm:items-start">
          <p className="mb-3 text-5xl font-bold pt-10">LOGO.</p>
          <p className="text-xl sm:text-4xl font-semibold py-6 sm:pb-16 text-center sm:text-left">
            Connect with Careers That Fit You Best
          </p>
        </div>

        <div className="bg-white sm:w-[60%] p-4 w-full sm:py-5 flex flex-col rounded-t-2xl sm:rounded-r-none sm:rounded-l-2xl items-center sm:p-2">
          <h2 className="text-2xl font-semibold sm:pt-10 mb-6">
            Log in to your account
          </h2>
          <form className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-72  px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full sm:w-72  px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-72 mb-8 py-2 px-4 bg-[#065549] text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="flex gap-2">
          <p>Don't have an account? </p>
          
          <button onClick={handlethis} className="text-blue-600"> Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
