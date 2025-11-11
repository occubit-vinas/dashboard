"use client";

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const RadialChart = ({data}) => {

  return (
    <div className="w-full bg-white rounded-lg shadow p-6 flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-main">Sales by Category</h2>
        <p className="text-sm text-gray-500">Key performance indicators breakdown</p>
        {/* full-width border */}
        <hr className="border-gray-600 border-1 mt-2 w-full" />
      </div>

      {/* Chart + Legend Side by Side */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Chart */}
        <div className="w-full md:w-2/3 h-103 flex justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="30%"
              outerRadius="90%"
              barSize={10} // thinner line width
              data={data}
              startAngle={90} // ensures all start from same base point
              endAngle={360} // completes the circle uniformly
            >
              <RadialBar
                minAngle={15}
                clockWise
                dataKey="value"
                cornerRadius={4}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "6px",
                }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend - aligned to right side of chart */}
        <div className="md:w-1/3 w-full mt-6 md:mt-0 md:pl-8 flex flex-col items-start">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
          <ul className="space-y-2">
            {data.map((item) => (
              <li key={item.name} className="flex items-center space-x-2">
                <span
                  className="inline-block w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.fill }}
                ></span>
                <span className="text-gray-700 text-sm">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;
