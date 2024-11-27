import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import WeatherComponent from '../Components/WeatherComponent';
import CropCards from '../Components/CropCard';
import Chatbot from '../Components/Chatbot';
import { FiMessageSquare } from 'react-icons/fi'; // For chat icon
import Footer from '../Components/Footer';

const Home = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className='bg-[#F0F4F1] h-screen overflow-y-scroll'>
      <Navbar />
      
      <WeatherComponent />
      <div className='px-10'>
      <marquee className=' text-black  h-10 flex text-2xl font-bold items-center'>Sahi Fasal Sahi Daam!</marquee>
      </div>
      <CropCards />

      {/* Chatbot Icon and Toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChatbot}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          <FiMessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Chatbot Panel */}
      {isChatbotOpen && (
        <div className="fixed bottom-16 mb-24 mr-32 right-4 w-72 h-96 bg-white shadow-lg rounded-lg p-4 z-50">
          <Chatbot />
          <button
            onClick={toggleChatbot}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✖
          </button>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
