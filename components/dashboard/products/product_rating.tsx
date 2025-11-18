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
import { product_categorie_rating } from "@/data/dashboard/constants";
// Example data
const data = [
  { name: product_categorie_rating.category.ALINE, rating: 80 },
  { name: product_categorie_rating.category.ANARKALI, rating: 65 },
  { name: product_categorie_rating.category.DRESS, rating: 90 },
  { name: product_categorie_rating.category.KURTI, rating: 75 },
  { name: product_categorie_rating.category.LENGHA, rating: 55 },
];

// Bar colors
const barColors = ["#E3C9FF", "#A268F5", "#7E30ED", "#5315B4", "#280865"];

const ProductRating = () => {
  return (
    <div className=" bg-white rounded-lg  p-[20px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] h-[325px] w-[872px]">
      {/* Header */}
      <div className="">
        <h2 className="text-main">
          {product_categorie_rating.TITLE2}
        </h2>
        <p className="text-sm text-gray-500 ">
          {product_categorie_rating.DESC2}
        </p>
      </div>

      {/* Chart */}
      <div className=" h-[240px] -translate-x-8 w-[850px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
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
              tickFormatter={(val) => {
                const starMap = {
                  0: "1 star",
                  25: "2 star",
                  50: "3 star",
                  75: "4 star",
                  100: "5 star",
                };
                return starMap[val] || "";
              }}
              tick={{ fill: "#6b7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              type="category"
              dataKey="name"
              tick={{ fill: "#6b7280", fontSize: 12 ,textAnchor:'start',dx:-50}}
              width={90}
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
