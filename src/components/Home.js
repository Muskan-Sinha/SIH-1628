import MiddleComp from "./MiddleComp";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TopBanner from "./TopBanner";

const Home = () => {
  return (
    <div className="relative">
      <div className="fixed w-full top-0 left-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-col sm:flex-row mt-16">
          <div className="hidden sm:block fixed right-0 top-16 z-40">
            <Sidebar />
          </div>

        <div className="">
          <TopBanner />
        </div>
      </div>
    </div>
  );
};

export default Home;
