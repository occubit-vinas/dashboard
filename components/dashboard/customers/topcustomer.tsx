"use client";
import React from "react";
import Image from "next/image";

interface Customer {
  id: string;
  email: string;
  star: number;
}

const TopCustomer = ({ data }: { data: Customer[] }) => {
  return (
    <div className="w-full p-4 bg-white rounded-2xl flex flex-col gap-3 shadow-sm h-[577px]">
      {/* Header */}
      <div>
        <h1 className="text-main">Top Customers</h1>
        <p className="text-sm text-gray-600 border-b border-gray-200 pb-1">
          Highest spending customers
        </p>
      </div>

      {/* Customer List */}
      <div className="w-full h-full overflow-y-auto max-h-[500px] flex flex-col gap-2">
        {data.map((cur, index) => (
          <div
            key={index}
            className="w-full bg-purple-50 hover:bg-purple-100 transition-colors duration-200 flex items-center justify-between p-3 rounded-lg"
          >
            {/* Left: Info */}
            <div className="flex flex-col">
              <p className="font-semibold text-gray-900 text-sm">{cur.id}</p>
              <p className="text-gray-600 text-xs">{cur.email}</p>
            </div>

            {/* Right: Rating */}
            <div className="flex gap-1">
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
