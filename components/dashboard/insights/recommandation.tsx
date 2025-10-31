"use client";

import React from "react";
import Image from "next/image";

const recommendations = [
  {
    id: 1,
    title: "Optimize Top Products",
    description:
      "Focus marketing efforts on your best-selling products to maximize revenue.",
    image: "/dashboard/ok.png",
    bg: "bg-[#3DDC971A]",
    textColor: "text-[#0F9D58]", // dark green tone
  },
  {
    id: 2,
    title: "Inventory Management",
    description:
      "Set up automated reorder points to prevent stock outs and maintain optimal inventory levels.",
    image: "/dashboard/info.png",
    bg: "bg-[#F59E0B1A]",
    textColor: "text-[#B45309]", // darker amber tone
  },
  {
    id: 3,
    title: "Customer Engagement",
    description:
      "Implement loyalty programs and personalized marketing to increase customer retention.",
    image: "/dashboard/info.png",
    bg: "bg-[#4A3AFF1A]",
    textColor: "text-[#4A3AFF]", // deep purple tone
  },
];

const Recommendation = () => {
  return (
    <div className="w-full bg-white p-5 rounded-2xl flex flex-col gap-4 shadow-sm">
      {/* Header */}
      <div>
        <h1 className="text-main">Recommendations</h1>
        <p className="text-sm text-gray-500 border-b border-gray-200 pb-2">
          Actionable insights for growth
        </p>
      </div>

      {/* Recommendation Boxes */}
      <div className="flex flex-col gap-3">
        {recommendations.map((item) => (
          <div
            key={item.id}
            className={`${item.bg} flex flex-row items-center gap-3 p-3 rounded-xl`}
          >
            {/* Image */}
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                width={40}
                height={40}
                className="rounded-md object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col">
              <h2
                className={`insights-title ${item.textColor}`}
              >
                {item.title}
                
              </h2>
              <p
                className={`insights-desc ${item.textColor}/80`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
