"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { INSIGHTS_SALES } from "@/data/dashboard/constants";
// Example dataset
const data = [
  { category: "1 oct", revenue: 45 },
  { category: "2 oct", revenue: 38 },
  { category: "3 oct", revenue: 55 },
  { category: "4 oct", revenue: 30 },
  { category: "5 oct", revenue: 50 },
  { category: "6 oct", revenue: 27 },
  { category: "7 oct", revenue: 27 },
  { category: "8 oct", revenue: 27 },
  { category: "9 oct", revenue: 27 },
  { category: "10 oct", revenue: 27 },
];

const Sales_valocity = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] min-w-[872px] max-h-[320px] p-[20px]">
      {/* Header */}
      <div>
        <h2 className="text-main">{INSIGHTS_SALES.title}</h2>
        <p className="text-md text-gray-500 font-thin">{INSIGHTS_SALES.desc}</p>
        
      </div>

      {/* Chart */}
      <div className="w-[850px] h-[220px] -translate-x-7 translate-y-3">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap={35}     // 👈 adds spacing between bars
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            {/* Horizontal grid only */}
            <CartesianGrid
              vertical={false}       // 👈 remove vertical lines
              horizontal={true}      // 👈 keep horizontal lines
              stroke="#e5e7eb"
              strokeDasharray="0"    // 👈 solid lines instead of dashed
            />

            {/* X & Y Axes */}
            <XAxis
              dataKey="category"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(val) => `${val}k`}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
               interval="preserveStartEnd"  
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value: number) => [`${value}k`, "Revenue"]}
              cursor={{ fill: "rgba(162,104,245,0.1)" }}
            />

            {/* Bars */}
            <Bar
              dataKey="revenue"
              barSize={50}                   // 👈 optional: controls bar thickness
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={activeIndex === index ? "#A268F5" : "#E3C9FF"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
};

export default Sales_valocity;
