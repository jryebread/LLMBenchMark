import React, { useState } from 'react';

const Dropdown = ({ label, options, value, setValue }) => (
  <div className="flex items-center space-x-2 mb-4">
    <label className="font-semibold text-purple-400">{label}</label>

    <div className="w-full">
      <select
        value={value ? value.name : ''}
        onChange={(e) => setValue(options.find((option) => option.name === e.target.value))}
        className="w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-purple-300 shadow-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
      >
<option value="" disabled hidden> Select... </option>
        {options.map((option) => (
          <option key={option.name} value={option.name}>
            {option.name}
            {option.vram ? ` (${option.vram}GB)` : ''}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const Setup = ({ graphicsCard, setGraphicsCard, processor, setProcessor, totalRam, setTotalRam }) => {

  const graphicsCards = [
    {
      name: 'NVIDIA GeForce RTX 3090',
      vram: 24
    },
    {
      name: 'AMD Radeon RX 6900 XT',
      vram: 16
    },
    {
      name: 'NVIDIA GeForce RTX 3080',
      vram: 10
    },
    {
      name: 'NVIDIA GeForce RTX 3070',
      vram: 8
    },
    {
      name: 'AMD Radeon RX 6800 XT',
      vram: 16
    },
    {
      name: 'AMD Radeon RX 6700 XT',
      vram: 12
    },
    {
      name: 'NVIDIA GeForce RTX 3060 Ti',
      vram: 8
    }
  ];

  const processors = [
    { name: 'Intel Core i9-10900K' },
    { name: 'AMD Ryzen 9 5950X' },
    { name: 'Intel Core i7-10700K' },
    { name: 'AMD Ryzen 7 5800X' },
    { name: 'Intel Core i5-11600K' },
    { name: 'AMD Ryzen 5 5600X' }
  ];
  
  const totalRams = [
    { name: '16GB' },
    { name: '32GB' },
    { name: '64GB' }
  ];
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="bg-white px-6 my-8 py-8">
        <Dropdown label="Graphics" options={graphicsCards} value={graphicsCard} setValue={setGraphicsCard} />
      </div>
      <div className="bg-white px-4 my-8 py-8">
        <Dropdown label="Processor" options={processors} value={processor} setValue={setProcessor} />
      </div>
      <div className="bg-white px-4 my-8 py-8">
        <Dropdown label="TotalRAM" options={totalRams} value={totalRam} setValue={setTotalRam} />
      </div>
    </div>
  );
};

export default Setup;