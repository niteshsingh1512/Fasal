import React from 'react';
import { FaInstagram, FaHome, FaClipboardList, FaUsers, FaBook } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Flexbox for product, company, resource sections */}
        <div className="flex justify-between ml-40 gap-10">
          {/* Product Section */}
          <div className="flex flex-col items-start w-full md:w-1/3 px-4">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaClipboardList className="mr-2" /> Products
            </h2>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-blue-500 transition-colors transform hover:scale-105">Overview</a></li>
              <li><a href="#features" className="hover:text-blue-500 transition-colors transform hover:scale-105">Features</a></li>
              <li><a href="#solutions" className="hover:text-blue-500 transition-colors transform hover:scale-105">Solutions</a></li>
              <li><a href="#tutorials" className="hover:text-blue-500 transition-colors transform hover:scale-105">Tutorials</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-start w-full md:w-1/3 px-4">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaUsers className="mr-2" /> Company
            </h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-blue-500 transition-colors transform hover:scale-105">About Us</a></li>
              <li><a href="#careers" className="hover:text-blue-500 transition-colors transform hover:scale-105">Careers</a></li>
              <li><a href="#press" className="hover:text-blue-500 transition-colors transform hover:scale-105">Press</a></li>
              <li><a href="#news" className="hover:text-blue-500 transition-colors transform hover:scale-105">News</a></li>
            </ul>
          </div>

          {/* Resource Section */}
          <div className="flex flex-col items-start w-full md:w-1/3 px-4">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaBook className="mr-2" /> Resources
            </h2>
            <ul className="space-y-2">
              <li><a href="#blog" className="hover:text-blue-500 transition-colors transform hover:scale-105">Blog</a></li>
              <li><a href="#newsletter" className="hover:text-blue-500 transition-colors transform hover:scale-105">Newsletter</a></li>
              <li><a href="#events" className="hover:text-blue-500 transition-colors transform hover:scale-105">Events</a></li>
              <li><a href="#help-center" className="hover:text-blue-500 transition-colors transform hover:scale-105">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Symmetric Alignment for Contact Info */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-bold flex items-center">
              <FaHome className="mr-2" /> AIT PUNE
            </h2>
            <p className="text-lg">Army Institute of Technology</p>
            <p>Team UNITE</p>
          </div>
          <div className="flex flex-col items-end text-right">
            <div className="flex justify-end space-x-4 mb-4">
              <a
                href="https://www.instagram.com/aitpune_official?igsh=OXF4OThxd3o5NXJu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors transform hover:scale-105"
              >
                <FaInstagram size={30} />
              </a>
              {/* Add more social icons here if needed */}
            </div>
            <p className="text-sm">Contact: aitpune@gmail.com | Phone: 931561XXXX</p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} AIT Pune. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;