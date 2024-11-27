import React, { useState, useEffect } from 'react';
import { FaSun, FaCloudRain, FaCloud } from 'react-icons/fa';
import { GiPlantSeed } from 'react-icons/gi';

const WeatherCropCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cropPrices, setCropPrices] = useState([
    { crop: 'Wheat', price: '₹1800' },
    { crop: 'Rice', price: '₹2200' },
    { crop: 'Sugarcane', price: '₹3000' },
    { crop: 'Barley', price: '₹1500' },
    { crop: 'Cotton', price: '₹2500' },
    { crop: 'Soybean', price: '₹2800' },
    { crop: 'Corn', price: '₹2000' },
    { crop: 'Millet', price: '₹1600' },
  ]);

  const weekdays = ['Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=18.625&longitude=74&hourly=temperature_2m'
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  }, []);

  return (
    <div className="flex justify-center items-start  bg-gray-100 w-full p-8">
      <div className="bg-white rounded-lg shadow-lg p-10  w-full border border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Weather */}
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-4 text-blue-800 text-center md:text-left">
              "Grow Smart, Predict with Precision"
            </h2>
            {/* Weather Card */}
            <div className="bg-blue-50 p-4 rounded-lg flex-1 shadow-md">
              <h3 className="text-2xl font-semibold text-blue-700">
                Today's Weather
              </h3>
              {weatherData ? (
                <div>
                  <p className="mt-2 text-lg text-black">
                    Current Temperature:{' '}
                    <span className="font-bold">
                      {weatherData.hourly.temperature_2m[8]}°C
                    </span>
                  </p>
                  <h4 className="mt-4 font-semibold text-blue-600">
                    Weekly Forecast:
                  </h4>
                  <ul className="mt-2">
                    {weatherData.hourly.temperature_2m.slice(0, 7).map((temp, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center mt-2 text-gray-700"
                      >
                        <span>{weekdays[index]}:</span>
                        <span>{temp}°C</span>
                        {index%3 === 0 ? (
                          <FaSun size={24} className="text-yellow-500" />
                        ) : index === 1 ? (
                          <FaCloudRain size={24} className="text-blue-600" />
                        ) :index === 2 ? (
                            <FaSun size={24} className="text-yellow-500" />
                          ):index === 5 || 4? (
                            <FaCloudRain size={24} className="text-blue-600" />
                          ): (
                          <FaCloud size={24} className="text-gray-400" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-600">Loading weather data...</p>
              )}
            </div>
          </div>

          {/* Right Side: Crop Prices */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center text-green-800">
              Trending Crops
            </h3>
            <div className="bg-green-50 p-4 rounded-lg shadow-md">
              <table className="min-w-full bg-white border border-gray-300">
                <thead className="bg-green-300">
                  <tr>
                    <th className="py-3 px-4 text-left text-green-800">Crop <GiPlantSeed size={24} className="inline" /></th>
                    <th className="py-3 px-4 text-right text-green-800">Price/Quintal</th>
                  </tr>
                </thead>
                <tbody>
                  {cropPrices.map((crop, index) => (
                    <tr key={index} className="border-b hover:bg-green-200">
                      <td className="py-3 px-4 text-gray-700">{crop.crop}</td>
                      <td className="py-3 px-4 text-right text-gray-700">{crop.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCropCard;