"use client";

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Example datasets
const dataSets = {
  day: [
    { category: "Kurti", Aline: 20, Basic: 25, Dress: 15, Work: 10 },
    { category: "Gown", Aline: 18, Basic: 20, Dress: 12, Work: 9 },
    { category: "Saree", Aline: 22, Basic: 17, Dress: 14, Work: 8 },
    { category: "Top", Aline: 15, Basic: 18, Dress: 10, Work: 7 },
    { category: "Lehenga", Aline: 25, Basic: 22, Dress: 18, Work: 12 },
    { category: "Dress", Aline: 19, Basic: 21, Dress: 16, Work: 11 },
  ],
  week: [
    { category: "Kurti", Aline: 60, Basic: 70, Dress: 40, Work: 30 },
    { category: "Gown", Aline: 55, Basic: 50, Dress: 38, Work: 25 },
    { category: "Saree", Aline: 65, Basic: 60, Dress: 42, Work: 33 },
    { category: "Top", Aline: 48, Basic: 58, Dress: 35, Work: 20 },
    { category: "Lehenga", Aline: 72, Basic: 64, Dress: 52, Work: 37 },
    { category: "Dress", Aline: 58, Basic: 62, Dress: 46, Work: 28 },
  ],
  month: [
    { category: "Kurti", Aline: 180, Basic: 220, Dress: 150, Work: 100 },
    { category: "Gown", Aline: 140, Basic: 160, Dress: 120, Work: 90 },
    { category: "Saree", Aline: 200, Basic: 180, Dress: 130, Work: 110 },
    { category: "Top", Aline: 130, Basic: 150, Dress: 100, Work: 70 },
    { category: "Lehenga", Aline: 210, Basic: 190, Dress: 160, Work: 120 },
    { category: "Dress", Aline: 160, Basic: 170, Dress: 130, Work: 95 },
  ],
  year: [
    { category: "Kurti", Aline: 2100, Basic: 2600, Dress: 1800, Work: 1400 },
    { category: "Gown", Aline: 1700, Basic: 1900, Dress: 1500, Work: 1200 },
    { category: "Saree", Aline: 2300, Basic: 2100, Dress: 1600, Work: 1300 },
    { category: "Top", Aline: 1600, Basic: 1800, Dress: 1400, Work: 900 },
    { category: "Lehenga", Aline: 2400, Basic: 2200, Dress: 1800, Work: 1500 },
    { category: "Dress", Aline: 1900, Basic: 2000, Dress: 1600, Work: 1100 },
  ],
};

const colors = ["#E3C9FF", "#A268F5", "#7E30ED", "#5315B4"];

const Inventory_cat = () => {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "year">(
    "month"
  );
  const data = dataSets[timeframe];

  return (
    <div className="w-full bg-white rounded-lg shadow p-6 border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-main">
            Product By Category
          </h2>
          <p className="text-sm text-gray-500">
            Inventory distribution across categories
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex bg-purple-100 rounded-md overflow-hidden text-sm font-medium">
          {["day", "week", "month", "year"].map((option) => (
            <button
              key={option}
              onClick={() => setTimeframe(option as any)}
              className={`px-3 py-1.5 capitalize transition-colors ${
                timeframe === option
                  ? "bg-purple-700 text-white"
                  : "text-gray-700 hover:bg-purple-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 80, left: 0, bottom: 0 }}
          >
            {/* Horizontal dashed grid lines */}
            {/* <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" /> */}

            {/* Axes */}
            <XAxis
              dataKey="category"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            {/* <YAxis
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            /> */}

            {/* Tooltip */}
            <Tooltip cursor={{ fill: "rgba(162,104,245,0.1)" }} />

            {/* Legend */}
            <Legend
              verticalAlign="middle"
              align="right"
              layout="vertical"
              iconType="circle"
            />

            {/* Stacked Bars */}
            <Bar dataKey="Aline" stackId="a" fill={colors[0]} />
            <Bar dataKey="Basic" stackId="a" fill={colors[1]} />
            <Bar dataKey="Dress" stackId="a" fill={colors[2]} />
            <Bar dataKey="Work" stackId="a" fill={colors[3]}  radius={[6, 6, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Inventory_cat;
