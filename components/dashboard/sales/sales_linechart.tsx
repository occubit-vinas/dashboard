"use client";

import { useState } from "react";
import { TIMEFRAME } from "@/data/dashboard/constants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Sales_linechart = () => {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "year">("month");

  // Mock dataset for different timeframes
  const datasets = {
    day: [
      { date: "Mon", revenue: 10, orders: 6 },
      { date: "Tue", revenue: 12, orders: 8 },
      { date: "Wed", revenue: 8, orders: 5 },
      { date: "Thu", revenue: 14, orders: 9 },
      { date: "Fri", revenue: 18, orders: 11 },
      { date: "Sat", revenue: 16, orders: 10 },
      { date: "Sun", revenue: 20, orders: 13 },
    ],
    week: [
      { date: "W1", revenue: 55, orders: 30 },
      { date: "W2", revenue: 70, orders: 45 },
      { date: "W3", revenue: 65, orders: 40 },
      { date: "W4", revenue: 80, orders: 50 },
    ],
    month: [
      { date: "Jan", revenue: 40, orders: 20 },
      { date: "Feb", revenue: 45, orders: 25 },
      { date: "Mar", revenue: 60, orders: 30 },
      { date: "Apr", revenue: 75, orders: 40 },
      { date: "May", revenue: 70, orders: 35 },
      { date: "Jun", revenue: 85, orders: 45 },
    ],
    year: [
      { date: "2020", revenue: 200, orders: 100 },
      { date: "2021", revenue: 250, orders: 150 },
      { date: "2022", revenue: 300, orders: 180 },
      { date: "2023", revenue: 350, orders: 210 },
      { date: "2024", revenue: 420, orders: 250 },
    ],
  };

  const data = datasets[timeframe];

  const formatYAxis = (value: number) => `${value}k`;

  return (
    <div className="w-[671px] bg-white rounded-lg shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] p-[20px] h-[302px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-main">Revenue Trend</h2>
          <p className="text-sm text-gray-500">Revenue and order volume</p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex bg-purple-100 rounded-full overflow-hidden">
          {["day", "week", "month", "year"].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf as any)}
              className={`px-3 py-2 text-sm capitalize transition-colors rounded-full ${
                timeframe === tf
                  ? "bg-purple-700 text-white"
                  : "text-purple-700 hover:bg-purple-200"
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[195.48px] w-[658px] -translate-x-7">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" /> {/* light gray horizontal lines */}
            <XAxis dataKey="date" tick={{ fill: "#6b7280", fontSize: 12 }} />
            <YAxis
              tickFormatter={formatYAxis}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
              }}
            />
            <Line
              type="linear" // not smooth
              dataKey="revenue"
              stroke="#7e22ce" // purple-700
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
            />
            <Line
              type="linear"
              dataKey="orders"
              stroke="#22c55e" // green-500
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Sales_linechart;
