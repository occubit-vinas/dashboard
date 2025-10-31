"use client";

import React from "react";

const goals = [
  {
    label: "Revenue Goal",
    achieved: 12540,
    goal: 15000,
  },
  {
    label: "Order Goal",
    achieved: 980,
    goal: 1200,
  },
  {
    label: "Customer Goal",
    achieved: 450,
    goal: 600,
  },
];

const GoalProgress = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-6 flex flex-col gap-6 relative h-[440px]">
      {/* Header */}
      <div>
        <h2 className="text-main">Goal Progress</h2>
        <p className="text-sm text-gray-500">
          Monthly targets and achievements
        </p>
      </div>

      {/* Dashed percentage lines in background */}
      <div className="absolute left-0 right-0 top-20 bottom-25 pointer-events-none">
        <div className="relative w-full h-full">
          {["", "25%", "50%", "75%", ""].map((mark, index) => (
            <div
              key={index}
              className="absolute top-0 bottom-0 border-l border-dashed border-gray-300"
              style={{ left: `${index * 25}%` }}
            >
              <span
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-gray-500"
              >
                {mark}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Goals Section */}
      <div className="flex flex-col gap-6 relative z-10">
        {goals.map((item, index) => {
          const percent = Math.min(
            (item.achieved / item.goal) * 100,
            100
          ).toFixed(1);

          return (
            <div key={index} className="flex flex-col gap-2">
              {/* Title + Value */}
              <div className="flex justify-between text-sm font-medium text-gray-800">
                <span>{item.label}</span>
                <span>
                  {item.achieved.toLocaleString()} /{" "}
                  {item.goal.toLocaleString()}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-3 bg-gradient-to-r from-purple-400 to-purple-700 rounded-full transition-all duration-500"
                  style={{ width: `${percent}%` }}
                />
              </div>

              {/* Percentage achieved */}
              <div className="flex justify-end text-xs text-gray-600 font-medium">
                {percent}% achieved
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GoalProgress;
