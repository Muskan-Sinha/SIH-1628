import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-3">
        <button
          onClick={toggleMenu}
          className="text-xl sm:hidden focus:outline-none right-0"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <hr />
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } flex-col sm:hidden bg-[#BEE0DA] text-center`}
      >
        <ul className="bg-gradient-to-b h-[calc(100vh-6rem)] absolute w-44 right-0 mt-1 flex flex-col justify-around from-[#0EBBA0] to-[#065549] text-white">
          <li className="text-center p-2">Blogs</li>
          <hr className="border-white" />
          <li className="text-center p-2">Career Advice</li>
          <hr className="border-white" />
          <li className="text-center p-2">Success Stories</li>
          <hr className="border-white" />
          <li className="text-center p-2">Community Forum</li>
          <hr className="border-white" />
          <li className="text-center p-2">Help</li>
        </ul>
      </div>

      <ul className="bg-gradient-to-b h-[calc(100vh-6rem)] hidden sm:flex w-64 -top-10 flex-col justify-around from-[#0EBBA0] to-[#065549] text-white">
        <li className="text-center p-2 hover:cursor-pointer">Blogs</li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer">Career Advice</li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer">Success Stories</li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer">Community Forum</li>
        <hr className="border-white" />
        <li className="text-center p-2 hover:cursor-pointer">Help</li>
      </ul>
    </div>
  );
};

export default Sidebar;
