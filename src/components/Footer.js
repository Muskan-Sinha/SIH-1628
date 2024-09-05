import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#065549] text-white py-6">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cold-1 md:grid-cols-2 justify-between items-center pb-6">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold">CareerAlly</h2>
                        <p className="mt-2 text-sm md:w-44">Connecting you with your dream job and helping you grow professionally.</p>
                    </div>
                    <div className=" md:text-left">
                        <h3 className="text-lg px-1 font-semibold">Contact Us</h3>
                        <div className='flex items-center'>
                            <p className='m-1 p-1'><MdEmail /></p>
                            <p className=" text-sm">Email: support@careerally.com</p>
                        </div>
                        <div className='flex items-center'>
                            <p className='m-1 p-1'><FaPhoneAlt /></p>
                            <p className="text-sm">Phone: +1 (555) 123-4567</p>

                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-center pb-4 mt-6 border-b border-white md:m-2 space-x-4">
                        <a href="#" className="text-white text-lg hover:text-blue-500"><FaFacebookF /></a>
                        <a href="#" className="text-white text-lg hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="text-white text-lg hover:text-blue-600"><FaLinkedinIn /></a>
                        <a href="#" className="text-white text-lg hover:text-pink-500"><FaInstagram /></a>
                    </div>
                <div className="text-center mt-6">
                    <p className="text-sm">&copy; 2024 CareerAlly. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
