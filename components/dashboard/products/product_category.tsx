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
        <hr className="border-gray-200 mt-2 w-full" />
      </div>

      {/* Chart */}
      <div className="w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
          >
            {/* Dashed Grid */}
            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />

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
            />

            {/* Tooltip */}
            <Tooltip
              formatter={(value: number) => [`${value}k`, "Revenue"]}
              cursor={{ fill: "rgba(162,104,245,0.1)" }}
            />

            {/* Bars */}
            <Bar
              dataKey="revenue"
              radius={[6, 6, 0, 0]}
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
