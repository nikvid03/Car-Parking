import React, { useState } from 'react';

function OwnerRegister() {
  const [location, setLocation] = useState('');
  const [fourWheelerPrice, setFourWheelerPrice] = useState('');
  const [twoWheelerPrice, setTwoWheelerPrice] = useState('');
  const [fourWheelerSlots, setFourWheelerSlots] = useState('');
  const [twoWheelerSlots, setTwoWheelerSlots] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFourWheelerPriceChange = (e) => {
    setFourWheelerPrice(e.target.value);
  };

  const handleTwoWheelerPriceChange = (e) => {
    setTwoWheelerPrice(e.target.value);
  };

  const handleFourWheelerSlotsChange = (e) => {
    setFourWheelerSlots(e.target.value);
  };

  const handleTwoWheelerSlotsChange = (e) => {
    setTwoWheelerSlots(e.target.value);
  };

  return (
    <div className="p-8 bg-blue-100 mt-[30px] shadow-lg shadow-blue-800 h-screen flex justify-center">
    <div className="bg-white p-8 rounded-lg shadow-xl w-80 shadow-blue-800 ">
      <h2 className="text-2xl font-semibold mb-6 text-center">🅿️arking space</h2>
      <div className="mb-12">
        <label htmlFor="location" className="block text-gray-700">Location</label>
        <input type="text" id="location" name="location" value={location} onChange={handleLocationChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="fourWheelerPrice" className="block text-gray-700">Price for Four Wheeler</label>
        <input type="text" id="fourWheelerPrice" name="fourWheelerPrice" value={fourWheelerPrice} onChange={handleFourWheelerPriceChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="twoWheelerPrice" className="block text-gray-700">Price for Two Wheeler</label>
        <input type="text" id="twoWheelerPrice" name="twoWheelerPrice" value={twoWheelerPrice} onChange={handleTwoWheelerPriceChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="fourWheelerSlots" className="block text-gray-700">Number of Slots for Four Wheeler</label>
        <input type="number" id="fourWheelerSlots" name="fourWheelerSlots" value={fourWheelerSlots} onChange={handleFourWheelerSlotsChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="twoWheelerSlots" className="block text-gray-700">Number of Slots for Two Wheeler</label>
        <input type="number" id="twoWheelerSlots" name="twoWheelerSlots" value={twoWheelerSlots} onChange={handleTwoWheelerSlotsChange} className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>

      <div>
      <button className='border border-2 bg-blue-500 px-[20px] py-[8px]
      rounded-lg text-lg font-semibold text-white'>Register Place</button>
      </div>
      </div>
    </div>
  );
}

export default OwnerRegister;
