//FarmerScheme.jsx

import React from 'react';
import SchemeCard from './SchemeCard';

const schemes = [
    {
      name: 'PM-KISAN',
      description: `The Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme that provides income support to all landholding farmers' families in the country. Under this scheme, eligible farmer families receive financial benefits of ₹6000 per year, payable in three equal installments of ₹2000 each. This direct cash transfer aims to supplement the financial needs of farmers for procuring various inputs related to agriculture and allied activities as well as domestic needs.`,
      link: 'https://pmkisan.gov.in/',
      imageUrl: 'https://images.bhaskarassets.com/web2images/521/2023/09/30/1763725-pm-kisan-samman-nidhi-yojana_1696066951.jpg', // Replace with actual image URL
    },
    {
      name: 'PMFBY',
      description: `The Pradhan Mantri Fasal Bima Yojana (PMFBY) is a comprehensive crop insurance scheme launched by the Government of India. It aims to provide financial support to farmers suffering crop loss or damage due to unforeseen events. The scheme covers all food & oilseed crops and annual commercial/horticultural crops for which past yield data is available. PMFBY operates on an 'Area Approach' basis, with the insurance unit being a defined area for each notified crop. The scheme also leverages technology, using satellite imagery, remote sensing, and drones for quick estimation of crop losses.`,
      link: 'https://pmfby.gov.in/',
      imageUrl: 'https://www.newsonair.gov.in/wp-content/uploads/2024/02/NPIC-2023811203237.jpg', // Replace with actual image URL
    },
    {
      name: 'Kisan Credit Card',
      description: `The Kisan Credit Card (KCC) scheme is a credit scheme introduced to meet the comprehensive credit requirements of the agriculture sector. It enables farmers to purchase agricultural inputs such as seeds, fertilizers, and pesticides, draw cash for their production needs, and access funds for repair and maintenance of their assets. The scheme also covers the credit requirements for allied activities such as animal husbandry and fisheries. KCC provides farmers with flexible and simplified procedures for availing credit, with provisions for multiple withdrawals and repayments. The scheme also includes personal accident insurance coverage for KCC holders.`,
      link: 'https://www.nabard.org/content1.aspx?id=572&catid=23&mid=530',
      imageUrl: 'https://www.adccbank.in/assets/images/resources/kisanCard.jpg', // Replace with actual image URL
    },
    {
      name: 'Soil Health Card',
      description: `The Soil Health Card (SHC) Scheme is a flagship program launched by the Government of India to assess the nutrient status of every farm holding in the country. Under this scheme, farmers receive a Soil Health Card every two years, which carries crop-wise recommendations of nutrients and fertilizers required for individual farms. This helps farmers improve productivity through judicious use of inputs. The scheme promotes integrated nutrient management (INM) through use of chemical fertilizers, organic manures, and bio-fertilizers. It also creates employment opportunities for rural youth in soil testing laboratories. The SHC scheme aims to help farmers make informed decisions about the right quantity of fertilizers and nutrients to use, thereby improving soil health and farm productivity.`,
      link: 'https://soilhealth.dac.gov.in/',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzd4Ersqfemc6aTRB_DBdr4BVqVVEkL7gbA&s', // Replace with actual image URL
    },
  {
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    description: "PKVY promotes organic farming by supporting farmers in adopting sustainable agricultural practices and organic farming techniques.",
    link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx",
    image: "https://www.adccbank.in/assets/images/resources/kisanCard.jpg" // Example image URL
  },
];
const FarmerSchemes = () => {
    return (
      <div className="container  mx-auto px-4 py-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">Government Schemes for Farmers</h1>
  
        <div className="grid grid-cols-1 md:grid-cols gap-6"> {/* Grid layout for schemes */}
          {schemes.map((scheme, index) => (
            <SchemeCard 
              key={index} 
              name={scheme.name} 
              description={scheme.description} 
              link={scheme.link} 
              imageUrl={scheme.imageUrl} 
              isImageLeft={index % 2 === 0} // Alternate image position
            />
          ))}
        </div>
      </div>
    );
  };

export default FarmerSchemes;