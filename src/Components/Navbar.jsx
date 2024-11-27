import React, { useState, useEffect } from 'react';
import logo from '../Images/fasdfsgsalf.png';
import axios from 'axios';
import { BiUser } from 'react-icons/bi';
import { AiOutlineGlobal } from 'react-icons/ai'; // Importing a globe icon

const Header = () => {
  const [address, setAddress] = useState('Pune');
  const [location, setLocation] = useState({
    latitude: 18.5282378,
    longitude: 73.9749105,
    error: null,
  });

  useEffect(() => {
    // Load Google Translate script only once
    const addGoogleTranslateScript = () => {
      if (!window.google || !window.google.translate) {
        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);

        // Initialize Google Translate Element after script loads
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en', // Default language
              includedLanguages: 'en,as,bn,gu,hi,kn,kok,ml,mr,or,pa,ta,te,ur', // List of languages
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false
            },
            'google_translate_element'
          );
        };
      }
    };

    if (!document.getElementById('google-translate-script')) {
      addGoogleTranslateScript();
    }
  }, []);

  useEffect(() => {
    const getLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null,
            });
          },
          (error) => {
            setLocation({
              latitude: null,
              longitude: null,
              error: "Location access denied or unavailable.",
            });
          }
        );
      } else {
        setLocation({
          latitude: null,
          longitude: null,
          error: "Geolocation is not supported by this browser.",
        });
      }
    };

    const getAddress = async () => {
      const lat = location.latitude;
      const long = location.longitude;

      if (lat && long) {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=e29f66af97a6244532cf44476f7b7fd7`);
        setAddress(response.data[0].name);
      }
    };

    getLocation();
    getAddress();
  }, [location.latitude, location.longitude]);

  // Function to open the Google Translate dropdown
  const handleTranslate = () => {
    if (window.google && window.google.translate) {
      const translateElement = window.google.translate.TranslateElement.getInstance();
      translateElement.showBanner();
    }
  };

  return (
    <section className="w-full z-50 sticky top-0 bg-white shadow-lg">
      <div className="flex justify-between items-center innerWidth py-4 px-6 text-gray-700">
        {/* Left Side (Logo and Location) */}
        <div className="flex items-center">
          <a href="/">
            <img className="h-10 w-auto" src={logo} alt="logo" />
          </a>
          <div className="ml-2">
            <select className="ml-12 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-400">
              <option value="location">Pune</option>
            
            </select>
          </div>
        </div>

        {/* Right Side (Navigation Links and Login Icon) */}
        <div className="flex justify-end gap-8 items-center">
          <a href="prediction" className="hover:text-blue-600 transition-colors duration-200 text-lg font-semibold">
            Price Prediction
          </a>
          <a href="crop-predict" className="hover:text-blue-600 transition-colors duration-200 text-lg font-semibold">
            Crop
          </a>
          <a href="#disease" className="hover:text-blue-600 transition-colors duration-200 text-lg font-semibold">
            Disease
          </a>
          <a href="/schemes" className="hover:text-blue-600 transition-colors duration-200 text-lg font-semibold">
            Government Scheme
          </a>

          {/* Translate Icon */}
          <div onClick={handleTranslate} className="cursor-pointer p-2 rounded-md hover:bg-gray-200 transition duration-200">
            <AiOutlineGlobal size={30} className="text-blue-500" />
          </div>

          <div>
            <button className="flex items-center justify-center p-2 rounded-full transition-transform transform hover:scale-110 bg-gray-100 hover:bg-gray-200">
              <BiUser size={30} className="text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;