'use client'
// components/sidebar/top_buttons.tsx
import React,{useState} from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { MdOutlineRefresh } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { BiExport } from "react-icons/bi";
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { CgViewGrid } from "react-icons/cg";
import { PiListBold } from "react-icons/pi";
import Image from 'next/image';
export const SearchBar = () => {
  return (
    <div className="border border-[#6C6C80] rounded-md flex flex-row items-center px-3 py-2">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-second placeholder:text-gray-500"
      />
    </div>
  );
};

export const Filter = () => {
  return (
    <div className="border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <BiFilterAlt />
      <p className="text-second ml-1">Filter</p>
    </div>
  );
};
export const Showfilter = ({setshowfilter,showfilter}) => {
  return (
    <div className="border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer" onClick={()=>setshowfilter(!showfilter)}>
      <BiFilterAlt />
      <p className="text-second ml-1">Show Filter</p>
    </div>
  );
};
export const Hidefilter = ({setshowfilter,showfilter}) => {
  return (
    <div className="border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer btn-clr text-white" onClick={()=>setshowfilter(!showfilter)}>
      <BiFilterAlt />
      <p className="text-white ml-1">Hide Filter</p>
    </div>
  );
};
export const Refresh = () => {
  return (
    <div className=" border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <MdOutlineRefresh /> 
      <p className="text-second ml-1">Refresh</p>
    </div>
  );
};
export const Add_cat = ({onClick}) => {
      

  return (
    <div className="btn-clr border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer" onClick={onClick}>
      {/* <CiSquarePlus className='text-white size-5'/>  */}
             <Image src='/dashboard/add-square.svg' height={15} width={15} alt='image'/> 

      <p className="text-white ml-1">Add Category</p>
    </div>
  );
};

export const Add_color_varient = ({onClick}) => {
  return (
    <div className="w-50 btn-clr border border-[#6C6C80] rounded-md flex flex-row justify-center items-center gap-1 px-3 py-2 cursor-pointer" onClick={onClick}>
       <Image src='/dashboard/add-square.svg' height={15} width={15} alt='image'/> 
      <p className="text-white">Add Color Varients</p>
    </div>
  );
};

export const Cancel = ({onClick}) => {
  return (
    <div className=" border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer" onClick={onClick}>
      <p className="text-second ">Cancel</p>
    </div>
  );
};
export const Preview_btn = ({onClick,label}) => {
  return (
    <div className=" border border-[#6C6C80] rounded-md flex flex-row justify-center items-center gap-1.5 px-3 py-2 cursor-pointer" onClick={onClick}>
        <Image src='/dashboard/eye.png' alt='img' height={10} width={10} className='size-4'/>
      <p className="text-second ">{label}</p>
    </div>
  );
};
export const White_button = ({onClick,label,img=''}) => {
  return (
    <div className=" border border-[#6C6C80] rounded-md flex flex-row gap-1.5 justify-center items-center px-3 py-2 cursor-pointer" onClick={onClick}>
      {img && <Image src={img} alt='img' height={10} width={10} className='size-4'/>}
      <p className="text-second ">{label}</p>
    </div>
  );
};
export const Purple_button = ({onClick,label,img=''}) => {
  return (
    <div className="  rounded-md flex flex-row gap-1.5 justify-center items-center px-3 py-1 cursor-pointer btn-clr  text-white " onClick={onClick}>
      {img && <Image src={img} alt='img' height={10} width={10} className='size-4 text-white'/>}
      <p className="">{label}</p>
    </div>
  );
};
export const Delete_button = ({onClick,label,img='/dashboard/trash.png'}) => {
  return (
    <div className=" border border-red-500 rounded-md flex flex-row gap-1.5 justify-center items-center px-3 py-1 cursor-pointer  text-white" onClick={onClick}>
      {img && <Image src={img} alt='img' height={10} width={10} className='size-4'/>}
      <p className="text-red-500">Delete</p>
    </div>
  );
};
export const Create = ({onClick}) => {
  return (
    <div className=" border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer btn-clr text-white" onClick={onClick}>
      
      <p className="">Create</p>
    </div>
  );
};

export const Add_product = ({onClick}) => {
      

  return (
    <div className="btn-clr border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer" onClick={onClick}>
      <Image src='/dashboard/add-square.svg' height={15} width={15} alt='img'/> 
      <p className="text-white ml-1">Add Product</p>
    </div>
  );
};
export const Add_Coupon = ({onClick}) => {
      

  return (
    <div className="btn-clr border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-1 cursor-pointer" onClick={onClick}>
      <Image src='/dashboard/add-square.svg' height={15} width={15} alt='image'/> 
      <p className="text-white ml-1">Add Coupon</p>
    </div>
  );
};
export const Export = () => {
  return (
    <div className=" border border-[#6C6C80] rounded-md flex flex-row justify-center items-center px-3 py-2 cursor-pointer">
      <BiExport />
      <p className="text-second ml-1">Export</p>
    </div>
  );
};
interface ViewButtonProps {
  bg_clr?: string;
  text_clr?: string;
  img_clr?: string;
  view: string;
  setview: (v: 'grid' | 'list') => void;
}
export const Grid_button = ({
  bg_clr = 'bg-white',
  text_clr = 'text-gray-600',
  img_clr = 'text-gray-600',
  view,
  setview,
}: ViewButtonProps) => (
  <div
    className={`${bg_clr} ${text_clr} border border-[#6C6C80] rounded-md flex items-center justify-center px-3 py-1 cursor-pointer`}
    onClick={() => view !== 'grid' && setview('grid')}
  >
    <CgViewGrid className={img_clr} />
    <span className="ml-1">Grid</span>
  </div>
);

export const List_button = ({
  bg_clr = 'bg-white',
  text_clr = 'text-gray-600',
  img_clr = 'text-gray-600',
  view,
  setview,
}: ViewButtonProps) => (
  <div
    className={`${bg_clr} ${text_clr} border border-[#6C6C80] rounded-md flex items-center justify-center px-3 py-1 cursor-pointer`}
    onClick={() => view !== 'list' && setview('list')}
  >
    <PiListBold className={img_clr} />
    <span className="ml-1">List</span>
  </div>
);
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
        className="flex items-center justify-between gap-2 bg-white border border-[#6C6C80] rounded-sm px-6 py-2 text-second hover:bg-gray-100 transition"
      >
        {sortselected}
        {sortOpen ? <IoChevronUp /> : <IoChevronDown />}
      </button>

      {sortOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-[#6C6C80]300 rounded-sm shadow-md z-10">
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
      className="flex items-center gap-2 bg-white border border-[#6C6C80] rounded-sm px-4 py-1 text-second hover:bg-gray-100 transition"
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


export const Old_new_sort = ({order,setOrder}) => {
  

  const toggleOrder = () => {
    setOrder(order === 'Newest First' ? 'Oldest First' : 'Newest First');
  };

  return (
    <button
      onClick={toggleOrder}
      className="flex items-center gap-2 bg-white border border-[#6C6C80] rounded-sm px-4 py-1 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
    >
      {order === 'Newest First' ? (
        <>
          <BsArrowUpShort className="text-lg" />
          Newest First
        </>
      ) : (
        <>
          <BsArrowDownShort className="text-lg" />
          Oldest First
        </>
      )}
    </button>
  );
};
export const Toggle_btn = ({ isActive, onClick }: { isActive: boolean; onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      role="switch"
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full 
        transition-all duration-300 ease-in-out 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2
        cursor-pointer select-none
        ${isActive ? 'bg-black' : 'bg-gray-400'}
      `}
    >
      {/* Sliding Knob */}
      <span
        className={`
          inline-block h-5 w-5 rounded-full bg-white 
          shadow-md transform transition-transform duration-300 ease-in-out
          ${isActive ? 'translate-x-5' : 'translate-x-0.5'}
        `}
      />
    </button>
  );
};
