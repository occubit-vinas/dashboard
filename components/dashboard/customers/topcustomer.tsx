"use client";
import React from "react";
import Image from "next/image";
import {btn_label} from '@/data/dashboard/constants';
interface Customer {
  id: string;
  email: string;
  star: number;
}

const TopCustomer = ({ data }: { data: Customer[] }) => {
  return (
    <div className="w-[388px] h-[458px] px-[20px] pt-[20px] bg-white rounded-2xl flex flex-col shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div>
        <h1 className="text-main">{btn_label.tp}</h1>
        <p className="text-sm text-gray-600  pb-[20px]">
          {btn_label.kpi}
        </p>
      </div>

      {/* Customer List */}
      <div className=" overflow-y-auto  flex flex-col gap-[8px] scroll-container">
        {data.map((cur, index) => (
          <div
            key={index}
            className=" bg-[#F4E9FF] h-[53px] p-[8px] hover:bg-purple-100 transition-colors duration-200 flex items-center justify-between rounded-full"
          >
            {/* Left: Info */}
            <div className='flex flex-row gap-[8px] justify-center items-center'>
              <Image src='/dashboard/edit.png' height={15} width={15} className='size-[30px]' alt='img'/>
                <div className="flex flex-col">
                   <p className="text-second2">{cur.id}</p>
                  <p className="text-gray-600 text-xs">{cur.email}</p>
              </div>
            </div>
            

            {/* Right: Rating */}
            <div className="flex flex-row gap-[5px]">
              {Array.from({ length: 5 }, (_, i) => (
                <Image
                  key={i}
                  src={
                    i < (cur.star ?? 0)
                      ? "/dashboard/starr.png"
                      : "/dashboard/starthollow.png"
                  }
                  alt="Star"
                  width={18}
                  height={18}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCustomer;
