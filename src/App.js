import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import JobPostingForm from "./forms/JobPostingForm";
import JobProviderDetails from "./forms/JobProviderDetails";
import Home from "./components/Home";
import JobRecmPage from "./components/JobRecmPage";
import Navbar from "./components/Navbar";
import SidebarDesk from "./components/SidebarDesk";
import Footer from "./components/Footer";
import TrainingRecomms from "./components/Trainingrecomms";
import ResumeBuilder from "./components/ResumeBuilder";
import SkillVerification from "./components/VerifySkills";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="fixed w-full top-0 left-0 z-50">
          <Navbar />
        </div>
        <div className="flex">
          <div className="md:w-[75%] lg:w-[84%] md:h-screen scroll-hidden md:overflow-y-scroll">
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/" element={<Home />} />
              <Route path="/userprofile" element={<UserProfile/>}/>
              <Route path="/jobpostingform" element={<JobPostingForm />} />
              <Route
                path="/jobproviderdetails"
                element={<JobProviderDetails />}
              />
              <Route path="/jobrecommendations" element={<JobRecmPage />} />
              <Route
                path="/trainingrecommendations"
                element={<TrainingRecomms />}
              />
              <Route path="/resumebuilder" element={<ResumeBuilder />} />
              <Route path="/verify" element={<SkillVerification />} />

            </Routes>
            <Footer />
          </div>
          <div className="w-[25%] lg:w-[16%] right-0 md:pt-32 hidden md:block h-screen ">
            <SidebarDesk />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
