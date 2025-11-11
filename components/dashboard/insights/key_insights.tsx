"use client";

import React from "react";
import Image from "next/image";

const insights = [
  {
    id: 1,
    title: "Revenue Growth",
    description:
      "Revenue is up +17.6% compared to last period. Keep up the great work!",
    image: "/dashboard/trend2.png",
    bg: "bg-[#4A3AFF1A]",
    color:'#4A3AFF'
  },
  {
    id: 2,
    title: "Customer Retention",
    description:
      "Customer retention rate is 50%. Focus on satisfaction to improve retention.",
    image: "/dashboard/profile-2user.png",
    bg: "bg-[#3DDC971A]",
    color:'#3DDC97'
  },
];

const KeyInsights = () => {
  return (
    <div className="w-full bg-white p-5 rounded-2xl flex flex-col gap-4 shadow-sm">
      {/* Header */}
      <div>
        <h1 className="text-main">Key Insights</h1>
        <p className="text-sm text-gray-500 border-b border-gray-200 pb-2">
          Performance metrics and business highlights
        </p>
      </div>

      {/* Insights List */}
      <div className="flex flex-col gap-3">
        {insights.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} flex flex-row items-center gap-3 p-3 rounded-xl`}
          >
            {/* Left: Icon / Image */}
            <div className="">
              <Image
                src={item.image}
                alt={item.title}
                width={35}
                height={60}
                className="rounded-md "
              />
            </div>

            {/* Right: Text */}
            <div className="flex flex-col">
              <h2 className={` insights-title `} style={{ color: item.color }}>
                {item.title}
              </h2>
              <p className="insights-desc">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyInsights;
