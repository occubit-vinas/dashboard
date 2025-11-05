// components/sidebar/top_buttons.tsx
import React from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { MdOutlineRefresh } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
export const SearchBar = () => {
  return (
    <div className="border border-gray-700 rounded-2xl flex flex-row items-center px-3 py-2">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-desc placeholder:text-gray-500"
      />
    </div>
  );
};

export const Filter = () => {
  return (
    <div className="border border-gray-700 rounded-2xl flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <BiFilterAlt />
      <p className="text-desc ml-1">Filter</p>
    </div>
  );
};
