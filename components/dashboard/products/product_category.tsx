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

// Example dataset
const data = [
  { category: "Kurti", revenue: 45 },
  { category: "Gown", revenue: 38 },
  { category: "Dress", revenue: 55 },
  { category: "Saree", revenue: 30 },
  { category: "Lehenga", revenue: 50 },
  { category: "Top", revenue: 27 },
];

const ProductCategory = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-white rounded-lg  p-6 shadow">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-main">
          Product Categories
        </h2>
        <p className="text-sm text-gray-500">Revenue by product category</p>
        <hr className="border-[#6C6C80] border-1.5 mt-2 w-full" />
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
  <BarChart
    data={data}
    margin={{ top: 0, right: 0, left: 0, bottom: 0 }} // add spacing
    barCategoryGap="25%"  // increase space between bars
    barGap={8}            // extra gap between bars
  >
    {/* Horizontal Grid Only */}
    <CartesianGrid
      strokeDasharray="4 4"
      stroke="#e5e7eb"
      vertical={false}   // ❗ disables vertical lines
    />

    {/* X Axis */}
    <XAxis
      dataKey="category"
      tick={{ fill: "#6b7280", fontSize: 12 }}
      axisLine={false}
      tickLine={false}
      dy={10}           // ❗ moves labels downward (adds space)
    />

    {/* Y Axis */}
    <YAxis
      tickFormatter={(v) => `${v}k`}
      tick={{ fill: "#6b7280", fontSize: 12 }}
      axisLine={false}
      tickLine={false}
      dx={-5}           // pulls labels closer to bars
    />

    {/* Tooltip */}
    <Tooltip
      formatter={(value: number) => [`${value}k`, "Revenue"]}
      cursor={{ fill: "rgba(162,104,245,0.1)" }}
    />

    {/* Bars */}
    <Bar
      dataKey="revenue"
      radius={[4, 4, 0, 0]}
      onMouseEnter={(_, index) => setActiveIndex(index)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {data.map((_, index) => (
        <Cell
          key={`cell-${index}`}
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

export default ProductCategory;
