'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Purple_button } from '../../components/top_buttons';

const Page = () => {
  // ✅ State for all input data
  const [formData, setFormData] = useState({
    storeName: '',
    description: '',
    logo: null,
    banner: null,
    email: '',
    phone: '',
    website: '',
    street: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  });

  // ✅ For dependent dropdowns
  const [availableStates, setAvailableStates] = useState([]);

  const countryStateData = {
    India: ['Maharashtra', 'Gujarat', 'Karnataka', 'Delhi', 'Tamil Nadu', 'West Bengal'],
    USA: ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
    Canada: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
  };

  // ✅ Universal input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle country + dependent state dropdown
  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData((prev) => ({ ...prev, country: selectedCountry, state: '' }));
    setAvailableStates(countryStateData[selectedCountry] || []);
  };

  // ✅ Handle file uploads (logo / banner)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  // ✅ On form submission
  const handleSubmit = () => {
    console.log('🟣 Form Data Submitted:', formData);
    alert('✅ Changes saved! Check console for form data.');
  };

  return (
    <div className="bg-white rounded-sm p-6 flex flex-col gap-6 mt-6 shadow-sm">
      {/* Section 1 — Basic Info */}
      <p className="my-title text-lg font-semibold text-gray-800">Basic Information</p>

      {/* Store Name */}
      <div className="flex flex-col gap-1.5">
        <p className="text-first font-medium">Store Name</p>
        <input
          type="text"
          name="storeName"
          value={formData.storeName}
          onChange={handleChange}
          className="in-field text-third"
          placeholder="Enter your store name"
        />
      </div>

      {/* 3 Fields in a Row — Description, Logo, Banner */}
      <div className="flex flex-row justify-between gap-5 items-start">
        {/* Description */}
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first font-medium">Description</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="in-field text-third resize-none h-[120px]"
            placeholder="Enter your store description"
          />
        </div>

        {/* Store Logo */}
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first font-medium">Store Logo</p>
          <div className="relative in-field flex flex-col justify-center items-center text-third h-[120px] cursor-pointer border-dashed border-2 border-gray-300 hover:border-purple-400 transition-colors">
            {formData.logo ? (
              <Image
                src={URL.createObjectURL(formData.logo)}
                alt="Logo Preview"
                width={80}
                height={80}
                className="rounded-md object-contain"
              />
            ) : (
              <>
                <Image
                  src="/dashboard/upload.png"
                  alt="Upload logo"
                  width={30}
                  height={30}
                  className="opacity-60 mb-1"
                />
                <p className="text-xs text-third">Drop image here or click to browse</p>
              </>
            )}
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Store Banner */}
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first font-medium">Store Banner</p>
          <div className="relative in-field flex flex-col justify-center items-center text-third h-[120px] cursor-pointer border-dashed border-2 border-gray-300 hover:border-purple-400 transition-colors">
            {formData.banner ? (
              <Image
                src={URL.createObjectURL(formData.banner)}
                alt="Banner Preview"
                width={200}
                height={100}
                className="rounded-md object-cover"
              />
            ) : (
              <>
                <Image
                  src="/dashboard/upload.png"
                  alt="Upload banner"
                  width={30}
                  height={30}
                  className="opacity-60 mb-1"
                />
                <p className="text-xs text-third">Drop image here or click to browse</p>
              </>
            )}
            <input
              type="file"
              name="banner"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Contact Info */}
      <p className="my-title text-lg font-semibold text-gray-800">Contact Information</p>
      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first font-medium">Email Address</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first font-medium">Phone Number</p>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first font-medium">Website</p>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Enter your website URL"
          />
        </div>
      </div>

      {/* Section 3 — Store Address */}
      <p className="my-title text-lg font-semibold text-gray-800">Store Address</p>
      <div className="flex flex-col gap-1.5">
        <p className="text-first font-medium">Street Address</p>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className="in-field text-third"
          placeholder="Enter street address"
        />
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first font-medium">City</p>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Enter city"
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first font-medium">Country</p>
          <select
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            className="in-field text-third cursor-pointer"
          >
            <option value="">Select country</option>
            {Object.keys(countryStateData).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first font-medium">State</p>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled={!availableStates.length}
            className="in-field text-third cursor-pointer"
          >
            <option value="">
              {availableStates.length ? 'Select state' : 'Select country first'}
            </option>
            {availableStates.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Postal Code */}
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first font-medium">Postal Code</p>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Enter postal code"
          />
        </div>
      </div>

      {/* Section 4 — Social Media */}
      <p className="my-title text-lg font-semibold text-gray-800">Social Media</p>
      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first font-medium">Facebook</p>
          <input
            type="url"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Facebook URL"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first font-medium">Twitter</p>
          <input
            type="url"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Twitter URL"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first font-medium">Instagram</p>
          <input
            type="url"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="Instagram URL"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first font-medium">LinkedIn</p>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="in-field text-third"
            placeholder="LinkedIn URL"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex flex-row justify-end mt-6">
        <Purple_button label="Save Changes" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Page;
