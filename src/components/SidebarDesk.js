import React from "react";

const SidebarDesk = () => {
  return (
    <div className="  ">
      <ul className="bg-gradient-to-b hidden sm:flex w-[100%] h-[calc(100vh-8.1rem)] flex-col justify-between md:flex from-[#0EBBA0] to-[#065549]  text-white">

        <li className="text-center p-2 pt-6 hover:cursor-pointer font-semibold ">
          Blogs
        </li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer font-semibold ">
          Career Advice
        </li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer font-semibold">
          Success Stories
        </li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer font-semibold ">
          Community Forum
        </li>
        <hr className="border-white" />
        <li className="text-center p-2 pb-8 hover:cursor-pointer font-semibold ">
          Help
        </li>
      </ul>
    </div>
  );
};

export default SidebarDesk;
