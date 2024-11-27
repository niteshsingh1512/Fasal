import React from 'react';
import { Line } from 'react-chartjs-2';
import Footer from '../Components/Footer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';
import { useLocation } from 'react-router-dom';
import Navbar from "../Components/Navbar";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PredictionPage = () => {
  const location = useLocation();
  const jsonData = location.state.data;
  console.log(jsonData);

  // Data for the graphs
  const { months, current_year, next_year } = jsonData.monthly_data;

  // Average Price Graph Data
  const averagePriceData = {
    labels: months,
    datasets: [
      {
        label: 'Current Year Average Price',
        data: current_year?.average_price || [],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Next Year Average Price',
        data: next_year?.average_price || [],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  // MSP Graph Data
  const mspData = {
    labels: months,
    datasets: [
      {
        label: 'Current Year MSP',
        data: current_year?.msp || [],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Next Year MSP',
        data: next_year?.msp || [],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Price Comparison',
      },
    },
  };

  const mspOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly MSP Comparison',
      },
    },
  };
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return (
    <div className="min-h-screen bg-gray-100  text-black">
      <Navbar/>
      <h1 className="text-4xl font-bold mb-3 text-center text-gray-800 mt-5">Price Prediction Data</h1>

      {/* Price Range Card */}
      <div className="p-10">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-2xl font-semibold text-black mb-4">Price Range</h3>
          {jsonData?.price_range ? (
            <>
              <p className="font-medium">Avg Value: <span className="text-blue-600">{jsonData.price_range.avg_value}</span></p>
              <p className="font-medium">Max Value: <span className="text-green-600">{jsonData.price_range.max_value}</span></p>
              <p className="font-medium">Min Value: <span className="text-red-600">{jsonData.price_range.min_value}</span></p>
            </>
          ) : (
            <p className="text-red-500">Price range data not available</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-black">Best Month</h3>
          <p>Month:{monthNames[`${jsonData.yearly_statistics.best_month_index}`-1]}</p>
          <p>Avg Price: {jsonData.yearly_statistics.max_price.average}</p>
          <p>MSP: {jsonData.yearly_statistics.max_price.msp}</p>
        </div>

        <div className=" bg-white shadow-md rounded-lg p-5">
          <h3 className="text-xl font-semibold text-black">Least Gain Month</h3>
          <p>Month:{monthNames[`${jsonData.yearly_statistics.worst_month_index}`-1]}</p>
          <p>Avg Price: {jsonData.yearly_statistics.min_price.average}</p>
          <p>MSP: {jsonData.yearly_statistics.min_price.msp}</p>
        </div>
      </div>

      {/* Average Price Graph */}
      <div className="mb-8 p-10">
        <h2 className="text-2xl font-semibold text-black mb-4">Average Price Graph:</h2>
        <div className="bg-white p-6 shadow-md rounded-lg" style={{ height: '300px' }}>
          <Line data={averagePriceData} options={options} />
        </div>
      </div>

      {/* MSP Graph */}
      <div className="mb-8 p-10">
        <h2 className="text-2xl font-semibold text-black mb-4">MSP Graph:</h2>
        <div className="bg-white p-6 shadow-md rounded-lg" style={{ height: '300px' }}>
          <Line data={mspData} options={mspOptions} />
        </div>
      </div>

      {/* Statistics Cards */}
     

      {/* Prediction Card */}
      {/* <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-black">Prediction for Next Year</h3>
        <p>Prediction: {jsonData?.prediction || 'N/A'}</p>
      </div> */}
      <Footer />
    </div>
  );
};

export default PredictionPage;
