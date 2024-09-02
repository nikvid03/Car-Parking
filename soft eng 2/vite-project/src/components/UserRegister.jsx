import React, { useState } from 'react';

function UserRegister() {
  const [searchLocation, setSearchLocation] = useState('');
  const [carName, setCarName] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [date, setDate] = useState('');
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');

  const handleSearchLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleCarNameChange = (e) => {
    setCarName(e.target.value);
  };

  const handleCarNumberChange = (e) => {
    setCarNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleInTimeChange = (e) => {
    setInTime(e.target.value);
  };

  const handleOutTimeChange = (e) => {
    setOutTime(e.target.value);
  };

  return (
    <div className="p-8 bg-blue-100 mt-[30px] shadow-lg shadow-blue-800 h-screen flex justify-center">
    <div className="bg-white p-8 rounded-lg shadow-xl w-80 shadow-blue-800 ">
      <h2 className="text-2xl font-semibold mb-6">User Page 👨</h2>
      <div className="mb-12">
        <label htmlFor="searchLocation" className="block text-gray-700">Search Location</label>
        <div className="flex items-center">
          <span role="img" aria-label="location" className="mr-[35px]"></span>
          <input type="text" id="searchLocation" name="searchLocation" value={searchLocation} onChange={handleSearchLocationChange} className="mt-1 w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
        </div>
      </div>
      <div className="mb-12">
        <label htmlFor="carName" className="block text-gray-700">Car Name</label>
        <input type="text" id="carName" name="carName" value={carName} onChange={handleCarNameChange} className="mt-1 w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="carNumber" className="block text-gray-700">Car Number</label>
        <input type="text" id="carNumber" name="carNumber" value={carNumber} onChange={handleCarNumberChange} className="mt-1 w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="date" className="block text-gray-700">Date</label>
        <input type="date" id="date" name="date" value={date} onChange={handleDateChange} className="mt-1 w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="inTime" className="block text-gray-700">In Time</label>
        <input type="time" id="inTime" name="inTime" value={inTime} onChange={handleInTimeChange} className="mt-1 w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>
      <div className="mb-12">
        <label htmlFor="outTime" className="block text-gray-700">Out Time</label>
        <input type="time" id="outTime" name="outTime" value={outTime} onChange={handleOutTimeChange} className="mt-1 w-48 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 shadow-lg shadow-blue-500" />
      </div>

      <div>
      <button className='border border-2 bg-blue-500 px-[20px] py-[8px]
      rounded-lg text-lg font-semibold text-white'>Book Slot</button>
      </div>
      </div>
    </div>
  );
}

export default UserRegister;
