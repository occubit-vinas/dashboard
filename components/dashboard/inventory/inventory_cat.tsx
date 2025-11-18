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
import { product_categorie_rating } from "@/data/dashboard/constants";
import { inventory } from "@/data/dashboard/constants";
// Example datasets
const dataSets = {
  day: [
    { category: product_categorie_rating.category.KURTI, Aline: 20, Basic: 25, Dress: 15, Work: 10 },
    { category: product_categorie_rating.category.GOWN, Aline: 18, Basic: 20, Dress: 12, Work: 9 },
    { category: product_categorie_rating.category.SAREE, Aline: 22, Basic: 17, Dress: 14, Work: 8 },
    { category: product_categorie_rating.category.TOP, Aline: 15, Basic: 18, Dress: 10, Work: 7 },
    { category: product_categorie_rating.category.LENGHA, Aline: 25, Basic: 22, Dress: 18, Work: 12 },
    { category: product_categorie_rating.category.DRESS, Aline: 19, Basic: 21, Dress: 16, Work: 11 },
  ],
  week: [
    { category: product_categorie_rating.category.KURTI, Aline: 60, Basic: 70, Dress: 40, Work: 30 },
    { category: product_categorie_rating.category.GOWN, Aline: 55, Basic: 50, Dress: 38, Work: 25 },
    { category: product_categorie_rating.category.SAREE, Aline: 65, Basic: 60, Dress: 42, Work: 33 },
    { category: product_categorie_rating.category.TOP, Aline: 48, Basic: 58, Dress: 35, Work: 20 },
    { category: product_categorie_rating.category.LENGHA, Aline: 72, Basic: 64, Dress: 52, Work: 37 },
    { category: product_categorie_rating.category.DRESS, Aline: 58, Basic: 62, Dress: 46, Work: 28 },
  ],
  month: [
    { category: product_categorie_rating.category.KURTI, Aline: 180, Basic: 220, Dress: 150, Work: 100 },
    { category: product_categorie_rating.category.GOWN, Aline: 140, Basic: 160, Dress: 120, Work: 90 },
    { category: product_categorie_rating.category.SAREE, Aline: 200, Basic: 180, Dress: 130, Work: 110 },
    { category: product_categorie_rating.category.TOP, Aline: 130, Basic: 150, Dress: 100, Work: 70 },
    { category: product_categorie_rating.category.LENGHA, Aline: 210, Basic: 190, Dress: 160, Work: 120 },
    { category: product_categorie_rating.category.DRESS, Aline: 160, Basic: 170, Dress: 130, Work: 95 },
  ],
  year: [
    { category: product_categorie_rating.category.KURTI, Aline: 2100, Basic: 2600, Dress: 1800, Work: 1400 },
    { category: product_categorie_rating.category.GOWN, Aline: 1700, Basic: 1900, Dress: 1500, Work: 1200 },
    { category: product_categorie_rating.category.SAREE, Aline: 2300, Basic: 2100, Dress: 1600, Work: 1300 },
    { category: product_categorie_rating.category.TOP, Aline: 1600, Basic: 1800, Dress: 1400, Work: 900 },
    { category: product_categorie_rating.category.LENGHA, Aline: 2400, Basic: 2200, Dress: 1800, Work: 1500 },
    { category: product_categorie_rating.category.DRESS, Aline: 1900, Basic: 2000, Dress: 1600, Work: 1100 },
  ],
};

// Bar colors
const colors = ["#E3C9FF", "#A268F5", "#7E30ED", "#5315B4"];

// Custom label names
const legendLabels = ["Aline", "Basic", "Dress", "Work"];

const Inventory_cat = () => {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "year">(
    "month"
  );

  const data = dataSets[timeframe];

  return (
    <div className=" bg-white rounded-lg shadow border border-gray-200 w-[1357px] h-[335px] p-[20px]">

      {/* Header + Timeframe Selector */}
      <div className="flex justify-between items-center ">
        <div>
          <h2 className="text-main mb-[1px]">
            {inventory.title2}
          </h2>
        </div>

        <div className="flex bg-purple-100 rounded-full overflow-hidden text-sm font-medium">
          {["day", "week", "month", "year"].map((option) => (
            <button
              key={option}
              onClick={() => setTimeframe(option as any)}
              className={`px-3 py-1.5 capitalize transition-colors ${timeframe === option
                  ? "bg-purple-700 text-white rounded-full"
                  : "text-gray-700 hover:bg-purple-200"
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* ⭐ Custom Legend */}
      <div className="flex gap-4 justify-start mb-2 pr-4">
        {legendLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-1">
            <span
              className="w-[8px] h-[8px] rounded-full inline-block"
              style={{ backgroundColor: colors[i] }}
            ></span>
            <span style={{ color: "#6C6C80", fontSize: "13px" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="h-[230px] w-[1330px] -translate-x-6 mt-[15px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>

            <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />

            {/* X Axis */}
            <XAxis
              dataKey="category"
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y Axis */}
            <YAxis
              tickFormatter={(value) => `${value / 1000}k`}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Tooltip */}
            <Tooltip cursor={{ fill: "rgba(162,104,245,0.1)" }} />

            {/* Bars (thinner) */}
            <Bar dataKey="Aline" stackId="a" fill={colors[0]} barSize={100} />
            <Bar dataKey="Basic" stackId="a" fill={colors[1]} barSize={18} />
            <Bar dataKey="Dress" stackId="a" fill={colors[2]} barSize={18} />
            <Bar dataKey="Work" stackId="a" fill={colors[3]} barSize={18} radius={[6, 6, 0, 0]} />

          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Inventory_cat;
