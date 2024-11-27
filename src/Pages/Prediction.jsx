import React, {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer';

const PredictionForm = () => {
    const navigate=useNavigate()
  const [formData, setFormData] = useState({
    commodityname: 'Arhar',
    month: '',
    year: '',
    average_rain_fall:50
  });

  const [cropImage, setCropImage] = useState("https://media.istockphoto.com/id/608002908/photo/toor-dal-skinned-and-split-pigeon-pea.jpg?s=612x612&w=0&k=20&c=jGCfmdkFJvJ7GwZWosJJ8vF8Jv1aNRpwB38HG7ZKsjg="); // Default image for 'Arhar'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Update the image based on the selected crop
    if (name === 'dropdown') {
      switch (value) {
        case 'Arhar':
          setCropImage("https://media.istockphoto.com/id/608002908/photo/toor-dal-skinned-and-split-pigeon-pea.jpg?s=612x612&w=0&k=20&c=jGCfmdkFJvJ7GwZWosJJ8vF8Jv1aNRpwB38HG7ZKsjg=");
          break;
        case 'Bajra':
          setCropImage("https://5.imimg.com/data5/SELLER/Default/2020/9/RD/KW/XN/11104951/green-millet-bajara--500x500.JPG");
          break;
        case 'Barley':
          setCropImage("https://media.post.rvohealth.io/wp-content/uploads/2020/08/1200x628_FACEBOOK_Is_Barley_Gluten-Free-1200x628.jpg");
          break;
        case 'Copra':
          setCropImage("https://m.media-amazon.com/images/I/71xga8dl-HL._AC_UF1000,1000_QL80_.jpg");
          break;
        case 'Cotton':
          setCropImage("https://m.media-amazon.com/images/I/71wTqVF7ZwL._AC_UF1000,1000_QL80_.jpg");
          break;
        case 'Jowar':
          setCropImage("https://5.imimg.com/data5/SELLER/Default/2023/7/325864094/KU/NM/DT/25132690/sorghum-seed-jowar-500x500.jpg");
          break;
        case 'Sugarcane':
          setCropImage("https://www.saveur.com/uploads/2022/03/05/sugarcane-linda-xiao.jpg?auto=webp&width=2000&height=1333");
          break;
        case 'Wheat':
          setCropImage("https://5.imimg.com/data5/ST/QW/MY-38700875/fresh-wheat-crop-500x500.jpg");
          break;
        default:
          setCropImage(null);
      }
    }
  };
  //Post request on api to fetch data
  const submitData=async(formData)=>{
    const res=await axios.post("http://localhost:5000/api/predict",formData)
    console.log(res.data)
    navigate('/results',{ state: {data:res.data} })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    submitData(formData)

    // Handle prediction logic here
  };
  const isFormIncomplete = () => {
    return  !formData.month || !formData.year;
  };
  return (
    <div>
    <Navbar />
    <div className="flex justify-center p-5 items-center h-screen min-h-screen bg-[#F0F4F1]">
     
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg h-4/5 bg-white p-8 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-black">Price Prediction</h2>

        {/* Dropdown */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="dropdown">
            Select Crop
          </label>
          <select
            name="dropdown"
            id="dropdown"
            value={formData.dropdown}
            onChange={handleChange}
            className="block text-black bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Arhar">Arhar</option>
            <option value="Bajra">Bajra</option>
            <option value="Barley">Barley</option>
            <option value="Copra">Copra</option>
            <option value="Cotton">Cotton</option>
            <option value="Jowar">Jowar</option>
            <option value="Sugarcane">Sugarcane</option>
            <option value="Wheat">Wheat</option>
          </select>
        </div>

        {/* Crop Image */}
        {cropImage && (
          <div className="mb-4">
            <img src={cropImage} alt="Selected Crop" className="w-full h-40 object-cover rounded-md shadow-md" />
          </div>
        )}

        {/* Month Input */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="month">
            Select Month
          </label>
          <input
            name="month"
            id="month"
            value={formData.month}
            onChange={handleChange}
            className="block text-black w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Year Input */}
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="year">
            Select Year
          </label>
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YYYY"
            value={formData.year}
            onChange={handleChange}
            className="block text-black w-full px-3 bg-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            min="1900"
            max="2100"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          type="submit"
          disabled={isFormIncomplete()} 
          className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Prediction
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default PredictionForm;
