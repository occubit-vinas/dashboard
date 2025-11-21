'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Cancel, Purple_button } from '../../components/top_buttons';
import {home_mng} from '@/data/dashboard/constants';
interface EditProps {
  setopenedit: (open: boolean) => void;
}

const categories = [
  home_mng.c1,
  home_mng.c2,
  home_mng.c3,
  home_mng.c4,
  home_mng.c5,
];

const Edit: React.FC<EditProps> = ({ setopenedit }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [displayOrder, setDisplayOrder] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0  z-40"
        onClick={() => setopenedit(false)}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-sm p-6 w-full max-w-md z-50">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="my-title font-bold text-lg">{home_mng.edt}</h2>
          <button
            onClick={() => setopenedit(false)}
            className="hover:opacity-70 transition"
          >
            <Image
              src="/dashboard/close-circle-black.png"
              alt="Close"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label className="block text-first font-medium mb-1.5">{home_mng.ct}</label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4   border border-gray-300 rounded-sm text-second text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <span className='my-1.5'>{selectedCategory}</span>
              <div className='border-l pl-1.5'>

              <svg
                className={`w-5 h-5 transition-transform duration-200 ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-sm shadow-lg z-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2.5 text-left text-second hover:bg-purple-100 transition first:rounded-t-sm last:rounded-b-sm"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Display Order */}
        <div className="mb-6">
          <label className="block text-first font-medium mb-1.5">{home_mng.do}</label>
          <input
            type="number"
            value={displayOrder}
            onChange={(e) => setDisplayOrder(parseInt(e.target.value) || 1)}
            min="1"
            className="w-full px-4 py-1  border border-gray-300 rounded-sm text-second placeholder:text-third focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="e.g. 1"
          />
          <p className="text-xs text-third mt-1">{home_mng.alf}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <Cancel onClick={() => setopenedit(false)} />
          <Purple_button label={home_mng.uc} />
        </div>
      </div>
    </>
  );
};

export default Edit;