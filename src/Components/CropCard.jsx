import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import rice from '../Images/rice.jpg'

const CropCard = ({ image, name, price, priceChange }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 m-4 w-64 h-72 transition-transform transform hover:scale-105"> {/* Set height here */}
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-t-lg" /> {/* Adjust height */}
      <h3 className="text-lg font-semibold mt-2">{name}</h3> {/* Adjust font size if needed */}
      <div className="flex items-center mt-1">
        <span className="text-xl font-bold">₹{`${price}`}</span>
        {priceChange > 0 ? (
          <span className="text-green-500 ml-2">↑</span>
        ) : (
          <span className="text-red-500 ml-2">↓</span>
        )}
      </div>
    </div>
  );
};

const CropCards = () => {
  const crops = [
    { image: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg', name: 'Wheat', price: 2200, priceChange: 10 },
    { image: 'https://cdn.britannica.com/89/140889-050-EC3F00BF/Ripening-heads-rice-Oryza-sativa.jpg ', name: 'Rice', price: 1800, priceChange: -5 },
    { image: 'https://www.foodrepublic.com/img/gallery/corn-is-a-fruit-but-its-also-a-grain-and-a-vegetable/intro-1688390573.jpg', name: 'Maize', price: 1500, priceChange: 15 },
    { image: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/295/295268/barley-grains-in-a-wooden-bowl.jpg ', name: 'Barley', price: 1900, priceChange: -10 },
    { image: 'https://blog.agribegri.com/public/blog_images/soybean-seed-germination-time-temperature-process-600x400.jpg ', name: 'Soybean', price: 2500, priceChange: 20 },
    { image: 'https://mycaptainoats.com/wp-content/uploads/2021/10/oat-bowl.jpg.webp', name: 'Oats', price: 1600, priceChange: -3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleNext = () => {
    if (currentIndex < crops.length - 4) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>; // You can add a spinner here
  }

  return (
    <div className="p-4 text-black">
      {/* My Crops Section */}
      <h1 className="text-3xl ml-5 font-semibold mb-4">My Crops</h1>
      <div className="flex justify-evenly flex-wrap">
        {crops.slice(0, 4).map((crop, index) => (
          <CropCard
            key={index} // Using index as a unique key (consider using a unique ID if available)
            image={crop.image}
            name={crop.name}
            price={crop.price}
            priceChange={crop.priceChange}
          />
        ))}
      </div>

      {/* Popular Searches Section */}
      <h1 className="text-3xl ml-5 font-semibold mb-4 mt-12">Popular Searches</h1>
      <div className="flex justify-evenly flex-wrap">
        {crops.slice(currentIndex, currentIndex + 4).map((crop, index) => (
          <CropCard
            key={index} // Using index as a unique key (consider using a unique ID if available)
            image={crop.image}
            name={crop.name}
            price={crop.price}
            priceChange={crop.priceChange}
          />
        ))}
      </div>

      {/* Navigation Buttons for Popular Searches */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrev}
          className={`bg-blue-500 text-white p-2 rounded-full shadow ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex === 0}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className={`bg-blue-500 text-white p-2 rounded-full shadow ${
            currentIndex >= crops.length - 4 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={currentIndex >= crops.length - 4}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CropCards;