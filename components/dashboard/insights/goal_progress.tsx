"use client";

import React from "react";
import { INSIGHTS_GOAL } from "@/data/dashboard/constants";
const goals = [
  {
    label: INSIGHTS_GOAL.t1,
    achieved: 12540,
    goal: 15000,
  },
  {
    label: INSIGHTS_GOAL.t2,
    achieved: 980,
    goal: 1200,
  },
  {
    label: INSIGHTS_GOAL.t3,
    achieved: 450,
    goal: 600,
  },
];

const GoalProgress = () => {
  return (
    <div className="relative bg-white  rounded-lg shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]  flex flex-col  max-h-[320px] min-w-[872px] p-[20px]">
      {/* Header */}
      <div>
        <h2 className="text-main">{INSIGHTS_GOAL.title}</h2>
        <p className="text-md text-gray-500 font-thin mb-[20px]">
          {INSIGHTS_GOAL.desc}
        </p>
      </div>

      {/* Dashed percentage lines in background */}
      <div className="absolute inset-0 pt-[130px]  pointer-events-none">
        <div className="relative w-full h-[170px] ">
          {["0k", "25k", "50k", "75k", "100k"].map((mark, index) => (
            <div
              key={index}
              className={`absolute top-0 bottom-0  ${index === 0 ? 'translate-x-7':''} ${index === 4 ? '-translate-x-9':''} ${index !== 0 && index !== 4 && 'border-l border-dashed border-gray-300'}`}
              style={{ left: `${index * 25}%` }}
            >
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs text-gray-500"
              >
                {mark}
              </span>
            </div>
          ))}
        </div>
      </div>


      {/* Goals Section */}
      <div className="flex flex-col gap-2 relative z-10 max-h-[100px]">
        {goals.map((item, index) => {
          const percent = Math.min(
            (item.achieved / item.goal) * 100,
            100
          ).toFixed(1);

          return (
            <div key={index} className="flex flex-col gap-1">
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
