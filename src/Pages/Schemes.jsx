import React from 'react'
import FarmerSchemes from '../Components/FarmerSchemes'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Schemes = () => {
  return (
    <div className='bg-gray-100 border-none'>
      <Navbar />
      <FarmerSchemes/>
      <Footer/>
    </div>
  )
}

export default Schemes
