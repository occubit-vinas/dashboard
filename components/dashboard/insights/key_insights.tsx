"use client";

import React from "react";
import Image from "next/image";
import { KEY_INSIGHTS } from "@/data/dashboard/constants";
const insights = [
  {
    id: 1,
    title: KEY_INSIGHTS.title1,
    description:
      KEY_INSIGHTS.desc1,
    image: "/dashboard/trend2.png",
    bg: "bg-[#4A3AFF1A]",
    color: '#4A3AFF'
  },
  {
    id: 2,
    title: KEY_INSIGHTS.title2,
    description:
      KEY_INSIGHTS.desc2,
    image: "/dashboard/profile-2user.png",
    bg: "bg-[#3DDC971A]",
    color: '#3DDC97'
  },
];

const KeyInsights = () => {
  return (
    <div className="min-h-[295px] w-[872px] p-[20px] bg-white  rounded-2xl flex flex-col gap-[20px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div>
        <h1 className="text-main">{KEY_INSIGHTS.title}</h1>
        <p className="text-md text-gray-500 font-thin">
          {KEY_INSIGHTS.desc}
        </p>
      </div>

      {/* Insights List */}
      <div className="flex flex-col gap-[10px]">
        {insights.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} flex flex-row items-center gap-[10px] px-[20px] py-[10px] min-h-[59px] rounded-xl`}
          >
            {/* Left: Icon / Image */}
            <div
              className={`relative ${item.image === "trend.svg" ? "h-[12px] w-[20px]" : "h-[20px] w-[20px]"
                }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain rounded-md"
              />
            </div>


            {/* Right: Text */}
            <div className="flex flex-col gap-1.5">
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
