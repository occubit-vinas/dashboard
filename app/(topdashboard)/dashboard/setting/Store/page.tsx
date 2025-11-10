'use client';
import React from 'react';
import Image from 'next/image';
import { Purple_button } from '../../components/top_buttons';
const Page = () => {
  return (
    <div className="bg-white rounded-sm p-4 flex flex-col gap-6 mt-6">
      {/* Section 1 — Basic Info */}
      <p className="my-title">Basic Information</p>

      {/* Store Name */}
      <div className="flex flex-col gap-1.5">
        <p className="text-first">Store Name</p>
        <input
          type="text"
          className="in-field text-third"
          placeholder="Enter your store name"
        />
      </div>

      {/* 3 Fields in a Row — Description, Logo, Banner */}
      <div className="flex flex-row justify-between gap-5 items-start">
        {/* Description */}
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first">Description</p>
          <textarea
            rows={4}
            className="in-field text-third resize-none h-[120px]"
            placeholder="Enter your store description"
          />
        </div>

        {/* Store Logo */}
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first">Store Logo</p>
          <div className="relative in-field flex flex-col justify-center items-center text-third h-[120px] cursor-pointer">
            <Image
              src="/dashboard/upload.png"
              alt="Upload logo"
              width={30}
              height={30}
              className="opacity-60 mb-1"
            />
            <p className="text-xs text-third">
              Drop image here or click to browse
            </p>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>

        {/* Store Banner */}
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first">Store Banner</p>
          <div className="relative in-field flex flex-col justify-center items-center text-third h-[120px] cursor-pointer">
            <Image
              src="/dashboard/upload.png"
              alt="Upload banner"
              width={30}
              height={30}
              className="opacity-60 mb-1"
            />
            <p className="text-xs text-third">
              Drop image here or click to browse
            </p>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Section 2 — Contact Info */}
      <p className="my-title">Contact Information</p>
      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first">Email Address</p>
          <input
            type="email"
            className="in-field text-third"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first">Phone Number</p>
          <input
            type="tel"
            className="in-field text-third"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/3">
          <p className="text-first">Website</p>
          <input
            type="url"
            className="in-field text-third"
            placeholder="Enter your website URL"
          />
        </div>
      </div>

      {/* Section 3 — Store Address */}
      <p className="my-title">Store Address</p>
      <div className="flex flex-col gap-1.5">
        <p className="text-first">Street Address</p>
        <input
          type="text"
          className="in-field text-third"
          placeholder="Enter street address"
        />
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first">City</p>
          <input
            type="text"
            className="in-field text-third"
            placeholder="Enter city"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first">State</p>
          <input
            type="text"
            className="in-field text-third"
            placeholder="Enter state"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first">Country</p>
          <input
            type="text"
            className="in-field text-third"
            placeholder="Enter country"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/4">
          <p className="text-first">Postal Code</p>
          <input
            type="text"
            className="in-field text-third"
            placeholder="Enter postal code"
          />
        </div>
      </div>

      {/* Section 4 — Social Media */}
      <p className="my-title">Social Media</p>
      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first">Facebook</p>
          <input
            type="url"
            className="in-field text-third"
            placeholder="Facebook URL"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first">Twitter</p>
          <input
            type="url"
            className="in-field text-third"
            placeholder="Twitter URL"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first">Instagram</p>
          <input
            type="url"
            className="in-field text-third"
            placeholder="Instagram URL"
          />
        </div>
        <div className="flex flex-col gap-1.5 w-1/2">
          <p className="text-first">LinkedIn</p>
          <input
            type="url"
            className="in-field text-third"
            placeholder="LinkedIn URL"
          />
        </div>
      </div>
      <div className='flex flex-row justify-end'>

      <Purple_button label='Save Changes'/>
      </div>
    </div>
  );
};

export default Page;
