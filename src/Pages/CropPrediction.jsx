import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import Navbar from "../Components/Navbar";
import axios from 'axios';
import Footer from '../Components/Footer';


const CropCard = ({ crop }) => {
  const { image, name, description, growthTime, harvestTime } = crop;

  // Add animation for card appearance
  const animationProps = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(30px)' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={animationProps} className="w-64 bg-white rounded-lg shadow-lg p-4 m-4 transform transition-transform hover:scale-105">
      <img src={image} alt={name} className="w-full h-32 object-cover rounded-t-lg" />
      <h3 className="text-lg font-semibold mt-2 text-center">{name}</h3>
      <p className="text-gray-600 text-center mt-1">{description}</p>
      <p className="text-gray-500 text-center mt-1">Growth Time: {growthTime} days</p>
      <p className="text-gray-500 text-center mt-1">Harvest Time: {harvestTime} days</p>
    </animated.div>
  );
};

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    potassium: '',
    phosphorous: '', // Changed to phosphorous
    ph: '',
    state: '',
    district: '',
    month: '',
  });
  const [crop,setCrop]=useState('')

  const getData = async () => {
    try {
      const res = await axios.post('http://localhost:8000/predict', formData);
      console.log(res.data.result);
      setCrop(res.data.result)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [recommendedCrops, setRecommendedCrops] = useState([]);
  const cropsRef = useRef(null); // Create a ref for the recommended crops section

  // Dummy states and cities data (with uppercase letters)
  const stateCityData = {
    MAHARASHTRA: ['MUMBAI', 'PUNE', 'NAGPUR'],
    KARNATAKA: ['BANGALORE', 'MYSORE', 'HUBLI'],
    GUJARAT: ['AHMEDABAD', 'SURAT', 'VADODARA'],
    UTTARPRADESH: ['LUCKNOW', 'KANPUR', 'AGRA'],
    RAJASTHAN: ['JAIPUR', 'JODHPUR', 'UDAIPUR'],
  };

  // List of months in uppercase
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
//   console.log(crop)
  const crops = [
    { image: `https://via.placeholder.com/150?text=${crop}`, name: crop, description: 'Requires good water availability and nitrogen-rich soil.', growthTime: 90, harvestTime: 30 },
    ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to get cities based on selected state
  const getCitiesForState = (state) => {
    return stateCityData[state] || [];
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Log the filled form data
    console.log("Form Data Submitted:", formData);

    // Update formData to ensure values are in the correct format
    const updatedFormData = {
      ...formData,
      state: formData.state.toUpperCase(),
      district: formData.district.toUpperCase(),
      month: formData.month.toUpperCase(),
    };

    // Set the updated form data
    setFormData(updatedFormData);

    const recommended = crops.filter(crop => crop);
    setRecommendedCrops(recommended);
    getData();

    // Scroll to the recommended crops section after the state is updated
    setTimeout(() => {
      if (cropsRef.current) {
        cropsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className='bg-white'>
      <Navbar />
      <div className="max-w-3xl mt-10 border mx-auto p-6 text-black shadow-md rounded-md bg-white">
        <h1 className="text-2xl font-bold mb-6 text-center">Crop Recommendation System</h1>
        <form onSubmit={handleFormSubmit}>
          {/* Nitrogen Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="nitrogen">Nitrogen Content (N)</label>
            <input
              id="nitrogen"
              type="number"
              name="nitrogen"
              value={formData.nitrogen}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter nitrogen content"
            />
          </div>

          {/* Potassium Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="potassium">Potassium Content (K)</label>
            <input
              id="potassium"
              type="number"
              name="potassium"
              value={formData.potassium}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter potassium content"
            />
          </div>

          {/* Phosphorus Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phosphorus">Phosphorus Content (P)</label>
            <input
              id="phosphorus"
              type="number"
              name="phosphorous" // Keep this as phosphorous
              value={formData.phosphorous}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phosphorus content"
            />
          </div>

          {/* pH Level Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="ph">Soil pH Level</label>
            <input
              id="ph"
              type="number"
              step="0.1"
              name="ph"
              value={formData.ph}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter pH level"
            />
          </div>

          {/* State Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your state</option>
              {Object.keys(stateCityData).map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="district">City</label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select your city</option>
              {getCitiesForState(formData.state).map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Month Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="month">Month</label>
            <select
              id="month"
              name="month"
              value={formData.month}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select the month</option>
              {months.map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
          >
            Recommend Crop
          </button>
        </form>

        {/* Recommended Crops Section */}
        {recommendedCrops.length > 0 && (
          <div ref={cropsRef} className="mt-6">
            <h2 className="text-xl font-bold mb-4 text-center">Recommended Crops</h2>
            <p className='text-3xl text-center font-bold'>{crop}</p>
            <div className="flex flex-wrap justify-center">
              {recommendedCrops.map((crop, index) => (
                <CropCard key={index} crop={crop} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default CropRecommendation;
