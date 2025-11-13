'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { White_button, Purple_button } from '../../components/top_buttons';
import { ChevronDown } from 'lucide-react';

const Add_zone = ({ onClose, onAdd }) => {

  const countries = ['India', 'Italy', 'Japan', 'Canada'];

  const shippingMethods = [
    "Standard Shipping",
    "Express Shipping",
    "Overnight Shipping",
    "Free Shipping",
    "Local Pickup"
  ];

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMethodOpen, setIsMethodOpen] = useState(false);

  const [formData, setFormData] = useState({
    zone: "",
    country: "",
    method: "",
    cost: "",
    days: ""
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className='bg-white rounded-xl p-4 flex flex-col gap-4 shadow w-[500px] inset-0'>

      <div className='flex flex-row justify-between'>
        <p className='my-title'>Add Shipping Zone</p>
        <Image
          src='/dashboard/close-circle-black.png'
          className='size-5 cursor-pointer'
          height={20}
          width={20}
          onClick={onClose}
          alt='close'
        />
      </div>

      {/* Zone Name */}
      <div className='flex flex-row gap-4 justify-between'>
        <div className='flex flex-col gap-2 w-full'>
          <p>Zone Name</p>
          <input
            type="text"
            placeholder='e.g., North America, Europe, Asia'
            className='in-field text-third border p-2 rounded-lg'
            value={formData.zone}
            onChange={(e) => handleChange("zone", e.target.value)}
          />
        </div>

        {/* Country Dropdown */}
        <div className='flex flex-col gap-2 w-full'>
          <p>Select Country</p>

          <div className='relative'>
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className='w-full border p-2 flex justify-between items-center rounded-lg bg-white shadow'
            >
              {formData.country || "Select Country"}
              <ChevronDown className={`${isCountryOpen ? "rotate-180" : ""}`} />
            </button>

            {isCountryOpen &&
              <div className='absolute w-full bg-white shadow rounded-lg mt-1 max-h-40 overflow-y-auto z-20'>
                {countries.map((c) => (
                  <p
                    key={c}
                    className='p-2 hover:bg-gray-100 cursor-pointer text-first'
                    onClick={() => {
                      handleChange("country", c);
                      setIsCountryOpen(false);
                    }}
                  >
                    {c}
                  </p>
                ))}
              </div>
            }
          </div>
        </div>
      </div>

      <p className='text-title'>Shipping Rate</p>

      {/* Shipping Method + Cost */}
      <div className='flex flex-row justify-between gap-4'>
        {/* Shipping Method */}
        <div className='flex flex-col gap-2 w-full'>
          <p>Shipping Method</p>

          <div className='relative'>
            <button
              onClick={() => setIsMethodOpen(!isMethodOpen)}
              className='w-full border p-2 flex justify-between items-center rounded-lg bg-white shadow'
            >
              {formData.method || "Select Method"}
              <ChevronDown className={`${isMethodOpen ? "rotate-180" : ""}`} />
            </button>

            {isMethodOpen &&
              <div className='absolute w-full bg-white shadow rounded-lg mt-1 max-h-40 overflow-y-auto z-20'>
                {shippingMethods.map((m) => (
                  <p
                    key={m}
                    className='p-2 hover:bg-gray-100 cursor-pointer text-first'
                    onClick={() => {
                      handleChange("method", m);
                      setIsMethodOpen(false);
                    }}
                  >
                    {m}
                  </p>
                ))}
              </div>
            }
          </div>
        </div>

        {/* Cost Field */}
        <div className='flex flex-col gap-2 w-full'>
          <p>Cost ($)</p>
          <input
            type="number"
            placeholder='Enter Cost'
            className='in-field border p-2 rounded-lg'
            value={formData.cost}
            onChange={(e) => handleChange("cost", e.target.value)}
          />
        </div>
      </div>

      {/* Estimated Days */}
      <div className='flex flex-col gap-2'>
        <p>Estimated Days</p>
        <input
          type="number"
          placeholder='Enter days'
          className='in-field border p-2 rounded-lg'
          value={formData.days}
          onChange={(e) => handleChange("days", e.target.value)}
        />
      </div>

      {/* Buttons */}
      <div className='flex flex-row justify-center gap-4 mt-4'>
        <White_button label='Close' onClick={onClose} />
        <Purple_button
          label='Add Zone'
          onClick={() => onAdd(formData)}
        />
      </div>

    </div>
  );
};

export default Add_zone;
