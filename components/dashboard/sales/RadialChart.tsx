"use client";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
  PolarAngleAxis,
} from "recharts";
import { customer_radial_chart } from "@/data/dashboard/constants";
import { sales_radial_chart } from "@/data/dashboard/constants";
const RadialChart = ({ data, origin }) => {
  const cus_radial_title = customer_radial_chart.title.TITLE;
  const sal_radial_title = sales_radial_chart.metadata.TITLE;
  const sal_radial_desc = sales_radial_chart.metadata.DESC;
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 w-[671px] h-[302px] p-[20px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <div className="flex flex-col gap-[2px]">
        <h2 className="text-main font-semibold">{origin === 'sales' ? sal_radial_title : cus_radial_title}</h2>
        {origin === 'sales' && <p className="text-sm text-gray-500">
          {sal_radial_desc}
        </p>}
      </div>

      {/* Chart + Legend */}
      <div className="flex flex-row items-center justify-center w-full h-full gap-[40px]">

        {/* Radial Chart */}
        <div className="w-[220px] h-[220px] ">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="3%"
              outerRadius="100%"
              barSize={12}
              cx="50%"
              cy="50%"
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              {/* Always needed for radial bars */}
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                tick={false}
              />

              <RadialBar
                dataKey="value"
                background
                cornerRadius={8}
              />

              {/* Tooltip */}
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                  fontSize: "12px",
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Right Side Legend */}
        <div className="flex flex-col space-y-3 w-[260px]">
          {data.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center w-full"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>
                <span className="text-gray-700 text-sm">{item.name}</span>
              </div>

              <span className="font-semibold text-gray-800 text-sm">
                {item.value}%
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RadialChart;
