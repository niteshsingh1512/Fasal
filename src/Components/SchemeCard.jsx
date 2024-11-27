//SchemeCard

import React from 'react';

const SchemeCard = ({ name, description, link, imageUrl, isImageLeft }) => {
  return (
    <div className="bg-white border rounded-xl shadow-sm sm:flex gap-8">
    <div className="shrink-0 relative w-full rounded-t-xl  pt-[20%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
      <img className="size-full min-h-full absolute top-0 start-0 object-cover" src={imageUrl} alt={name}/>
    </div>
    <div className="flex flex-wrap">
      <div className="p-4 flex flex-col h-full sm:p-7">
        <h3 className="text-lg font-bold text-gray-800">
          {name}
        </h3>
        <p className="mt-1 text-gray-500">
          {description}
        </p>
        <div className="mt-5 sm:mt-auto">
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 text-md md:text-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Learn More / Apply Here
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SchemeCard;