import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import JobPostingForm from "./forms/JobPostingForm";
import JobProviderDetails from "./forms/JobProviderDetails";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/jobpostingform" element={<JobPostingForm/>}/>
        <Route path="/jobproviderdetails" element={<JobProviderDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
