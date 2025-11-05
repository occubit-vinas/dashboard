'use client'
// components/sidebar/top_buttons.tsx
import React,{useState} from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { MdOutlineRefresh } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { BiExport } from "react-icons/bi";
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import Image from 'next/image';
export const SearchBar = () => {
  return (
    <div className="border border-gray-700 rounded-md flex flex-row items-center px-3 py-2">
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
    <div className="border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <BiFilterAlt />
      <p className="text-desc ml-1">Filter</p>
    </div>
  );
};
export const Showfilter = ({setshowfilter,showfilter}) => {
  return (
    <div className="border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer" onClick={()=>setshowfilter(!showfilter)}>
      <BiFilterAlt />
      <p className="text-desc ml-1">Show Filter</p>
    </div>
  );
};
export const Hidefilter = ({setshowfilter,showfilter}) => {
  return (
    <div className="border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer btn-clr text-white" onClick={()=>setshowfilter(!showfilter)}>
      <BiFilterAlt />
      <p className="text-white ml-1">Hide Filter</p>
    </div>
  );
};
export const Refresh = () => {
  return (
    <div className=" border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <MdOutlineRefresh /> 
      <p className="text-desc ml-1">Refresh</p>
    </div>
  );
};
export const Add_cat = ({onClick}) => {
      

  return (
    <div className="btn-clr border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer" onClick={onClick}>
      <CiSquarePlus className='text-white'/> 
      <p className="text-white ml-1">Add Category</p>
    </div>
  );
};

export const Add_color_varient = ({onClick}) => {
  return (
    <div className="w-50 btn-clr border border-gray-700 rounded-md flex flex-row justify-center items-center gap-1 px-3 py-2 cursor-pointer" onClick={onClick}>
       <Image src='/dashboard/add-square.png' height={15} width={15}/> 
      <p className="text-white">Add Color Varients</p>
    </div>
  );
};

export const Cancel = ({onClick}) => {
  return (
    <div className=" border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer" onClick={onClick}>
      <p className="text-desc ">Cancel</p>
    </div>
  );
};

export const Create = ({onClick}) => {
  return (
    <div className=" border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer btn-clr text-white" onClick={onClick}>
      
      <p className="">Create</p>
    </div>
  );
};

export const Add_product = ({onClick}) => {
      

  return (
    <div className="btn-clr border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer" onClick={onClick}>
      <CiSquarePlus className='text-white'/> 
      <p className="text-white ml-1">Add Product</p>
    </div>
  );
};

export const Export = () => {
  return (
    <div className=" border border-gray-700 rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <BiExport />
      <p className="text-desc ml-1">Export</p>
    </div>
  );
};


export const SortDropdown = ({setsortSelected,setsortOpen,sortselected,sortOpen}) => {
  
  const options = [
    'Date Created',
    'Date Updated',
    'Name',
    'Price',
    'Stock',
    'Rating',
  ];

  const handleSelect = (option: string) => {
    setsortSelected(option);
    setsortOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setsortOpen(!sortOpen)}
        className="flex items-center justify-between gap-2 bg-white border border-gray-300 rounded-sm px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
      >
        {sortselected}
        {sortOpen ? <IoChevronUp /> : <IoChevronDown />}
      </button>

      {sortOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-sm shadow-md z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#F9F4FF] ${
                sortselected === option ? 'text-[#7E30ED] font-medium' : 'text-gray-800'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};



export const SortOrderButton = ({order,setOrder}) => {
  

  const toggleOrder = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  };

  return (
    <button
      onClick={toggleOrder}
      className="flex items-center gap-2 bg-white border border-gray-300 rounded-sm px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
    >
      {order === 'asc' ? (
        <>
          <BsArrowUpShort className="text-lg" />
          Ascending
        </>
      ) : (
        <>
          <BsArrowDownShort className="text-lg" />
          Descending
        </>
      )}
    </button>
  );
};
