"use client";

import React from "react";
import Image from "next/image";
import { inventory } from "@/data/dashboard/constants";
const LowStock = () => {
  return (
    <div className="rounded-2xl bg-white flex flex-col shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] w-[388px] h-[490px] p-[20px] gap-[20px]">
      {/* Header */}
      <div>
        <p className="text-main">{inventory.title}</p>
        <p className="text-gray-700 text-sm ">
          {inventory.desc}
        </p>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-[10px] overflow-y-auto max-h-[550px] scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center p-[8px] rounded-full bg-[#F4E9FF] h-[53px]"
          >
            {/* Product Info */}
            <div className='flex flex-row gap-[8px] justify-center items-center'>
            <Image src='/dashboard/close-circle.png' height={20} width={20} alt='img' className='size-[30px]'/>
            <div className="flex flex-col h-[37px]">
              <p className="font-normal text-gray-900 text-sm">
                Wireless Headphone
              </p>
              <p className="text-xs text-gray-600">Only 3 left</p>
            </div>
            </div>

            {/* Restock Icon */}
            {/* <Image
              src="/dashboard/restock.png"
              alt="Restock"
              width={42}
              height={28}
              className="cursor-pointer w-[72px] h-[25px]"
            /> */}
            <div className='flex  flex-row justify-center items-center gap-[2px] border-[0.5px] border-[#6C6C80] rounded-sm h-[20px] w-[74px] px-[6px] py-[4px] bg-white'>
              <Image src='whitetruck.svg' alt='img' height={15} width={15} className='size-[12px]'/>
              <p className='text-third'>Restock</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStock;
