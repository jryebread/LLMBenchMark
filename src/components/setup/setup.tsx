import React, { useState } from 'react';

const Dropdown = ({ label, options, value, setValue }) => (
  <div className="flex items-center space-x-2 mb-4">
    <label className="font-semibold text-purple-400">{label}</label>

    <div className="w-full">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-purple-300 shadow-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
      >
        <option value="" disabled hidden>
          Select...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const Setup = ({ graphicsCard, setGraphicsCard, processor, setProcessor, totalRam, setTotalRam }) => {

  const graphicsCards = ['NVIDIA GeForce RTX 3090', 'AMD Radeon RX 6900 XT', 'NVIDIA GeForce RTX 3080'];
  const processors = ['Intel Core i9-10900K', 'AMD Ryzen 9 5950X', 'Intel Core i7-10700K'];
  const totalRams = ['16GB', '32GB', '64GB'];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="bg-white px-4 my-8 py-8">
      <Dropdown label="Graphics&nbsp;" options={graphicsCards} value={graphicsCard} setValue={setGraphicsCard} />
      </div>
      <div className="bg-white px-4 my-8 py-8">

      <Dropdown label="Processor" options={processors} value={processor} setValue={setProcessor} />
      </div>

      <div className="bg-white px-4 my-8 py-8">

      <Dropdown label="Total RAM" options={totalRams} value={totalRam} setValue={setTotalRam} />
      </div>
    </div>
  );
};

export default Setup;