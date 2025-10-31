"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";

// Example data
const data = [
  { name: "Kurti", rating: 80 },
  { name: "A-line", rating: 65 },
  { name: "Anarkali", rating: 90 },
  { name: "Dress", rating: 75 },
  { name: "T-shirt", rating: 55 },
];

// Bar colors
const barColors = ["#E3C9FF", "#A268F5", "#7E30ED", "#5315B4", "#280865"];

const ProductRating = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow p-6 border-b border-gray-200 ]">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-main">
          Products Ratings
        </h2>
        <p className="text-sm text-gray-500">
          Distribution of product ratings
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-[325px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 30, left: 50, bottom: 10 }}
          >
            {/* Vertical dashed lines at 25%, 50%, 75% */}
            <CartesianGrid
              horizontal={false}
              vertical={true}
              strokeDasharray="4 4"
              stroke="#e5e7eb"
            />

            <ReferenceLine x={25} stroke="#d1d5db" strokeDasharray="3 3" />
            <ReferenceLine x={50} stroke="#d1d5db" strokeDasharray="3 3" />
            <ReferenceLine x={75} stroke="#d1d5db" strokeDasharray="3 3" />

            {/* Axes */}
            <XAxis
              type="number"
              domain={[0, 100]}
              tickFormatter={(val) => `${val}%`}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              width={70}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value: number) => [`${value}%`, "Rating"]}
              cursor={{ fill: "rgba(162,104,245,0.1)" }}
            />

            {/* Bars */}
            <Bar
              dataKey="rating"
              barSize={14} // thinner bar
              radius={[10, 10, 10, 10]} // rounded both sides
            >
              {data.map((_, index) => (
                <Cell key={index} fill={barColors[index % barColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductRating;
