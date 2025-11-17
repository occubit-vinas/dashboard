"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example datasets for month and year
const monthlyData = [
  { name: "Jan", customers: 1.2 },
  { name: "Feb", customers: 1.6 },
  { name: "Mar", customers: 2.0 },
  { name: "Apr", customers: 2.8 },
  { name: "May", customers: 3.2 },
  { name: "Jun", customers: 3.9 },
  { name: "Jul", customers: 4.5 },
  { name: "Aug", customers: 4.8 },
  { name: "Sep", customers: 5.2 },
  { name: "Oct", customers: 5.9 },
  { name: "Nov", customers: 6.3 },
  { name: "Dec", customers: 7.0 },
];

const yearlyData = [
  { name: "2020", customers: 15 },
  { name: "2021", customers: 22 },
  { name: "2022", customers: 30 },
  { name: "2023", customers: 45 },
  { name: "2024", customers: 60 },
  { name: "2025", customers: 72 },
];

const CustomerGrowthChart = () => {
  const [timeframe, setTimeframe] = useState<"month" | "year">("month");

  const data = timeframe === "month" ? monthlyData : yearlyData;

  return (
    <div className="w-[671px] h-[302px] p-[20px] bg-white rounded-lg shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-main">
            Customer Growth
          </h2>
          <p className="text-sm text-gray-500">
            New customer registration over time
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex bg-purple-100 rounded-full overflow-hidden text-sm font-medium">
          {["month", "year"].map((option) => (
            <button
              key={option}
              onClick={() => setTimeframe(option as "month" | "year")}
              className={`px-3 py-1.5 capitalize transition-colors rounded-full ${
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
      <div className="w-[690px] h-[210px] -translate-x-10">
       <ResponsiveContainer width="100%" height="100%">
  <LineChart
    data={data}
    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
  >
    {/* Horizontal grid lines only */}
    <CartesianGrid 
      strokeDasharray="3 3" 
      stroke="#e5e7eb"
      vertical={false} 
    />

    <XAxis
      dataKey="name"
      tick={{ fontSize: 12, fill: "#6b7280" }}
      axisLine={false}
      tickLine={false}
    />

    <YAxis
      tickFormatter={(val) => `${val}k`}
      tick={{ fontSize: 12, fill: "#6b7280" }}
      domain={["auto", "auto"]}
      axisLine={false}
      tickLine={false}
    />

    <Tooltip
      formatter={(value) => [`${value}k`, "New Customers"]}
      cursor={{ stroke: "#a7f3d0", strokeWidth: 1 }}
    />

    <Line
      type="monotone"
      dataKey="customers"
      stroke="#22c55e"
      strokeWidth={2.5}
      dot={{ r: 4, fill: "#22c55e" }}
      activeDot={{ r: 6 }}
    />
  </LineChart>
</ResponsiveContainer>

      </div>
    </div>
  );
};

export default CustomerGrowthChart;
