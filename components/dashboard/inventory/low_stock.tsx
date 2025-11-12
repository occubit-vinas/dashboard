"use client";

import React from "react";
import Image from "next/image";

const LowStock = () => {
  return (
    <div className="rounded-2xl bg-white flex flex-col gap-2 w-full p-4 shadow-sm h-[620px]">
      {/* Header */}
      <div>
        <p className="text-main">Low Stock Alert</p>
        <p className="text-gray-700 text-sm border-b border-gray-200 pb-1">
          Products that need restocking soon
        </p>
      </div>

      {/* Product List */}
      <div className="flex flex-col gap-2 overflow-y-auto max-h-[550px] scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center p-3 rounded-lg bg-[#F4E9FF] hover:bg-purple-100 transition-colors"
          >
            {/* Product Info */}
            <div className="flex flex-col gap-0.5">
              <p className="font-normal text-gray-900 text-sm">
                Wireless Headphone
              </p>
              <p className="text-xs text-gray-600">Only 3 left</p>
            </div>

            {/* Restock Icon */}
            {/* <Image
              src="/dashboard/restock.png"
              alt="Restock"
              width={42}
              height={28}
              className="cursor-pointer w-[72px] h-[25px]"
            /> */}
            <div className='flex p-1.5 flex-row gap-1 border-1 border-[#6C6C80] rounded-sm'>
              <Image src='whitetruck.svg' alt='img' height={15} width={15}/>
              <p className='text-second'>Restock</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStock;
