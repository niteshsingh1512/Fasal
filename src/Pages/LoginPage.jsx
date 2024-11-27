import React, { useState } from 'react';
import { FaMobileAlt, FaLock } from 'react-icons/fa';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (!mobile) return alert('Please enter your mobile number');

    // Replace with your OTP API endpoint
    const response = await fetch('https://your-api.com/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile }),
    });

    if (response.ok) {
      setIsOtpSent(true);
      alert('OTP sent successfully!');
    } else {
      alert('Error sending OTP');
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert('Please enter the OTP');

    // Replace with your OTP verification API endpoint
    const response = await fetch('https://your-api.com/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile, otp }),
    });

    if (response.ok) {
      alert('OTP verified successfully!');
      // Handle successful login logic here
    } else {
      alert('Invalid OTP');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F4F6]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm transition-transform transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {!isOtpSent ? (
          <div>
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition"
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200 transform hover:scale-105"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-4">
              <FaLock className="text-gray-600 mr-2" />
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-white p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 transition"
              />
            </div>
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-200 transform hover:scale-105"
            >
              Verify OTP
            </button>
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            By continuing, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
