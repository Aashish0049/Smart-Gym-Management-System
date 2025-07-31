import React from 'react';
import equipmentData from '../data/equipmentData';

const Equipment = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
        🏋️‍♂️ Gym Equipment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {equipmentData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 mt-1">Quantity: <span className="font-medium text-black">{item.quantity}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
